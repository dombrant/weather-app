import React from "react";

const ForecastButton = ({ weatherRequest, text }) => {
  return (
    <button onClick={() => weatherRequest()}>
      <p> Get the forecast for {text} </p>
    </button>
  );
};

export default ForecastButton;
