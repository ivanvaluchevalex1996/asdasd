import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import { StyledBlock, AuthButton, LanguageSelect, HeaderControls } from "./theme";

type THeaderProps = {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
};

const Header = ({ isLoggedIn, onLogin, onLogout }: THeaderProps) => {
  const { language, setLanguage } = useLanguage();

  return (
    <StyledBlock>
      <div>logo</div>
      <HeaderControls>
        <LanguageSelect
          name="language"
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value as "en" | "ru")}
        >
          <option value="en">en</option>
          <option value="ru">ru</option>
        </LanguageSelect>
        <AuthButton $isLoggedIn={isLoggedIn} onClick={isLoggedIn ? onLogout : onLogin}>
          {isLoggedIn
            ? getTranslation(language, "signOut").toUpperCase()
            : getTranslation(language, "signIn").toUpperCase()}
        </AuthButton>
      </HeaderControls>
    </StyledBlock>
  );
};

export default Header;
