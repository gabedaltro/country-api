export interface Currencies {
  code: string;
  name: string;
  symbol: string;
}

export interface Flags {
  svg: string;
  png: string;
}

export interface Languages {
  name: string;
  nativeName: string;
  iso639_1: string;
  iso639_2: string;
}

export interface Country {
  numericCode: number;
  name: string;
  languages: Languages[];
  alpha3Code: string;
  topLevelDomain: [];
  capital: string;
  subregion: string;
  region: string;
  population: string;
  flags: Flags;
  currencies: Currencies[];
  formattedPopulation?: string;
  nativeName: string;
  borders?: [];
}
