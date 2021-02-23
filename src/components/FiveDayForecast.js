import React from "react";
import ForecastItem from "./ForecastItem";
import days from "../utilities/getDays";

const FiveDayForecast = ({ forecast }) => {
  return (
    <div className="five-day-forecast">
      {days.map((day, index) => {
        return (
          <ForecastItem key={index} day={day} forecast={forecast[index]} />
        );
      })}
    </div>
  );
};

export default FiveDayForecast;
