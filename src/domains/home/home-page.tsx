import { useEffect, useState, useCallback, useMemo } from 'react';
import { TCountryListItem } from '@/types/types';
import { useLanguage } from '@/context/LanguageContext';
import CountriesList from '@/components/countries-list';
import { COUNTRIES_PER_PAGE } from '@/constants/COUNTRIES_PER_PAGE';
import { SEARCH_DEBOUNCE_MS } from '@/constants/TIMEOUTS';

type THomePageProps = {
  countriesEn: TCountryListItem[];
  countriesRu: TCountryListItem[];
  hasError?: boolean;
};

export default function HomePage({ countriesEn, countriesRu, hasError }: THomePageProps) {
  const { language } = useLanguage();

  // Выбираем страны из статических данных в зависимости от языка
  // ВСЕ данные уже загружены через SSG - никаких клиентских запросов!
  const countries = language === 'ru' ? countriesRu : countriesEn;
  const isLoading = countries.length === 0 && !hasError;
  // провреь что лоадинг коректно работает и смотрится
  // const isLoading = countries.length !== 0;

  const [displayedCount, setDisplayedCount] = useState(12);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

  // Дебаунс для поискового запроса
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
      // При изменении поискового запроса сбрасываем счетчик
      setDisplayedCount(COUNTRIES_PER_PAGE);
    }, SEARCH_DEBOUNCE_MS);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Фильтрация стран по поисковому запросу (используем debounced значение)
  // Поиск только по названию страны и ISO-коду согласно ТЗ
  const filteredCountries = useMemo(() => {
    if (!debouncedSearchQuery.trim()) {
      return countries;
    }

    const query = debouncedSearchQuery.toLowerCase().trim();
    return countries.filter(
      (country) =>
        country.country.toLowerCase().includes(query) || country.iso.toLowerCase().includes(query)
    );
  }, [countries, debouncedSearchQuery]);

  // Определяем, какие страны показывать
  const countriesToDisplay = useMemo(() => {
    return filteredCountries.slice(0, displayedCount);
  }, [filteredCountries, displayedCount]);

  // Проверяем, есть ли еще карточки для показа
  const hasMore = useMemo(() => {
    return displayedCount < filteredCountries.length;
  }, [displayedCount, filteredCountries.length]);

  // Проверяем, есть ли результаты поиска
  const hasNoSearchResults = useMemo(() => {
    return debouncedSearchQuery.trim() !== '' && filteredCountries.length === 0;
  }, [debouncedSearchQuery, filteredCountries.length]);

  const handleShowMore = useCallback(() => {
    setDisplayedCount(filteredCountries.length);
  }, [filteredCountries.length]);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  return (
    <CountriesList
      displayedCountries={countriesToDisplay}
      hasMore={hasMore}
      hasNoSearchResults={hasNoSearchResults}
      isLoading={isLoading}
      hasError={hasError}
      searchQuery={searchQuery}
      onSearchChange={handleSearchChange}
      onShowMore={handleShowMore}
    />
  );
}
