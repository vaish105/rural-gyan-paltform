import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Common
      "login": "Login",
      "logout": "Logout",
      "dashboard": "Dashboard",
      "profile": "Profile",
      "settings": "Settings",
      "save": "Save",
      "cancel": "Cancel",
      "edit": "Edit",
      "delete": "Delete",
      "view": "View",
      "add": "Add",
      "search": "Search",
      "loading": "Loading...",
      "error": "Error",
      "success": "Success",
      
      // Auth
      "username": "Username",
      "password": "Password",
      "email": "Email",
      "fullName": "Full Name",
      "loginTitle": "Sign In to Your Account",
      "loginSubtitle": "Enter your credentials to access your dashboard",
      "invalidCredentials": "Invalid credentials",
      "enterUsername": "Enter your username",
      "enterPassword": "Enter your password",
      "forgotPassword": "Forgot Password?",
      "loggingIn": "Logging in...",
      "dontHaveAccount": "Don't have an account?",
      "signUp": "Sign Up",
      "platformTitle": "National Digital Education Management and Learning Platform",
      "platformTagline": "Empowering India's Future Through Digital Education.",
      "createAccount": "Create Your Account",
      "alreadyHaveAccount": "Already have an account?",
      "logIn": "Log In",
      "emailAddress": "Username or Email Address",
      "enterFullName": "Enter your full name",
      "enterEmail": "Enter your username or email",
      "yourRole": "Your Role",
      "selectRole": "Select your role",
      "student": "Student",
      "teacher": "Teacher",
      "administrator": "Administrator",
      
      // Admin
      "adminDashboard": "Admin Dashboard",
      "teacherManagement": "Teacher Management",
      "studentManagement": "Student Management",
      "analytics": "Analytics",
      "logs": "Logs & Reports",
      "addTeacher": "Add Teacher",
      "addStudent": "Add Student",
      "totalTeachers": "Total Teachers",
      "totalStudents": "Total Students",
      "activeUsers": "Active Users",
      
      // Teacher
      "teacherDashboard": "Teacher Dashboard",
      "virtualClass": "Virtual Class",
      "quizSetup": "Quiz Setup",
      "allocatedSubjects": "Allocated Subjects",
      "classManagement": "Class Management",
      "performanceAnalysis": "Performance Analysis",
      "createQuiz": "Create Quiz",
      "startClass": "Start Class",
      
      // Student
      "studentDashboard": "Student Dashboard",
      "joinClass": "Join Class",
      "materials": "Materials",
      "aiTutor": "AI Tutor",
      "virtualCodeEditor": "Virtual Code Editor",
      "exams": "Exams",
      "quizzes": "Quizzes",
      "notes": "Notes",
      "attendance": "Attendance",
      "marks": "Marks",
      "performance": "Performance",
      
      // Quiz
      "quizTitle": "Quiz Title",
      "quizDescription": "Quiz Description",
      "questions": "Questions",
      "addQuestion": "Add Question",
      "question": "Question",
      "options": "Options",
      "correctAnswer": "Correct Answer",
      "duration": "Duration (minutes)",
      "startTime": "Start Time",
      "endTime": "End Time",
      "submitQuiz": "Submit Quiz",
      
      // Virtual Class
      "joinMeeting": "Join Meeting",
      "startMeeting": "Start Meeting",
      "shareScreen": "Share Screen",
      "muteAudio": "Mute Audio",
      "turnOffVideo": "Turn Off Video",
      "chat": "Chat",
      "participants": "Participants",
      "endClass": "End Class",
      
      // AI Tutor
      "askQuestion": "Ask a question...",
      "sendMessage": "Send Message",
      "aiTutorWelcome": "Hello! I'm your AI tutor. How can I help you today?",
      
      // Code Editor
      "runCode": "Run Code",
      "selectLanguage": "Select Language",
      "output": "Output",
      "clearOutput": "Clear Output",
      
      // Profile
      "personalInfo": "Personal Information",
      "changePassword": "Change Password",
      "uploadPhoto": "Upload Photo",
      "currentPassword": "Current Password",
      "newPassword": "New Password",
      "confirmPassword": "Confirm Password",
      
      // Notifications
      "loginSuccess": "Login successful!",
      "logoutSuccess": "Logged out successfully!",
      "profileUpdated": "Profile updated successfully!",
      "passwordChanged": "Password changed successfully!",
      "quizCreated": "Quiz created successfully!",
      "quizSubmitted": "Quiz submitted successfully!",
      "classStarted": "Class started successfully!",
      "classEnded": "Class ended successfully!"
    }
  },
  hi: {
    translation: {
      // Common
      "login": "लॉगिन",
      "logout": "लॉगआउट",
      "dashboard": "डैशबोर्ड",
      "profile": "प्रोफाइल",
      "settings": "सेटिंग्स",
      "save": "सेव करें",
      "cancel": "रद्द करें",
      "edit": "संपादित करें",
      "delete": "हटाएं",
      "view": "देखें",
      "add": "जोड़ें",
      "search": "खोजें",
      "loading": "लोड हो रहा है...",
      "error": "त्रुटि",
      "success": "सफलता",
      
      // Auth
      "username": "उपयोगकर्ता नाम",
      "password": "पासवर्ड",
      "email": "ईमेल",
      "fullName": "पूरा नाम",
      "loginTitle": "अपने खाते में साइन इन करें",
      "loginSubtitle": "अपने डैशबोर्ड तक पहुंचने के लिए अपनी जानकारी दर्ज करें",
      "invalidCredentials": "अमान्य क्रेडेंशियल",
      "enterUsername": "अपना उपयोगकर्ता नाम दर्ज करें",
      "enterPassword": "अपना पासवर्ड दर्ज करें",
      "forgotPassword": "पासवर्ड भूल गए?",
      "loggingIn": "लॉग इन हो रहा है...",
      "dontHaveAccount": "क्या आपका खाता नहीं है?",
      "signUp": "साइन अप करें",
      "platformTitle": "राष्ट्रीय डिजिटल शिक्षा प्रबंधन और शिक्षण मंच",
      "platformTagline": "डिजिटल शिक्षा के माध्यम से भारत के भविष्य को सशक्त बनाना।",
      "createAccount": "अपना खाता बनाएं",
      "alreadyHaveAccount": "क्या आपका पहले से खाता है?",
      "logIn": "लॉग इन",
      "emailAddress": "उपयोगकर्ता नाम या ईमेल पता",
      "enterFullName": "अपना पूरा नाम दर्ज करें",
      "enterEmail": "अपना उपयोगकर्ता नाम या ईमेल दर्ज करें",
      "yourRole": "आपकी भूमिका",
      "selectRole": "अपनी भूमिका चुनें",
      "student": "छात्र",
      "teacher": "शिक्षक",
      "administrator": "प्रशासक",
      
      // Admin
      "adminDashboard": "एडमिन डैशबोर्ड",
      "teacherManagement": "शिक्षक प्रबंधन",
      "studentManagement": "छात्र प्रबंधन",
      "analytics": "विश्लेषण",
      "logs": "लॉग्स और रिपोर्ट्स",
      "addTeacher": "शिक्षक जोड़ें",
      "addStudent": "छात्र जोड़ें",
      "totalTeachers": "कुल शिक्षक",
      "totalStudents": "कुल छात्र",
      "activeUsers": "सक्रिय उपयोगकर्ता",
      
      // Teacher
      "teacherDashboard": "शिक्षक डैशबोर्ड",
      "virtualClass": "वर्चुअल क्लास",
      "quizSetup": "क्विज़ सेटअप",
      "allocatedSubjects": "आवंटित विषय",
      "classManagement": "क्लास प्रबंधन",
      "performanceAnalysis": "प्रदर्शन विश्लेषण",
      "createQuiz": "क्विज़ बनाएं",
      "startClass": "क्लास शुरू करें",
      
      // Student
      "studentDashboard": "छात्र डैशबोर्ड",
      "joinClass": "क्लास में शामिल हों",
      "materials": "सामग्री",
      "aiTutor": "एआई ट्यूटर",
      "virtualCodeEditor": "वर्चुअल कोड एडिटर",
      "exams": "परीक्षाएं",
      "quizzes": "क्विज़",
      "notes": "नोट्स",
      "attendance": "उपस्थिति",
      "marks": "अंक",
      "performance": "प्रदर्शन"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;