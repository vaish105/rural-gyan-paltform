# AI-Powered Educational Management System

A comprehensive full-stack educational management system with role-based dashboards, AI integration, and bilingual support.

## 🚀 Features

### 👑 Admin Features
- **Teacher Management**: Add, edit, delete, and view teachers
- **Student Management**: Complete student lifecycle management
- **Analytics Dashboard**: Real-time charts and statistics
- **Logs & Reports**: Activity tracking and reporting

### 👨‍🏫 Teacher Features
- **Virtual Classroom**: Live video sessions with WebRTC
- **Quiz Management**: Create and manage quizzes with auto-grading
- **Class Management**: Student roster and performance tracking
- **Performance Analysis**: AI-driven student analytics

### 🎓 Student Features
- **Virtual Classes**: Join live sessions with real-time translation
- **AI Tutor**: ChatGPT-powered academic assistance
- **Virtual Code Editor**: Online coding environment
- **Materials & Exams**: Access notes, quizzes, and proctored exams

### 🌟 Additional Features
- **Bilingual Support**: English ↔ Hindi with react-i18next
- **Real-time Communication**: Socket.io for live features
- **AI Integration**: OpenAI API for tutoring and proctoring
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Theme switching capability

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Socket.io Client
- **Backend**: Node.js, Express.js, Socket.io
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (Access + Refresh tokens)
- **AI**: OpenAI API, TensorFlow.js
- **Translation**: Google Cloud Translate API
- **Deployment**: Docker, Nginx

## 📁 Project Structure

```
project-root/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   │   ├── Admin/      # Admin-specific components
│   │   │   ├── Teacher/    # Teacher-specific components
│   │   │   ├── Student/    # Student-specific components
│   │   │   └── Common/     # Shared components
│   │   ├── pages/          # Page components
│   │   ├── context/        # React context providers
│   │   ├── services/       # API services
│   │   └── utils/          # Utility functions
│   └── package.json
├── server/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── routes/            # API routes
│   ├── models/            # MongoDB models
│   ├── middlewares/       # Custom middleware
│   ├── config/            # Configuration files
│   └── utils/             # Utility functions
├── mobile/                # React Native app (future)
└── docker-compose.yml     # Docker configuration
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd digital-learning-2
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**
   ```bash
   cd ../server
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/edu_management
   JWT_SECRET=your_super_secret_jwt_key_here
   JWT_REFRESH_SECRET=your_super_secret_refresh_key_here
   OPENAI_API_KEY=your_openai_api_key_here
   GOOGLE_TRANSLATE_API_KEY=your_google_translate_api_key_here
   ```

5. **Start MongoDB**
   ```bash
   # Using MongoDB service
   sudo systemctl start mongod
   
   # Or using Docker
   docker run -d -p 27017:27017 --name mongodb mongo:6.0
   ```

6. **Start the development servers**
   
   **Terminal 1 - Backend:**
   ```bash
   cd server
   npm run dev
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd client
   npm start
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

### Demo Credentials

- **Admin**: `admin` / `admin123`
- **Teacher**: `teacher1` / `teacher123`
- **Student**: `student1` / `student123`

## 🐳 Docker Deployment

1. **Build and run with Docker Compose**
   ```bash
   docker-compose up -d
   ```

2. **Access the application**
   - Application: http://localhost
   - API: http://localhost:5000

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh access token

### Admin Endpoints
- `GET /api/admin/teachers` - Get all teachers
- `POST /api/admin/teachers` - Create teacher
- `PUT /api/admin/teachers/:id` - Update teacher
- `DELETE /api/admin/teachers/:id` - Delete teacher
- `GET /api/admin/students` - Get all students
- `POST /api/admin/students` - Create student
- `PUT /api/admin/students/:id` - Update student
- `DELETE /api/admin/students/:id` - Delete student
- `GET /api/admin/analytics` - Get analytics data

### Teacher Endpoints
- `GET /api/teacher/classes` - Get assigned classes
- `POST /api/teacher/quiz` - Create quiz
- `GET /api/teacher/quizzes` - Get all quizzes
- `PUT /api/teacher/quiz/:id` - Update quiz
- `DELETE /api/teacher/quiz/:id` - Delete quiz

### Student Endpoints
- `GET /api/student/dashboard` - Get dashboard data
- `GET /api/student/materials` - Get learning materials
- `POST /api/student/submit-quiz/:id` - Submit quiz
- `POST /api/student/ai-tutor` - Chat with AI tutor
- `POST /api/student/code-run` - Execute code

## 🔧 Configuration

### Environment Variables

**Server (.env)**
```env
# Database
MONGODB_URI=mongodb://localhost:27017/edu_management

# JWT
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_refresh_secret

# APIs
OPENAI_API_KEY=your_openai_key
GOOGLE_TRANSLATE_API_KEY=your_translate_key

# Server
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000
```

**Client (.env)**
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SOCKET_URL=http://localhost:5000
```

## 🧪 Testing

```bash
# Run server tests
cd server
npm test

# Run client tests
cd client
npm test
```

## 📱 Mobile App (React Native)

The mobile application will be developed using React Native and will share the same backend APIs.

```bash
cd mobile
npx react-native init EduMobileApp
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@edumanagement.com or join our Slack channel.

## 🗺️ Roadmap

- [ ] Complete Teacher Dashboard components
- [ ] Implement Student Dashboard features
- [ ] Add AI Tutor functionality
- [ ] Integrate WebRTC for video calls
- [ ] Add real-time notifications
- [ ] Implement file upload system
- [ ] Add mobile app development
- [ ] Performance optimization
- [ ] Security enhancements
- [ ] Comprehensive testing

---

**Built with ❤️ for education**

