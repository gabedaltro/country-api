import { createContext, useContext } from "react";
import { Country } from "../../../types/country";

type ChartsContextValue = {
  selectedChartOne: Country | null;
  setSelectedChartOne(country: Country | null): void;
  selectedChartTwo: Country | null;
  setSelectedChartTwo(country: Country | null): void;
  selectedChartThree: Country | null;
  setSelectedChartThree(country: Country | null): void;
  selectedChartFour: Country | null;
  setSelectedChartFour(country: Country | null): void;
  filtered: Country[];
};

const ChartsContext = createContext<ChartsContextValue>(
  {} as ChartsContextValue
);
export const ChartsProvider = ChartsContext.Provider;

export function useCharts(): ChartsContextValue {
  const context = useContext(ChartsContext);
  return context;
}
