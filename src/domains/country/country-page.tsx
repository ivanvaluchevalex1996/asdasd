import { TCountry } from "@/types/types";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import CountryDetail from "@/components/country-detail";

type TCountryPageProps = {
  countryEn: TCountry | null;
  countryRu: TCountry | null;
  name: string;
};

export default function CountryPage({ countryEn, countryRu, name }: TCountryPageProps) {
  const { language } = useLanguage();
  
  // Выбираем страну из статических данных в зависимости от языка
  // ВСЕ данные уже загружены через SSG - никаких клиентских запросов!
  const country = language === "ru" ? countryRu : countryEn;
  const error = country ? null : getTranslation(language, "countryNotFound");

  return <CountryDetail country={country} error={error} isLoading={false} />;
}
