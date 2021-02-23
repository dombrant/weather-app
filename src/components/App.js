import React, { useState, useEffect } from "react";
import { Router, Link } from "@reach/router";
import Header from "./Header";
import ForecastButton from "./ForecastButton";
import TodaysForecast from "./TodaysForecast";
import FiveDayForecast from "./FiveDayForecast";

const App = () => {
  // Set forecast to tell the user to allow location access to start
  // It will later change to forecast for the next five days
  const [forecast, setForecast] = useState([
    "Click one of the buttons above to display the forecast",
    "Click one of the buttons above to display the forecast",
    "Click one of the buttons above to display the forecast",
    "Click one of the buttons above to display the forecast",
    "Click one of the buttons above to display the forecast",
  ]);

  const weatherRequest = async () => {
    // Showing "loading" while the forecast is being requested
    setForecast(["Loading", "Loading", "Loading", "Loading", "Loading"]);

    const coordinates = {
      latitude: null,
      longitude: null,
    };

    navigator.geolocation.getCurrentPosition((position) => {
      coordinates.latitude = position.coords.latitude;
      coordinates.longitude = position.coords.longitude;
    });

    try {
      const response = await fetch("/functions/api");
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
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
        <TodaysForecast path="/" forecast={forecast} />
        <FiveDayForecast path="fivedayforecast" forecast={forecast} />
      </Router>
    </div>
  );
};

export default App;
