import { memo } from 'react';
import Image from 'next/image';
import {
  CountryCard,
  CountryName,
  CountryPrice,
  CountryFlag,
  CountryInfo,
  ChevronIcon,
} from './theme';
import { TCountry } from '@/types/types';
import { getFlagPath } from '@/lib/flags';

type TCountryItemProps = {
  country: TCountry;
  onClick: (country: TCountry) => void;
};

const CountryItem = memo(({ country, onClick }: TCountryItemProps) => {
  const flagPath = getFlagPath(country.iso);

  return (
    <CountryCard onClick={() => onClick(country)}>
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
      <CountryInfo>
        <CountryName>{country.country}</CountryName>
        <CountryPrice>
          от {country.price.amount} {country.price.symbol}/GB
        </CountryPrice>
      </CountryInfo>
      <ChevronIcon>›</ChevronIcon>
    </CountryCard>
  );
});

CountryItem.displayName = 'CountryItem';

export default CountryItem;
