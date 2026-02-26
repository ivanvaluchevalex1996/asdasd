import { useRouter } from 'next/router';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { Button } from '@/domains/common/ui/button';
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
        <Button fullWidth centered onClick={handleGoHome}>
          {getTranslation(language, 'goToHomePage')}
        </Button>
      </ErrorContainer>
    </Container>
  );
};

export default Custom404;
