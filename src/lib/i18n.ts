export type TLanguage = 'en' | 'ru';

export const translations = {
  en: {
    signIn: 'Sign in',
    signOut: 'Sign out',
    signInToContinue: 'Sign in to continue',
    showAllCountries: 'Show all countries',
    showPopularCountries: 'Show popular countries',
    countriesOperators: 'Countries and operators',
    continue: 'Continue',
    loadingCountries: 'Loading countries...',
    countriesForTravel: 'Countries for travel',
    searchPlaceholder: 'Search by country name or ISO code',
    countryNotFound: 'Country not found',
    operator: 'Operator',
    pageNotFound: 'Page not found',
    pageNotFoundDescription: 'The page you are looking for does not exist.',
    goToHomePage: 'Go to home page',
    noSearchResults: 'No countries found',
    errorLoadingCountries: 'Error loading countries. Please try again later.',
    invalidEmail: 'Please enter a valid email',
  },
  ru: {
    signIn: 'Войти',
    signOut: 'Выйти',
    signInToContinue: 'Войдите, чтобы продолжить',
    showAllCountries: 'Показать все страны',
    showPopularCountries: 'Показать популярные страны',
    countriesOperators: 'Страны и операторы',
    continue: 'Продолжить',
    loadingCountries: 'Загрузка стран...',
    countriesForTravel: 'Страны для путешествий',
    searchPlaceholder: 'Поиск по названию страны или ISO-коду',
    countryNotFound: 'Страна не найдена',
    operator: 'Оператор',
    pageNotFound: 'Страница не найдена',
    pageNotFoundDescription: 'Страница, которую вы ищете, не существует.',
    goToHomePage: 'Перейти на главную',
    noSearchResults: 'Страны не найдены',
    errorLoadingCountries: 'Ошибка при загрузке стран. Пожалуйста, попробуйте позже.',
    invalidEmail: 'Пожалуйста, введите корректный email',
  },
};

export const getTranslation = (lang: TLanguage, key: keyof typeof translations.en) => {
  return translations[lang][key] || key;
};
