import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { Button } from '@/domains/common/ui/button';
import {
  StyledBlock,
  Logo,
  AuthButtonWrapper,
  HeaderControls,
  CustomDropdown,
  DropdownButton,
  DropdownMenu,
  DropdownItem,
} from './theme';
import chevrondownSvg from '@/assets/svg/chevrondown.svg';
import addonsSvg from '@/assets/svg/Addons.svg';

type THeaderProps = {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
};

const Header = ({ isLoggedIn, onLogin, onLogout }: THeaderProps) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: 'en' | 'ru') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const languageLabels = {
    en: 'ENG',
    ru: 'RU',
  };

  return (
    <StyledBlock>
      <Logo>
        <Image src="/logo.svg" alt="yesim" width={102.84} height={30} priority />
      </Logo>
      <HeaderControls>
        <CustomDropdown ref={dropdownRef}>
          <DropdownButton onClick={() => setIsOpen(!isOpen)}>
            {languageLabels[language]} <Image src={chevrondownSvg} alt="" width={12} height={12} />
          </DropdownButton>
          <DropdownMenu isOpen={isOpen}>
            <DropdownItem
              className={language === 'en' ? 'selected' : ''}
              onClick={() => handleLanguageChange('en')}
            >
              <span>ENG</span>
              <Image src={addonsSvg} alt="" width={12} height={12} />
            </DropdownItem>
            <DropdownItem
              className={language === 'ru' ? 'selected' : ''}
              onClick={() => handleLanguageChange('ru')}
            >
              <span>RU</span>
              <Image src={addonsSvg} alt="" width={12} height={12} />
            </DropdownItem>
          </DropdownMenu>
        </CustomDropdown>

        <AuthButtonWrapper>
          <Button
            variant={isLoggedIn ? 'danger' : 'primary'}
            onClick={isLoggedIn ? onLogout : onLogin}
          >
            {isLoggedIn ? getTranslation(language, 'signOut') : getTranslation(language, 'signIn')}
          </Button>
        </AuthButtonWrapper>
      </HeaderControls>
    </StyledBlock>
  );
};

export default Header;
