import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Country } from "../../types/country";

type CountryListItemProps = {
  country: Country;
};

const useStyles = makeStyles((theme) => ({
  box: {
    height: 420,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    cursor: "pointer",
  },
  info: {
    padding: 25,
    height: "100%",
  },
  img: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
}));

const CountryListItem: React.FC<CountryListItemProps> = ({ country }) => {
  const classes = useStyles();

  return (
    <Box>
      <div className={classes.box}>
        <div>
          <img
            src={country.flags.png}
            alt={country.name}
            className={classes.img}
          />
        </div>
        <div className={classes.info}>
          <Typography variant="body1" fontWeight="bold" fontSize={20}>
            {country.name}
          </Typography>
          <Typography marginTop={2}>
            <b>Population:</b> {country.population}
          </Typography>
          <Typography>
            <b>Region:</b> {country.region}
          </Typography>
          <Typography>
            <b>Capital:</b> {country.capital}
          </Typography>
        </div>
      </div>
    </Box>
  );
};

export default CountryListItem;
