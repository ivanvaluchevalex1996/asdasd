import { TCountry } from "@/types/types";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import { getFlagPath } from "@/lib/flags";
import {
  Container,
  CountriesListContainer,
  SectionTitle,
  CountryCard,
  CountryFlag,
  CountryName,
  OperatorsList,
  OperatorName,
  LoadingMessage,
  ErrorMessage,
} from "./theme";

type TCountryDetailProps = {
  country: TCountry | null;
  error: string | null;
  isLoading: boolean;
};

const CountryDetail = ({ country, error, isLoading }: TCountryDetailProps) => {
  const { language } = useLanguage();

  if (isLoading) {
    return (
      <Container>
        <LoadingMessage>{getTranslation(language, "loadingCountries")}</LoadingMessage>
      </Container>
    );
  }

  if (error || !country) {
    return (
      <Container>
        <ErrorMessage>{error || getTranslation(language, "countryNotFound")}</ErrorMessage>
      </Container>
    );
  }

  const flagPath = getFlagPath(country.iso);

  return (
    <Container>
      <CountriesListContainer>
        <SectionTitle>{getTranslation(language, "countriesOperators")}</SectionTitle>
        <CountryCard>
          <CountryFlag>
            <img
              src={flagPath}
              alt={country.country}
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </CountryFlag>
          <CountryName>{country.country}</CountryName>
          {country.operators.length > 0 && (
            <OperatorsList>
              {country.operators.map((_, index) => (
                <OperatorName key={index}>
                  {getTranslation(language, "operator")} {index + 1}
                </OperatorName>
              ))}
            </OperatorsList>
          )}
        </CountryCard>
      </CountriesListContainer>
    </Container>
  );
};

export default CountryDetail;
