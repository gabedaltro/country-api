import React, { useEffect, useState } from "react";
import { Country } from "../../types/country";
import api from "../../services/api";
import MenuFilterBox from "../menu/MenuFilterBox";
import { CountriesProvider } from "./hooks/useCountries";
import CountryListItem from "./CountryListItem";
import { CircularProgress, TableRow } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

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
}));

const Home: React.FC = () => {
  const classes = useStyles();
  let history = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!api) return;
    setLoading(true);
    api
      .get<Country[]>("/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  async function handleRedirect(country: Country) {
    history(`/${country.name}`);
  }

  return (
    <CountriesProvider value={{ selectedCountry, setSelectedCountry }}>
      <div className={classes.search}>
        <MenuFilterBox
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />
      </div>
      {loading ? (
        <div className={classes.align}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.container}>
          {countries.map((country) => (
            <TableRow
              key={country.numericCode}
              onClick={() => handleRedirect(country)}
            >
              <CountryListItem country={country} />
            </TableRow>
          ))}
        </div>
      )}
    </CountriesProvider>
  );
};

export default Home;
