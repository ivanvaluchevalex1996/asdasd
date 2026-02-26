import { useEffect, useState, useCallback, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { useLanguage } from "@/context/LanguageContext";
import Header from "@/components/header";
import AuthModal from "@/components/auth-modal";

const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const { language } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);

      if (value && !validateEmail(value)) {
        setEmailError(
          language === "ru"
            ? "Пожалуйста, введите корректный email"
            : "Please enter a valid email"
        );
      } else {
        setEmailError("");
      }
    },
    [language]
  );

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      setEmail("");
      setEmailError("");
    }, 300);
  }, []);

  const handleContinue = useCallback(() => {
    if (email && !emailError) {
      localStorage.setItem("user", email);
      setIsLoggedIn(true);
      handleClose();
    }
  }, [email, emailError, handleClose]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    // Перенаправляем на главную страницу, если пользователь не на главной
    if (router.pathname !== "/") {
      router.push("/");
    }
  }, [router]);

  const handleOpen = useCallback(() => {
    setIsModalOpen(true);
    setIsClosing(false);
    setEmail("");
    setEmailError("");
  }, []);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
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
