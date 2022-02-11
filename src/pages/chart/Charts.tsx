import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TableRow,
} from "@material-ui/core";
import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import useSearch from "../../hooks/Search";
import api from "../../services/api";
import { Country } from "../../types/country";
import CountriesChart from "./CountriesChart";
import FormControlCharts from "./FormControlCharts";
import { ChartsProvider } from "./hooks/useCharts";

const useStyles = makeStyles({
  search: {
    textAlign: "center",
    marginBottom: 10,
  },
  infoChart: {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
    gap: 10,
  },
});

const Charts: React.FC = () => {
  const classes = useStyles();
  const [selectedChartOne, setSelectedChartOne] = useState<Country | null>(
    null
  );
  const [selectedChartTwo, setSelectedChartTwo] = useState<Country | null>(
    null
  );
  const [selectedChartThree, setSelectedChartThree] = useState<Country | null>(
    null
  );
  const [selectedChartFour, setSelectedChartFour] = useState<Country | null>(
    null
  );
  const [countries, setCountries] = useState<Country[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [filtered, setFiltered] = useState<Country[]>([]);
  const search = useSearch();

  useEffect(() => {
    api
      .get<Country[]>(`/all`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    const f = search(searchValue, "name", countries);
    setFiltered(f);
  }, [searchValue, search, countries]);

  return (
    <ChartsProvider
      value={{
        selectedChartOne,
        setSelectedChartOne,
        selectedChartTwo,
        setSelectedChartTwo,
        selectedChartThree,
        setSelectedChartThree,
        selectedChartFour,
        setSelectedChartFour,
        filtered,
      }}
    >
      <div className={classes.search}>
        <TextField
          placeholder="Search for a country..."
          autoFocus
          variant="outlined"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className={classes.infoChart}>
        <FormControlCharts />
        <CountriesChart />
      </div>
    </ChartsProvider>
  );
};

export default Charts;
