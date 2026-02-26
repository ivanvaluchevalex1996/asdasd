import { GetStaticPaths, GetStaticProps } from 'next';
import { TCountry } from '@/types/types';
import { BASE_URL } from '@/constants/BASE_URL';
import { REVALIDATE_SECONDS } from '@/constants/TIMEOUTS';
import { normalizeUrl } from '@/lib/url-utils';
import { findCountryByName } from '@/lib/api-helpers';
import CountryPage from '@/domains/country/country-page';
import { ERRORS } from '@/constants/ERRORS';

type TProps = {
  countryRu: TCountry | null;
  countryEn: TCountry | null;
  name: string;
};

// Генерируем пути для всех стран при билде
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch(`${BASE_URL}?lang=ru`);
    if (!response.ok) {
      throw new Error(`${ERRORS.API_ERROR}: ${response.status}`);
    }
    const data: TCountry[][] = await response.json();
    const paths = data[0]
      .map((c) => {
        const normalizedName = normalizeUrl(c.url);
        return normalizedName ? { params: { name: normalizedName } } : null;
      })
      .filter((path): path is { params: { name: string } } => path !== null);

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: 'blocking' };
  }
};

// Получаем данные конкретной страны при билде только для базового языка (ru)
export const getStaticProps: GetStaticProps<TProps> = async ({ params }) => {
  try {
    const name = params?.name as string;
    if (!name) {
      throw new Error(ERRORS.NAME_PARAMETER_MISSING);
    }

    const [responseRu, responseEn] = await Promise.all([
      fetch(`${BASE_URL}?lang=ru`),
      fetch(`${BASE_URL}?lang=en`),
    ]);

    if (!responseRu.ok || !responseEn.ok) {
      throw new Error(`${ERRORS.API_ERROR}: ${responseRu.status} / ${responseEn.status}`);
    }

    const [dataRu, dataEn]: [TCountry[][], TCountry[][]] = await Promise.all([
      responseRu.json(),
      responseEn.json(),
    ]);

    const countryRu = findCountryByName(dataRu[0], name);
    const countryEn = findCountryByName(dataEn[0], name);

    if (!countryRu && !countryEn) {
      throw new Error(`${ERRORS.COUNTRY_NOT_FOUND}: ${name}`);
    }

    return {
      props: { countryRu, countryEn, name },
      revalidate: REVALIDATE_SECONDS,
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

export default CountryPage;
