import React, { useEffect, useState } from "react";
import { Country } from "../../types/country";
import api from "../../services/api";
import { CountriesProvider } from "./hooks/useCountries";
import CountryListItem from "./CountryListItem";
import {
  CircularProgress,
  InputAdornment,
  MenuItem,
  TableRow,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Search } from "@mui/icons-material";
import useSearch from "../../hooks/Search";
import NoData from "../../components/NoData";

const useStyles = makeStyles((theme) => ({
  search: {
    display: "flex",
  },
  container: {
    marginTop: 40,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    rowGap: 40,
    columnGap: 30,
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  align: {
    textAlign: "center",
    marginTop: 250,
  },
  content: {
    display: "flex",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      display: "grid",
      gridTemplateColumns: "repeat(1,1fr)",
    },
  },
  text: {
    width: 400,
    backgroundColor: "white",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  typo: {
    width: 150,
    backgroundColor: "white",
  },
  filter: {
    display: "flex",
    justifyContent: "end",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "start",
      marginTop: 10,
    },
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  let history = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [filtered, setFiltered] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("0");
  const search = useSearch();

  useEffect(() => {
    setLoading(true);
    api
      .get<Country[]>(filter === "0" ? `/all?fields=` : `/continent/${filter}`)
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [filter]);

  useEffect(() => {
    const f = search(searchValue, "name", countries);
    setFiltered(f);
  }, [searchValue, search, countries]);

  async function handleRedirect(country: Country) {
    history(`/${country.name}`);
  }

  return (
    <CountriesProvider value={{ selectedCountry, setSelectedCountry }}>
      <div className={classes.search}>
        <div className={classes.content}>
          <div>
            <TextField
              placeholder="Search for a country..."
              autoFocus
              variant="outlined"
              className={classes.text}
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
          <div className={classes.filter}>
            <TextField
              id="outlined-select-currency"
              select
              label="Filter by Region"
              value={filter}
              className={classes.typo}
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="0">All countries</MenuItem>
              <MenuItem value="africa">Africa</MenuItem>
              <MenuItem value="america">America</MenuItem>
              <MenuItem value="asia">Asia</MenuItem>
              <MenuItem value="europe">Europe</MenuItem>
              <MenuItem value="oceania">Oceania</MenuItem>
            </TextField>
          </div>
        </div>
      </div>
      {loading ? (
        <div className={classes.align}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.container}>
          {filtered.length === 0 ? (
            <NoData message="No country to show" />
          ) : (
            <>
              {filtered.map((country) => (
                <TableRow
                  key={country.numericCode}
                  onClick={() => handleRedirect(country)}
                >
                  <CountryListItem country={country} />
                </TableRow>
              ))}
            </>
          )}
        </div>
      )}
    </CountriesProvider>
  );
};

export default Home;
