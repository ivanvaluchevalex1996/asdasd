import { useEffect, useState, useCallback, PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { useLanguage } from '@/context/LanguageContext';
import Header from '@/components/header';
import AuthModal from '@/components/auth-modal';
import { validateEmail } from '@/lib/utils';
import { getTranslation } from '@/lib/i18n';

const Layout = ({ children }: PropsWithChildren) => {
  const { pathname, push } = useRouter();
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);

      if (value && !validateEmail(value)) {
        setEmailError(getTranslation(language, 'invalidEmail'));
      } else {
        setEmailError('');
      }
    },
    [language]
  );

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setIsModalOpen(false);
    setIsClosing(false);
    setEmail('');
    setEmailError('');
  }, []);

  const handleContinue = useCallback(() => {
    if (email && !emailError) {
      localStorage.setItem('user', email);
      setIsLoggedIn(true);
      handleClose();
    }
  }, [email, emailError, handleClose]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    if (pathname !== '/') {
      push('/');
    }
  }, [pathname, push]);

  const handleOpen = useCallback(() => {
    setIsModalOpen(true);
    setIsClosing(false);
    setEmail('');
    setEmailError('');
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogin={handleOpen} onLogout={handleLogout} />
      <AuthModal
        email={email}
        emailError={emailError}
        isClosing={isClosing}
        isOpen={isModalOpen}
        onClose={handleClose}
        onContinue={handleContinue}
        onEmailChange={handleEmailChange}
      />
      {children}
    </>
  );
};

export default Layout;
