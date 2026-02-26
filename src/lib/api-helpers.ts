import { TCountry } from '@/types/types';
import { normalizeUrl } from './url-utils';

/**
 * Находит страну в массиве по нормализованному URL
 */
export const findCountryByName = (countries: TCountry[], name: string): TCountry | null => {
  return countries.find((c) => normalizeUrl(c.url) === name) || null;
};
