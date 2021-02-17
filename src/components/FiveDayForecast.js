import React from "react";
import ForecastItem from "./ForecastItem";
import days from "../utilities/getDays";

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
