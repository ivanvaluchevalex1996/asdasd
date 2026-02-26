import { useRouter } from 'next/router';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import styled from 'styled-components';
import { COLORS } from '@/constants/COLORS';

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 720px;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 24px 0 40px;
`;

const ErrorCode = styled.h1`
  font-size: 80px;
  font-weight: bold;
  color: ${COLORS.PRIMARY_BUTTON};
  margin: 0;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 120px;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 22px;
  color: ${COLORS.TEXT_DARK};
  margin: 16px 0 8px 0;
  font-weight: 600;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 32px;
    margin: 20px 0 10px 0;
  }
`;

const ErrorDescription = styled.p`
  font-size: 15px;
  color: ${COLORS.TEXT_MEDIUM};
  margin: 0 0 24px 0;
  max-width: 500px;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 18px;
    margin: 0 0 30px 0;
  }
`;

const ShowMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 12px 24px;
  background-color: ${COLORS.PRIMARY_BUTTON};
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 24px;
  font-size: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  max-width: 280px;

  &:hover {
    background-color: ${COLORS.PRIMARY_BUTTON_HOVER};
  }

  &:disabled {
    background-color: ${COLORS.DISABLED_COLOR};
    cursor: not-allowed;
  }

  @media (min-width: 768px) {
    padding: 12px 30px;
    font-size: 16px;
    width: auto;
    max-width: none;
  }
`;

const Custom404 = () => {
  const router = useRouter();
  const { language } = useLanguage();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <Container>
      <ErrorContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>{getTranslation(language, 'pageNotFound')}</ErrorTitle>
        <ErrorDescription>{getTranslation(language, 'pageNotFoundDescription')}</ErrorDescription>
        <ShowMoreButton onClick={handleGoHome}>
          {getTranslation(language, 'goToHomePage')}
        </ShowMoreButton>
      </ErrorContainer>
    </Container>
  );
};

export default Custom404;
