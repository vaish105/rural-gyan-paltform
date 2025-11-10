import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Sidebar from '../components/Common/Sidebar';
import Header from '../components/Common/Header';
import AdminHome from '../components/Admin/AdminHome';
import TeacherManagement from '../components/Admin/TeacherManagement';
import StudentManagement from '../components/Admin/StudentManagement';
import Analytics from '../components/Admin/Analytics';
import Logs from '../components/Admin/Logs';
import Profile from '../components/Common/Profile';

const AdminDashboard = () => {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const getPageTitle = (pathname) => {
    const routes = {
      '/admin': t('dashboard'),
      '/admin/teachers': t('teacherManagement'),
      '/admin/students': t('studentManagement'),
      '/admin/analytics': t('analytics'),
      '/admin/logs': t('logs'),
      '/admin/profile': t('profile')
    };
    return routes[pathname] || t('dashboard');
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        userRole="admin" 
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          onMenuClick={() => setSidebarOpen(true)}
          title={getPageTitle(window.location.pathname)}
        />
        
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route index element={<AdminHome />} />
            <Route path="teachers" element={<TeacherManagement />} />
            <Route path="students" element={<StudentManagement />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="logs" element={<Logs />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;