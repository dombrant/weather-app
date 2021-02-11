import React, { useState, useEffect } from "react";
import Header from "./Header";
import LocationButton from "./LocationButton";
import ForecastItem from "./ForecastItem";
import days from "../utilities/getDays";

const App = () => {
  const [location, setLocation] = useState([]);
  // Set forecast to tell the user to allow location access to start
  // It will later change to forecast for the next five days
  const [forecast, setForecast] = useState([
    "Click the button above to display the forecast",
    "Click the button above to display the forecast",
    "Click the button above to display the forecast",
    "Click the button above to display the forecast",
    "Click the button above to display the forecast",
  ]);

  // Make a request to the API whenever the location is updated.
  useEffect(() => {}, [location]);

  const getLocation = () => {
    // Showing "loading" while the forecast is being requested
    setForecast(["Loading", "Loading", "Loading", "Loading", "Loading"]);

    navigator.geolocation.getCurrentPosition((position) => {
      const coordinates = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      setLocation(coordinates);
    });
  };

  return (
    <div>
      <Header />
      <LocationButton getLocation={getLocation} />
    </div>
  );
};

export default App;
