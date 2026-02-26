import { memo } from "react";
import { TCountry } from "@/types/types";
import CountryItem from "@/components/country-item";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import {
  Container,
  CountriesListContainer,
  CountriesGrid,
  ShowMoreButton,
  SearchInput,
  Title,
  LoadingText,
  ErrorMessage,
} from "./theme";

type TCountriesListProps = {
  displayedCountries: TCountry[];
  hasMore: boolean;
  hasNoSearchResults: boolean;
  isLoading: boolean;
  hasError?: boolean;
  searchQuery: string;
  onCountryClick: (country: TCountry) => void;
  onSearchChange: (query: string) => void;
  onShowMore: () => void;
};

const CountriesList = memo(
  ({
    displayedCountries,
    hasMore,
    hasNoSearchResults,
    isLoading,
    hasError,
    searchQuery,
    onCountryClick,
    onSearchChange,
    onShowMore,
  }: TCountriesListProps) => {
    const { language } = useLanguage();

    if (hasError) {
      return (
      
       
          <ErrorMessage>
            {getTranslation(language, "errorLoadingCountries")}
          </ErrorMessage>
        
      );
    }

    if (isLoading) {
      return (
        <>
          <SearchInput
            type="text"
            placeholder={getTranslation(language, "searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <LoadingText>{getTranslation(language, "loadingCountries")}</LoadingText>
        </>
      );
    }

    if (hasNoSearchResults) {
      return (
        <>
          <SearchInput
            type="text"
            placeholder={getTranslation(language, "searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <LoadingText>{getTranslation(language, "noSearchResults")}</LoadingText>
        </>
      );
    }

    return (
      <Container>
        <Title>{getTranslation(language, "countriesForTravel")}</Title>
        <SearchInput
          type="text"
          placeholder={getTranslation(language, "searchPlaceholder")}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <CountriesListContainer>
          <CountriesGrid>
            {displayedCountries.map((country) => (
              <CountryItem
                key={country.id}
                country={country}
                onClick={onCountryClick}
              />
            ))}
          </CountriesGrid>
        </CountriesListContainer>

        {hasMore && (
          <ShowMoreButton onClick={onShowMore}>
            {getTranslation(language, "showAllCountries")}
          </ShowMoreButton>
        )}
      </Container>
    );
  }
);

CountriesList.displayName = "CountriesList";

export default CountriesList;
