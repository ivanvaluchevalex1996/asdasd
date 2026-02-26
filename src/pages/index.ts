import { GetStaticProps } from 'next';
import { TCountry } from '@/types/types';
import { BASE_URL } from '@/constants/BASE_URL';
import { REVALIDATE_SECONDS, REVALIDATE_ERROR_SECONDS } from '@/constants/TIMEOUTS';
import { ERRORS } from '@/constants/ERRORS';
import HomePage from '@/domains/home/home-page';

type TProps = {
  countriesRu: TCountry[];
  countriesEn: TCountry[];
  hasError?: boolean;
};

// Загружаем данные для главной страницы при билде для ОБОИХ языков
export const getStaticProps: GetStaticProps<TProps> = async () => {
  try {
    // Загружаем данные для ОБОИХ языков параллельно через SSG
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
      props: { countriesRu: dataRu[0], countriesEn: dataEn[0] },
      revalidate: REVALIDATE_SECONDS, // ISR: перегенерация раз в час
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
