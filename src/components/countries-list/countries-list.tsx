import { memo } from 'react';
import { TCountryListItem } from '@/types/types';
import CountryItem from '@/components/country-item';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { Button } from '@/domains/common/ui/button';
import {
  Container,
  CountriesGrid,
  SearchInputWrapper,
  SearchIconWrapper,
  SearchInput,
  Title,
  LoadingText,
  ErrorMessage,
  ContentContainer,
  TextStyled,
} from './theme';
import { SearchIcon } from './search-icon';

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
          <SearchInputWrapper>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchInput
              type="text"
              placeholder={getTranslation(language, 'searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </SearchInputWrapper>
          <LoadingText>{getTranslation(language, 'loadingCountries')}</LoadingText>
        </Container>
      );
    }

    if (hasNoSearchResults) {
      return (
        <Container>
          <SearchInputWrapper>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <SearchInput
              type="text"
              placeholder={getTranslation(language, 'searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </SearchInputWrapper>
          <LoadingText>{getTranslation(language, 'noSearchResults')}</LoadingText>
        </Container>
      );
    }

    return (
      <Container>
        <Title>{getTranslation(language, 'countriesForTravel')}</Title>
        <SearchInputWrapper>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <SearchInput
            type="text"
            placeholder={getTranslation(language, 'searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </SearchInputWrapper>

        <ContentContainer>
          <TextStyled>Популярные страны</TextStyled>
          <CountriesGrid>
            {displayedCountries.map((country) => (
              // <CountryItem key={country.id} country={country} />
              <CountryItem key={country.id} country={country} />
            ))}
          </CountriesGrid>
        </ContentContainer>

        {showToggleButton && (
          <Button fullWidth centered onClick={onShowMore}>
            {isShowingAll
              ? getTranslation(language, 'showPopularCountries')
              : getTranslation(language, 'showAllCountries')}
          </Button>
        )}
      </Container>
    );
  }
);

CountriesList.displayName = 'CountriesList';

export default CountriesList;
