import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { StyledBlock, Logo, AuthButton, LanguageSelect, HeaderControls } from './theme';

type THeaderProps = {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
};

const Header = ({ isLoggedIn, onLogin, onLogout }: THeaderProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <StyledBlock>
      <Logo>
        <Image src="/logo.svg" alt="yesim" width={102.84} height={30} priority />
      </Logo>
      <HeaderControls>
        <LanguageSelect
          name="language"
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'en' | 'ru')}
        >
          <option value="en">ENG</option>
          <option value="ru">RU</option>
        </LanguageSelect>
        <AuthButton $isLoggedIn={isLoggedIn} onClick={isLoggedIn ? onLogout : onLogin}>
          {isLoggedIn ? getTranslation(language, 'signOut') : getTranslation(language, 'signIn')}
        </AuthButton>
      </HeaderControls>
    </StyledBlock>
  );
};

export default Header;
