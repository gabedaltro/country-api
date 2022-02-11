import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import { Country } from "../../types/country";
import CountryItemActions from "./CountryItemActions";
import NoData from "../../components/NoData";

type CountryShowItemProps = {
  country: Country;
};

const useStyles = makeStyles((theme) => ({
  all: {},
  container: {
    marginTop: 30,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  img: {
    [theme.breakpoints.up("lg")]: {
      width: "80%",
      height: "100%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "80%",
      height: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "80%",
      height: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
      height: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%",
    },
  },
  countryInfo: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 10,
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: 20,
    },
  },
  infos: {
    marginTop: 50,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 10,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  borderCountriesTwo: {
    marginTop: 40,
    gap: 10,
    display: "grid",
    gridTemplateColumns: "150px 1fr",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
  borderCountries: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 7,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
  box: {
    border: "1px solid #bfbfbf",
    textAlign: "center",
    padding: 5,
  },
  image: {},
}));

const CountryShowItem: React.FC<CountryShowItemProps> = ({ country }) => {
  const classes = useStyles();

  return (
    <div className={classes.all}>
      <CountryItemActions />
      <div className={classes.container}>
        <div className={classes.image}>
          <img
            className={classes.img}
            src={country.flags.svg}
            alt={country?.name}
          />
        </div>
        <div className={classes.countryInfo}>
          <Typography fontWeight="bold" fontSize={28}>
            {country.name}
          </Typography>
          <div className={classes.infos}>
            <div>
              <Typography marginTop={2} fontSize={16}>
                <b>Native Name:</b> {country.nativeName}
              </Typography>
              <Typography marginTop={2} fontSize={16}>
                <b>Population:</b> {country.population}
              </Typography>
              <Typography marginTop={2} fontSize={16}>
                <b>Region:</b> {country.region}
              </Typography>
              <Typography marginTop={2} fontSize={16}>
                <b>Sub Region:</b> {country.subregion}
              </Typography>
              <Typography marginTop={2} fontSize={16}>
                <b>Capital:</b> {country.capital}
              </Typography>
            </div>
            <div>
              <Typography marginTop={2} fontSize={16}>
                <b>Top Level Domain:</b> {country.topLevelDomain}
              </Typography>
              <Typography marginTop={2} fontSize={16}>
                <b>Currencies: </b>
                {country.currencies.map((currencies) => currencies.name)}
              </Typography>
              <Typography marginTop={2} fontSize={16}>
                <b>Languages: </b>
                {country.languages.map((languages) => languages.iso639_1)}
              </Typography>
            </div>
          </div>
          <div className={classes.borderCountriesTwo}>
            {country.borders ? (
              <>
                <Typography fontSize={16} fontWeight="bold">
                  Border Countries:
                </Typography>
                <div className={classes.borderCountries}>
                  {country.borders?.map((border) => (
                    <Typography className={classes.box}>{border}</Typography>
                  ))}
                </div>
              </>
            ) : (
              <NoData message="No border countries" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryShowItem;
