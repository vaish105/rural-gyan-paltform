# 🚀 Complete Setup Guide

## Step 1: MongoDB Atlas Setup (Recommended)

### Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Sign up for free account
3. Verify your email

### Create Database Cluster
1. Click "Build a Database"
2. Choose **FREE** (M0 Sandbox)
3. Select **AWS** as cloud provider
4. Choose region closest to you
5. Name your cluster (e.g., "edu-management")
6. Click "Create Cluster" (takes 3-5 minutes)

### Setup Database Access
1. Go to **Database Access** (left sidebar)
2. Click "Add New Database User"
3. Choose **Password** authentication
4. Username: `your_username` (e.g., `priyanshu17ks_db_user`)
5. Password: Create strong password (e.g., `MyPassword123`)
6. Database User Privileges: **Read and write to any database**
7. Click "Add User"

### Setup Network Access
1. Go to **Network Access** (left sidebar)
2. Click "Add IP Address"
3. Choose **Allow Access from Anywhere** (0.0.0.0/0)
4. Click "Confirm"

### Get Connection String
1. Go to **Database** → Click "Connect" on your cluster
2. Choose "Connect your application"
3. Driver: **Node.js**, Version: **4.1 or later**
4. Copy the connection string:
   ```
   mongodb+srv://username:<password>@cluster-name.xxxxx.mongodb.net/
   ```

### Update Environment Variables
1. Replace `<password>` with your actual password
2. Add database name at the end: `/edu_management`
3. **Important**: URL encode special characters in password:
   - `@` → `%40`
   - `#` → `%23`
   - `%` → `%25`
   - `+` → `%2B`
   - ` ` (space) → `%20`

**Example:**
- Password: `Rp@17sharma`
- Encoded: `Rp%4017sharma`
- Final URI: `mongodb+srv://username:Rp%4017sharma@cluster.mongodb.net/edu_management`

## Step 2: VS Code MongoDB Extension (Optional)

1. Install "MongoDB for VS Code" extension
2. Click MongoDB icon in sidebar
3. Click "Add Connection"
4. Paste your connection string (without `/edu_management`)
5. Connect to browse your database

## Step 3: API Keys Setup (Optional)

### OpenAI API (for AI Tutor)
1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create account and generate API key
3. Update in `.env`:
   ```
   OPENAI_API_KEY=sk-your-actual-api-key-here
   ```

### Google Translate API (for bilingual support)
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project or select existing
3. Enable "Cloud Translation API"
4. Go to "APIs & Services" → "Credentials"
5. Click "Create Credentials" → "API Key"
6. Copy the API key
7. Update in `.env`:
   ```
   GOOGLE_TRANSLATE_API_KEY=your-actual-api-key-here
   ```

### Cloudinary (for file uploads)
1. Go to [Cloudinary](https://cloudinary.com/)
2. Sign up for free account
3. Go to Dashboard
4. Copy: Cloud Name, API Key, API Secret
5. Update in `.env`:
   ```
   CLOUDINARY_CLOUD_NAME=your-cloud-name
   CLOUDINARY_API_KEY=your-api-key
   CLOUDINARY_API_SECRET=your-api-secret
   ```

## Step 4: Install Dependencies

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

## Step 5: Start the Application

```bash
# Terminal 1 - Start Backend
cd server
npm run dev

# Terminal 2 - Start Frontend
cd client
npm start
```

## Step 6: Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000

## Demo Login Credentials

- **Admin**: username: `admin`, password: `admin123`
- **Teacher**: username: `teacher1`, password: `teacher123`  
- **Student**: username: `student1`, password: `student123`

## 🚫 Common Issues & Solutions

### MongoDB Connection Errors

**Error: "bad auth : authentication failed"**
- Check username and password are correct
- Ensure user has proper database permissions

**Error: "URI must include hostname, domain name, and tld"**
- URL encode special characters in password:
  - `@` → `%40`, `#` → `%23`, `%` → `%25`
- Example: `Rp@17sharma` becomes `Rp%4017sharma`

**Error: "IP not whitelisted"**
- Add your IP to Network Access in MongoDB Atlas
- Or allow all IPs: `0.0.0.0/0`

### Server Issues

**Error: "Cannot find module"**
```bash
cd server && npm install
cd ../client && npm install
```

**Port already in use**
- Change PORT in server/.env to different number (e.g., 5001)

## 🔧 Minimal Setup (No API Keys Required)

The application will work with just MongoDB. API keys are only needed for:
- AI Tutor functionality (OpenAI)
- Real-time translation (Google Translate)
- File uploads (Cloudinary)

## 🐳 Docker Setup (Alternative)

```bash
# Start everything with Docker
docker-compose up -d
```

## 📝 Notes

- The JWT secrets are already set with secure defaults
- MongoDB will create the database automatically
- Demo users will be created on first run
- All features except AI/Translation work without API keys
- Always URL encode special characters in MongoDB passwords