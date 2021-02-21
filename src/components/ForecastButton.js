import React from "react";

const ForecastButton = ({ getLocation, text }) => {
  return (
    <button onClick={() => getLocation()}>
      <p> Get the forecast for {text} </p>
    </button>
  );
};

export default ForecastButton;
