import {
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
import { useCharts } from "./hooks/useCharts";

const useStyles = makeStyles({
  formControl: {
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    gap: 30,
  },
});

const FormControlCharts: React.FC = () => {
  const classes = useStyles();
  const {
    selectedChartOne,
    selectedChartTwo,
    selectedChartThree,
    selectedChartFour,
    setSelectedChartOne,
    setSelectedChartTwo,
    setSelectedChartThree,
    setSelectedChartFour,
    filtered,
  } = useCharts();
  return (
    <div className={classes.formControl}>
      <FormControl fullWidth>
        <InputLabel>Country</InputLabel>
        <Select value={selectedChartOne?.name} label="Country">
          {filtered.map((country) => (
            <MenuItem
              value={country.name}
              onClick={() => setSelectedChartOne(country)}
              key={country.numericCode}
            >
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Country</InputLabel>
        <Select value={selectedChartTwo?.name} label="Country">
          {filtered.map((country) => (
            <MenuItem
              value={country.name}
              onClick={() => setSelectedChartTwo(country)}
              key={country.numericCode}
            >
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Country</InputLabel>
        <Select
          value={selectedChartThree?.name}
          label="Country"
          onChange={() => setSelectedChartFour}
        >
          {filtered.map((country) => (
            <MenuItem
              value={country.name}
              onClick={() => setSelectedChartThree(country)}
              key={country.numericCode}
            >
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Country</InputLabel>
        <Select value={selectedChartFour?.name} label="Country">
          {filtered.map((country) => (
            <MenuItem
              value={country.name}
              onClick={() => setSelectedChartFour(country)}
              key={country.numericCode}
            >
              {country.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default FormControlCharts;
