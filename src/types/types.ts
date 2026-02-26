// тест
export type TCountry = {
  country: string;
  iso: string;
  id: string;
  fl_unlimited: string;
  cost_per_day: string;
  url: string;
  new: boolean;
  popular: string;
  cost_per_gb: string;
  search: string[];
  operators: Array<{
    phone_view: string;
    prefix: string;
    generation: Array<{ name: string }>;
  }>;
  price: {
    amount: string;
    currency: string;
    iso2: string;
    iso3: string;
    symbol: string;
  };
  price_per_day: {
    amount: string;
    currency: string;
    iso2: string;
    iso3: string;
    symbol: string;
  };
};
