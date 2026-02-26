import { GetStaticProps } from 'next';
import { TCountry, TCountryListItem } from '@/types/types';
import { BASE_URL } from '@/constants/BASE_URL';
import { REVALIDATE_SECONDS, REVALIDATE_ERROR_SECONDS } from '@/constants/TIMEOUTS';
import { ERRORS } from '@/constants/ERRORS';
import { toCountryListItem } from '@/lib/utils';
import HomePage from '@/domains/home/home-page';

type TProps = {
  countriesRu: TCountryListItem[];
  countriesEn: TCountryListItem[];
  hasError?: boolean;
};

// Загружаем данные для главной, передаём только поля для списка (без search, operators) — меньше ~995 kB
export const getStaticProps: GetStaticProps<TProps> = async () => {
  try {
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

    return {
      props: {
        countriesRu: dataRu[0].map(toCountryListItem),
        countriesEn: dataEn[0].map(toCountryListItem),
      },
      revalidate: REVALIDATE_SECONDS,
    };
  } catch (error) {
    console.error(error);
    return {
      props: { countriesRu: [], countriesEn: [], hasError: true },
      revalidate: REVALIDATE_ERROR_SECONDS,
    };
  }
};

export default HomePage;
