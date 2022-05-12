import { createContext, useContext } from "react";
import { Country } from "types/country";

type CountriesContextValue = {
  selectedCountry: Country | null;
  setSelectedCountry(country: Country | null): void;
};

const CountriesContext = createContext<CountriesContextValue>(
  {} as CountriesContextValue
);
export const CountriesProvider = CountriesContext.Provider;

export function useCountries(): CountriesContextValue {
  const context = useContext(CountriesContext);
  return context;
}
