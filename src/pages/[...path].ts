import { GetStaticPaths, GetStaticProps } from 'next';
import { TCountry } from '@/types/types';
import { BASE_URL } from '@/constants/BASE_URL';
import { REVALIDATE_SECONDS } from '@/constants/TIMEOUTS';
import CountryPage from '@/domains/country/country-page';
import { ERRORS } from '@/constants/ERRORS';

type TProps = {
  countryRu: TCountry | null;
  countryEn: TCountry | null;
  name: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const response = await fetch(`${BASE_URL}?lang=ru`);
    if (!response.ok) {
      throw new Error(`${ERRORS.API_ERROR}: ${response.status}`);
    }
    const data: TCountry[][] = await response.json();
    // Передаём путь из API как есть: url "/country/liechtenstein/" → params.path = ['country', 'liechtenstein']
    const paths = data[0]
      .map((c) => {
        const path = c.url.slice(0, -1).split('/').filter(Boolean);
        return path.length >= 2 ? { params: { path } } : null;
      })
      .filter((p): p is { params: { path: string[] } } => p !== null);

    return { paths, fallback: 'blocking' };
  } catch (error) {
    console.error(error);
    return { paths: [], fallback: 'blocking' };
  }
};

export const getStaticProps: GetStaticProps<TProps> = async ({ params }) => {
  try {
    const path = params?.path as string[] | undefined;
    if (!path || path[0] !== 'country' || path.length !== 2) {
      return { notFound: true };
    }

    const pathStr = `/${path.join('/')}`;

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

    const countryRu = dataRu[0].find((c) => c.url.slice(0, -1) === pathStr) ?? null;
    const countryEn = dataEn[0].find((c) => c.url.slice(0, -1) === pathStr) ?? null;

    if (!countryRu && !countryEn) {
      return { notFound: true };
    }

    return {
      props: { countryRu, countryEn, name: path[1] },
      revalidate: REVALIDATE_SECONDS,
    };
  } catch (error) {
    console.error(error);
    return { notFound: true };
  }
};

export default CountryPage;
