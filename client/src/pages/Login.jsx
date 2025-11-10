import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Eye, EyeOff, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { login, loading } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.username || !formData.password) {
      setError('Please fill in all fields');
      return;
    }

    const result = await login(formData);
    
    if (result.success) {
      toast.success('Login successful');
    } else {
      setError(result.error || 'Login failed. Please try again.');
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'hi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 font-display text-gray-900 dark:text-gray-100">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap px-6 sm:px-10 py-4 absolute top-0 left-0 right-0 z-10">
            <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
              <div className="w-8 h-8">
                <svg fill="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25,5.19A19.81,19.81,0,1,0,44.81,25,19.83,19.83,0,0,0,25,5.19ZM11.69,25a13.31,13.31,0,1,1,22,11.23A13.23,13.23,0,0,1,11.69,25Z"></path>
                  <path d="M25,12.44a1,1,0,0,0-1,1v13.1a1,1,0,0,0,2,0V13.44A1,1,0,0,0,25,12.44Z"></path>
                  <path d="M25,30.31a1,1,0,0,0-1,1v5.25a1,1,0,0,0,2,0V31.31A1,1,0,0,0,25,30.31Z"></path>
                  <path d="M25,19.19a5.81,5.81,0,1,0,5.81,5.81A5.81,5.81,0,0,0,25,19.19Zm0,9.62A3.81,3.81,0,1,1,28.81,25,3.81,3.81,0,0,1,25,28.81Z"></path>
                </svg>
              </div>
              <h2 className="text-lg font-bold tracking-tight">NDEMLP</h2>
            </div>
            <button
              onClick={toggleLanguage}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">{i18n.language === 'en' ? 'English/Hindi' : 'हिंदी/अंग्रेजी'}</span>
            </button>
          </header>
          <main className="flex flex-1 w-full">
            <div className="flex w-full min-h-screen">
              <div className="hidden lg:flex flex-col justify-center items-start w-1/2 bg-gray-100 dark:bg-gray-800 p-12 relative overflow-hidden">
                <div className="w-full h-full bg-center bg-no-repeat bg-cover aspect-auto opacity-10"
                     style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBRAajQTMhoAINRYSwVSRxsLcfS3FKEjrD1verCNzfdzbqXOVZDnCr_jvwZOyqS33sl9-m-EQu0YOROshUz8Z-9yn6LeLTlm8HyseU5vcGjN7rK58QPFxPuOaGTtr-hSevurv2LS7pFpCwFwWsr3eDQoJhmTSfGk1tsRbFIxj8-4kUzmK8cOYgLnR01WEMEbDwR4_Y3fKRLPlijG2hasQO3KLKFyA6IFyGIZy63QBvR_brSNsvwlWAZlP31Ix3jA7niOxFYauq3aFGk')"}}>
                </div>
                <div className="absolute inset-0 p-12 flex flex-col justify-center">
                  <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-900 dark:text-gray-100 mb-4">
                    {t('platformTitle')}
                  </h1>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {t('platformTagline')}
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
                <div className="flex flex-col w-full max-w-md">
                  <div className="flex flex-col gap-3 mb-8">
                    <p className="text-gray-900 dark:text-gray-100 text-4xl font-black leading-tight tracking-[-0.033em]">
                      {t('loginTitle')}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                      {t('loginSubtitle')}
                    </p>
                  </div>
                  {error && (
                    <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <label className="flex flex-col w-full">
                      <p className="text-gray-900 dark:text-gray-100 text-base font-medium leading-normal pb-2">
                        {t('username')}
                      </p>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        value={formData.username}
                        onChange={handleChange}
                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-blue-500/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-blue-500 h-14 placeholder:text-gray-500 dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                        placeholder={t('enterUsername')}
                      />
                    </label>
                    <label className="flex flex-col w-full">
                      <div className="flex justify-between items-center pb-2">
                        <p className="text-gray-900 dark:text-gray-100 text-base font-medium leading-normal">
                          {t('password')}
                        </p>
                        <a className="text-sm font-medium text-blue-600 hover:underline" href="#">
                          {t('forgotPassword')}
                        </a>
                      </div>
                      <div className="relative w-full">
                        <input
                          id="password"
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          required
                          value={formData.password}
                          onChange={handleChange}
                          className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-900 dark:text-gray-100 focus:outline-0 focus:ring-2 focus:ring-blue-500/50 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-blue-500 h-14 placeholder:text-gray-500 dark:placeholder:text-gray-500 p-[15px] pr-12 text-base font-normal leading-normal"
                          placeholder={t('enterPassword')}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-500 dark:text-gray-400"
                        >
                          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                      </div>
                    </label>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-4 bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="truncate">{loading ? t('loggingIn') : t('login')}</span>
                    </button>
                  </form>
                  
                  {/* Sign Up Link */}
                  <div className="mt-4 text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                      {t('dontHaveAccount')}{' '}
                      <button
                        onClick={() => navigate('/signup')}
                        className="font-medium text-blue-600 hover:underline"
                      >
                        {t('signUp')}
                      </button>
                    </p>
                  </div>
                  
                  {/* Demo Credentials */}
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">Demo Credentials:</h3>
                    <div className="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                      <div><strong>Admin:</strong> admin / admin123</div>
                      <div><strong>Teacher:</strong> teacher1 / teacher123</div>
                      <div><strong>Student:</strong> student1 / student123</div>
                    </div>
                  </div>
                  <footer className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Lock size={16} />
                      <span>Secured by National Informatics Centre (NIC)</span>
                    </div>
                    <div className="flex justify-center gap-x-4">
                      <a className="hover:underline" href="#">Help</a>
                      <span>·</span>
                      <a className="hover:underline" href="#">Privacy Policy</a>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Login;