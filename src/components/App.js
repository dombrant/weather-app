import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
import Header from "./Header";
import ForecastButton from "./ForecastButton";
import TodaysForecast from "./TodaysForecast";
import FiveDayForecast from "./FiveDayForecast";

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

  const weatherRequest = () => {
    // Showing "loading" while the forecast is being requested
    setForecast(["Loading", "Loading", "Loading", "Loading", "Loading"]);

    const coordinates = {
      latitude: null,
      longitude: null,
    };

    navigator.geolocation.getCurrentPosition((position) => {
      coordinates.latitude = position.coords.latitude;
      coordinates.longitude = position.coords.longitude;
      setLocation(coordinates);
    });
  };

  return (
    <div>
      <Header />
      <div className="button-container">
        <Link to="/">
          <ForecastButton weatherRequest={weatherRequest} text={"today"} />
        </Link>
        <Link to="fivedayforecast">
          <ForecastButton
            weatherRequest={weatherRequest}
            text={"the next five days"}
          />
        </Link>
      </div>
      <Router>
        <TodaysForecast path="/" />
        <FiveDayForecast path="fivedayforecast" />
      </Router>
    </div>
  );
};

export default App;
