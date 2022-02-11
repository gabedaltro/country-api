import React from "react";
import { Chart } from "react-google-charts";
import { useCharts } from "./hooks/useCharts";

const CountriesChart: React.FC = () => {
  const {
    selectedChartOne,
    selectedChartTwo,
    selectedChartFour,
    selectedChartThree,
  } = useCharts();

  const data = [
    ["Countries", "Population"],
    [`${selectedChartOne?.name}`, selectedChartOne?.population],
    [`${selectedChartTwo?.name}`, selectedChartTwo?.population],
    [`${selectedChartThree?.name}`, selectedChartThree?.population],
    [`${selectedChartFour?.name}`, selectedChartFour?.population],
  ];

  const options = {
    title: "Population Countries",
  };

  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
};

export default CountriesChart;
