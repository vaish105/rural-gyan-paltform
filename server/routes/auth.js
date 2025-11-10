const express = require('express');
const { body, validationResult } = require('express-validator');
const User = require('../models/User');
const Teacher = require('../models/Teacher');
const Student = require('../models/Student');
const { generateTokens, verifyRefreshToken } = require('../utils/jwt');
const { auth, authorize } = require('../middlewares/auth');

const router = express.Router();

// Register user (admin only)
router.post('/register', 
  auth,
  authorize('admin'),
  [
    body('username').isLength({ min: 3 }).trim(),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 }),
    body('fullName').notEmpty().trim(),
    body('role').isIn(['admin', 'teacher', 'student'])
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, email, password, fullName, role, ...additionalData } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({
        $or: [{ email }, { username }]
      });

      if (existingUser) {
        return res.status(400).json({ 
          message: 'User with this email or username already exists' 
        });
      }

      // Create user
      const user = new User({
        username,
        email,
        password,
        fullName,
        role
      });

      await user.save();

      // Create role-specific profile
      if (role === 'teacher') {
        const teacher = new Teacher({
          userId: user._id,
          qualifications: additionalData.qualifications || '',
          subjects: additionalData.subjects || [],
          assignedClasses: additionalData.assignedClasses || []
        });
        await teacher.save();
      } else if (role === 'student') {
        const student = new Student({
          userId: user._id,
          enrollNo: additionalData.enrollNo,
          standard: additionalData.standard,
          parentsContact: additionalData.parentsContact,
          address: additionalData.address
        });
        await student.save();
      }

      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          fullName: user.fullName,
          role: user.role
        }
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
);

// Login
router.post('/login',
  [
    body('username').notEmpty(),
    body('password').notEmpty()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, password } = req.body;

      // Find user
      const user = await User.findOne({ username });
      if (!user || !user.isActive) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Check password
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate tokens
      const { accessToken, refreshToken } = generateTokens(user._id);

      // Save refresh token
      user.refreshToken = refreshToken;
      await user.save();

      res.json({
        message: 'Login successful',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          fullName: user.fullName,
          role: user.role,
          photo: user.photo
        },
        accessToken,
        refreshToken
      });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
);

// Refresh token
router.post('/refresh', async (req, res) => {
  try {
    const { refreshToken } = req.body;

    if (!refreshToken) {
      return res.status(401).json({ message: 'Refresh token required' });
    }

    const decoded = verifyRefreshToken(refreshToken);
    const user = await User.findById(decoded.id);

    if (!user || user.refreshToken !== refreshToken) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens(user._id);

    user.refreshToken = newRefreshToken;
    await user.save();

    res.json({
      accessToken,
      refreshToken: newRefreshToken
    });
  } catch (error) {
    res.status(401).json({ message: 'Invalid refresh token' });
  }
});

// Get user profile
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password -refreshToken');
    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Logout
router.post('/logout', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.refreshToken = null;
    await user.save();

    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;