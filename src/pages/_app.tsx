import '@/styles/globals.css';
import App from 'next/app';
import type { AppProps } from 'next/app';
import type { AppContext } from 'next/app';
import Layout from '@/components/layout';
import { LanguageProvider } from '@/context/LanguageContext';
import { getCookie } from '@/lib/cookie-utils';
import type { TLanguage } from '@/lib/i18n';

const LANGUAGE_COOKIE = 'language';

export type AppPropsWithLanguage = AppProps & {
  initialLanguage: TLanguage;
};

function parseLanguage(value: string | undefined): TLanguage {
  return value === 'en' || value === 'ru' ? value : 'ru';
}

function MyApp({ Component, pageProps, initialLanguage }: AppPropsWithLanguage) {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const pageProps = await App.getInitialProps(context);
  const { ctx } = context;
  const cookieHeader = typeof ctx.req?.headers.cookie === 'string' ? ctx.req.headers.cookie : '';
  const initialLanguage = parseLanguage(getCookie(LANGUAGE_COOKIE, cookieHeader));
  return {
    ...pageProps,
    initialLanguage,
  };
};

export default MyApp;
