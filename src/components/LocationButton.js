import React from "react";

const LocationButton = ({ getLocation }) => {
  return (
    <button onClick={() => getLocation()}>
      <p> Get forecast for your current location </p>
    </button>
  );
};

export default LocationButton;
