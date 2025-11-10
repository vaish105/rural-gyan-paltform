import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.role || !formData.password || !formData.confirmPassword) {
      toast.error('Please fill in all fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (formData.password.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          username: formData.email,
          email: formData.email,
          role: formData.role.toLowerCase(),
          password: formData.password
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        toast.success('Account created successfully! Please login.');
        navigate('/login');
      } else {
        toast.error(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('Network error. Please check if the server is running.');
    } finally {
      setLoading(false);
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="font-display bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="relative flex min-h-screen w-full flex-col items-center group/design-root overflow-x-hidden">
        <div className="w-full max-w-4xl px-4 md:px-0">
          {/* Header */}
          <header className="flex items-center justify-between whitespace-nowrap border-b border-gray-200 dark:border-gray-700 py-4 font-display">
            <div className="flex items-center gap-4">
              <img 
                className="h-10 w-auto" 
                alt="Emblem of India"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuClKYVkL99PPgtNPy4yjYFXUHFURDFe4yDSeDNrPlyhU97rG3iwNbzQOAeqbsWw-zyDdByjP-cEmLUrhSjCRPFM4d3ASQ8dPDKY0E64mq-AbrQoNk6dAkUSqiplmbAB8DP055HuNRb8EDKyCcnZhLdC3wxniwF3osaOFnJqd54B4Vqa2YhL0HBLMX-Uvpwtybl81LiUeTjjzstEg01O3shT1CRnwatS6xaZBxAHbKCsiL3IFbz9GHOaJfHo9WWvsNokFtkPYsogLScM" 
              />
              <div className="flex items-center gap-2">
                <div className="size-5 text-blue-600">
                  <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                          fill="currentColor" fillRule="evenodd"></path>
                  </svg>
                </div>
                <h2 className="text-gray-900 dark:text-white text-lg font-bold tracking-tight">NDEMLP</h2>
              </div>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-blue-600/10 dark:bg-blue-600/20 text-blue-600 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-600/20 dark:hover:bg-blue-600/30 transition-colors"
            >
              <span className="truncate">{i18n.language === 'en' ? 'EN / HI' : 'हि / अं'}</span>
            </button>
          </header>
          <main className="py-12 md:py-16">
            <div className="mx-auto max-w-lg">
              {/* Page Heading */}
              <div className="text-center mb-8">
                <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                  {t('createAccount')}
                </h1>
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal mt-2">
                  {t('alreadyHaveAccount')} 
                  <button 
                    onClick={() => navigate('/login')}
                    className="font-medium text-blue-600 hover:underline ml-1"
                  >
                    {t('logIn')}
                  </button>
                </p>
              </div>
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="text-gray-800 dark:text-gray-200 text-base font-medium leading-normal pb-2" htmlFor="fullName">
                    {t('fullName')}
                  </label>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-blue-600/50 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-blue-600 dark:focus:border-blue-600 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal transition-shadow"
                    id="fullName"
                    name="fullName"
                    placeholder={t('enterFullName')}
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Username or Email */}
                <div className="flex flex-col">
                  <label className="text-gray-800 dark:text-gray-200 text-base font-medium leading-normal pb-2" htmlFor="email">
                    {t('emailAddress')}
                  </label>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-blue-600/50 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-blue-600 dark:focus:border-blue-600 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal transition-shadow"
                    id="email"
                    name="email"
                    placeholder={t('enterEmail')}
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* Role Selector */}
                <div className="flex flex-col">
                  <label className="text-gray-800 dark:text-gray-200 text-base font-medium leading-normal pb-2" htmlFor="role">
                    {t('yourRole')}
                  </label>
                  <div className="relative">
                    <select
                      className="form-select appearance-none w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-blue-600/50 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-blue-600 dark:focus:border-blue-600 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 px-[15px] text-base font-normal leading-normal transition-shadow"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="">{t('selectRole')}</option>
                      <option value="student">{t('student')}</option>
                      <option value="teacher">{t('teacher')}</option>
                      <option value="admin">{t('administrator')}</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 dark:text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                {/* Password */}
                <div className="flex flex-col">
                  <label className="text-gray-800 dark:text-gray-200 text-base font-medium leading-normal pb-2" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-blue-600/50 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-blue-600 dark:focus:border-blue-600 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] pr-12 text-base font-normal leading-normal transition-shadow"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  <p className="text-gray-500 dark:text-gray-400 text-xs mt-2">
                    Must be 8+ characters, including a number and a symbol.
                  </p>
                </div>
                {/* Confirm Password */}
                <div className="flex flex-col">
                  <label className="text-gray-800 dark:text-gray-200 text-base font-medium leading-normal pb-2" htmlFor="confirmPassword">
                    Confirm Password
                  </label>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-white focus:outline-0 focus:ring-2 focus:ring-blue-600/50 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 focus:border-blue-600 dark:focus:border-blue-600 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal transition-shadow"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your new password"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-4 bg-blue-600 text-white text-base font-bold leading-normal tracking-wide hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-600/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="truncate">{loading ? 'Creating Account...' : 'Create Account'}</span>
                  </button>
                </div>
              </form>
            </div>
          </main>
          {/* Footer */}
          <footer className="text-center py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-center items-center gap-6 text-sm">
              <a className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600 hover:underline" href="#">
                Terms of Service
              </a>
              <a className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600 hover:underline" href="#">
                Privacy Policy
              </a>
              <a className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-600 hover:underline" href="#">
                Accessibility
              </a>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
              © 2024 National Digital Education & Management Learning Platform. All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default SignUp;