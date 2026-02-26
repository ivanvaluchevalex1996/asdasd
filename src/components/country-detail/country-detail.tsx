import Image from 'next/image';
import { TCountry } from '@/types/types';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { getFlagPath } from '@/lib/utils';
import {
  CountriesListContainer,
  SectionTitle,
  CountryFlag,
  CountryName,
  OperatorsList,
  OperatorName,
  LoadingMessage,
  ErrorMessage,
} from './theme';
import { styled } from 'styled-components';
import { BREAKPOINTS } from '@/constants/BREAKPOINTS';

export const DetailContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 720px;
  padding: 0px;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    padding: 0 8px;
  }
`;

export const CountryCardDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
`;

type TCountryDetailProps = {
  country: TCountry | null;
  error: string | null;
  isLoading: boolean;
};

const CountryDetail = ({ country, error, isLoading }: TCountryDetailProps) => {
  const { language } = useLanguage();

  if (isLoading) {
    return <LoadingMessage>{getTranslation(language, 'loadingCountries')}</LoadingMessage>;
  }

  if (error || !country) {
    return <ErrorMessage>{error || getTranslation(language, 'countryNotFound')}</ErrorMessage>;
  }

  const flagPath = getFlagPath(country.iso);

  return (
    <DetailContainer>
      <CountriesListContainer>
        <SectionTitle>{getTranslation(language, 'countriesOperators')}</SectionTitle>
        <CountryCardDetail>
          <CountryFlag>
            <Image
              src={flagPath}
              alt={country.country}
              width={40}
              height={30}
              unoptimized
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </CountryFlag>
          <CountryName>{country.country}</CountryName>
          {country.operators.length > 0 && (
            <OperatorsList>
              {country.operators.map((_, index) => (
                <OperatorName key={index}>
                  {getTranslation(language, 'operator')} {index + 1}
                </OperatorName>
              ))}
            </OperatorsList>
          )}
        </CountryCardDetail>
      </CountriesListContainer>
    </DetailContainer>
  );
};

export default CountryDetail;
