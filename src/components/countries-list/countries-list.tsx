import { memo } from 'react';
import { TCountryListItem } from '@/types/types';
import CountryItem from '@/components/country-item';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import {
  Container,
  CountriesListContainer,
  CountriesGrid,
  ShowMoreButton,
  SearchInput,
  Title,
  LoadingText,
  ErrorMessage,
} from './theme';

type TCountriesListProps = {
  displayedCountries: TCountryListItem[];
  showToggleButton: boolean;
  isShowingAll: boolean;
  hasNoSearchResults: boolean;
  isLoading: boolean;
  hasError?: boolean;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onShowMore: () => void;
};

const CountriesList = memo(
  ({
    displayedCountries,
    showToggleButton,
    isShowingAll,
    hasNoSearchResults,
    isLoading,
    hasError,
    searchQuery,
    onSearchChange,
    onShowMore,
  }: TCountriesListProps) => {
    const { language } = useLanguage();

    if (hasError) {
      return (
        <Container>
          <ErrorMessage>{getTranslation(language, 'errorLoadingCountries')}</ErrorMessage>
        </Container>
      );
    }

    if (isLoading) {
      return (
        <Container>
          <SearchInput
            type="text"
            placeholder={getTranslation(language, 'searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <LoadingText>{getTranslation(language, 'loadingCountries')}</LoadingText>
        </Container>
      );
    }

    if (hasNoSearchResults) {
      return (
        <Container>
          <SearchInput
            type="text"
            placeholder={getTranslation(language, 'searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <LoadingText>{getTranslation(language, 'noSearchResults')}</LoadingText>
        </Container>
      );
    }

    return (
      <Container>
        <Title>{getTranslation(language, 'countriesForTravel')}</Title>
        <SearchInput
          type="text"
          placeholder={getTranslation(language, 'searchPlaceholder')}
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />

        <CountriesListContainer>
          <CountriesGrid>
            {displayedCountries.map((country) => (
              <CountryItem key={country.id} country={country} />
            ))}
          </CountriesGrid>
        </CountriesListContainer>

        {showToggleButton && (
          <ShowMoreButton onClick={onShowMore}>
            {isShowingAll
              ? getTranslation(language, 'showPopularCountries')
              : getTranslation(language, 'showAllCountries')}
          </ShowMoreButton>
        )}
      </Container>
    );
  }
);

CountriesList.displayName = 'CountriesList';

export default CountriesList;
