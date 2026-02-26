import { useRouter } from "next/router";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import styled from "styled-components";
import { COLORS } from "@/constants/COLORS";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 40px 20px;
`;

const ErrorCode = styled.h1`
  font-size: 120px;
  font-weight: bold;
  color: ${COLORS.PRIMARY_BUTTON};
  margin: 0;
  line-height: 1;
`;

const ErrorTitle = styled.h2`
  font-size: 32px;
  color: ${COLORS.TEXT_DARK};
  margin: 20px 0 10px 0;
  font-weight: 600;
`;

const ErrorDescription = styled.p`
  font-size: 18px;
  color: ${COLORS.TEXT_MEDIUM};
  margin: 0 0 30px 0;
  max-width: 500px;
`;

const ShowMoreButton = styled.button`
  display: block;
  margin: 30px auto;
  padding: 12px 30px;
  background-color: ${COLORS.PRIMARY_BUTTON};
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${COLORS.PRIMARY_BUTTON_HOVER};
  }

  &:disabled {
    background-color: ${COLORS.DISABLED_COLOR};
    cursor: not-allowed;
  }
`;

const ErrorPage = () => {
  const router = useRouter();
  const { language } = useLanguage();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <Container>
      <ErrorContainer>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>{getTranslation(language, "pageNotFound")}</ErrorTitle>
        <ErrorDescription>
          {getTranslation(language, "pageNotFoundDescription")}
        </ErrorDescription>
        <ShowMoreButton onClick={handleGoHome}>
          {getTranslation(language, "goToHomePage")}
        </ShowMoreButton>
      </ErrorContainer>
    </Container>
  );
};

export default ErrorPage;