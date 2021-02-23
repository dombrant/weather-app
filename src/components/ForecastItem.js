import React from "react";

const ForecastItem = ({ day, forecast }) => {
  return (
    <div className="forecast-item">
      <h3> {day} </h3>
      <p> {forecast}</p>
    </div>
  );
};

export default ForecastItem;
