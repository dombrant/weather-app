import React from "react";
import ForecastItem from "./ForecastItem";

const TodaysForecast = ({ forecast }) => {
  return <ForecastItem day="Today" forecast={forecast[0]} />;
};

export default TodaysForecast;
