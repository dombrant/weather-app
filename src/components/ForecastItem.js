import React from "react";

const ForecastItem = ({ day }) => {
  return (
    <div className="forecast-item">
      <h3> {day} </h3>
    </div>
  );
};

export default ForecastItem;
