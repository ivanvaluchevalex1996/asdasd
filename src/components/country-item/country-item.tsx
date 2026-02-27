import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CountryName, CountryPrice, CountryFlag, CountryInfo, ChevronIcon } from './theme';
import { TCountryListItem } from '@/types/types';
import { getFlagPath } from '@/lib/utils';
import { CountryCard } from '../country-detail/theme';

type TCountryItemProps = {
  country: TCountryListItem;
};

const CountryItem = memo(({ country }: TCountryItemProps) => {
  const flagPath = getFlagPath(country.iso);
  const path = country.url.slice(0, -1);

  return (
    <Link href={path}>
      <CountryCard>
        <CountryFlag>
          <Image
            src={flagPath}
            alt={country.country}
            width={40}
            height={30}
            unoptimized
            style={{ width: '80%', height: '100%', objectFit: 'cover', borderRadius: '40px' }}
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
    </Link>
  );
});

CountryItem.displayName = 'CountryItem';

export default CountryItem;
