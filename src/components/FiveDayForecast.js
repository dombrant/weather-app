import ForecastItem from "./ForecastItem";
import days from "../utilities/getDays";

import React from "react";

const FiveDayForecast = () => {
  return (
    <div className="five-day-forecast">
      {days.map((day, index) => {
        return <ForecastItem key={index} day={day} />;
      })}
    </div>
  );
};

export default FiveDayForecast;
