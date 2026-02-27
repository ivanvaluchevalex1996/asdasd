import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalTitle,
  ModalInputWrapper,
  ModalInput,
  ModalErrorMessage,
  ModalSubmitButton,
  ModalButtonContainer,
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
        <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>

        <ModalTitle>{getTranslation(language, 'signInToContinue')}</ModalTitle>

        <ModalButtonContainer>
          <ModalInputWrapper>
            <ModalInput
              type="email"
              placeholder="Введите email"
              value={email}
              onChange={onEmailChange}
              $error={emailError}
              autoFocus
            />
          </ModalInputWrapper>
          <ModalErrorMessage $visible={!!emailError}>{emailError}</ModalErrorMessage>
          <ModalSubmitButton fullWidth disabled={!email || !!emailError} onClick={onContinue}>
            {getTranslation(language, 'continue')}
          </ModalSubmitButton>
        </ModalButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AuthModal;
