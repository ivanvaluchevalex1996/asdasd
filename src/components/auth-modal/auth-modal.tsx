import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ModalTitle,
  Input,
  ErrorMessage,
  StyledButton,
  ButtonContainer,
} from './theme';

type TAuthModalProps = {
  email: string;
  emailError: string;
  isClosing: boolean;
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AuthModal = ({
  email,
  emailError,
  isClosing,
  isOpen,
  onClose,
  onContinue,
  onEmailChange,
}: TAuthModalProps) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent
        isClosing={isClosing}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>&times;</CloseButton>

        <ModalTitle>{getTranslation(language, 'signInToContinue')}</ModalTitle>

        <ButtonContainer>
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={onEmailChange}
            error={emailError}
            autoFocus
          />
          <ErrorMessage $visible={!!emailError}>{emailError}</ErrorMessage>
          <StyledButton fullWidth disabled={!email || !!emailError} onClick={onContinue}>
            {getTranslation(language, 'continue')}
          </StyledButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AuthModal;
