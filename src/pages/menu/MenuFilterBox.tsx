import React, { useState } from "react";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Search } from "@mui/icons-material";

type MenuFilterBoxProps = {
  setSearchValue(value: string): void;
  searchValue: string;
  filter: string;
  setFilter(value: string): void;
};

const useStyles = makeStyles((theme) => ({
  container: {
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

const MenuFilterBox: React.FC<MenuFilterBoxProps> = ({
  setSearchValue,
  searchValue,
  filter,
  setFilter,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
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
  );
};

export default MenuFilterBox;
