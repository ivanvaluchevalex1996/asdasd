export type TLanguage = "en" | "ru";

export const translations = {
  en: {
    signIn: "Sign in",
    signOut: "Sign out",
    signInToContinue: "Sign in to continue",
    showAllCountries: "Show all countries",
    countriesOperators: "Countries and operators",
    continue: "Continue",
    enterEmail: "Enter email",
    loadingCountries: "Loading countries...",
    countriesForTravel: "Countries for travel",
    operators: "Operators",
    searchPlaceholder: "Search by country name or ISO code",
    countryNotFound: "Country not found",
    errorLoadingCountry: "Error loading country data",
    operator: "Operator",
    pageNotFound: "Page not found",
    pageNotFoundDescription: "The page you are looking for does not exist.",
    goToHomePage: "Go to home page",
    noSearchResults: "No countries found",
    errorLoadingCountries: "Error loading countries. Please try again later.",
  },
  ru: {
    signIn: "Войти",
    signOut: "Выйти",
    signInToContinue: "Войдите, чтобы продолжить",
    showAllCountries: "Показать все страны",
    countriesOperators: "Страны и операторы",
    continue: "Продолжить",
    enterEmail: "Введи email",
    loadingCountries: "Загрузка стран...",
    countriesForTravel: "Страны для путешествий",
    operators: "Операторы",
    searchPlaceholder: "Поиск по названию страны или ISO-коду",
    countryNotFound: "Страна не найдена",
    errorLoadingCountry: "Ошибка при загрузке данных о стране",
    operator: "Оператор",
    pageNotFound: "Страница не найдена",
    pageNotFoundDescription: "Страница, которую вы ищете, не существует.",
    goToHomePage: "Перейти на главную",
    noSearchResults: "Страны не найдены",
    errorLoadingCountries: "Ошибка при загрузке стран. Пожалуйста, попробуйте позже.",
  },
};

export const getTranslation = (lang: TLanguage, key: keyof typeof translations.en) => {
  return translations[lang][key] || key;
};

export const formatTranslation = (
  lang: TLanguage,
  key: keyof typeof translations.en,
  params?: Record<string, string>
) => {
  let text = getTranslation(lang, key);
  if (params) {
    Object.entries(params).forEach(([paramKey, value]) => {
      text = text.replace(`{{${paramKey}}}`, value);
    });
  }
  return text;
};
