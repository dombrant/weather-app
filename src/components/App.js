import React, { useState, useRef } from "react";
import { Router, Link } from "@reach/router";
import Header from "./Header";
import ForecastButton from "./ForecastButton";
import TodaysForecast from "./TodaysForecast";
import FiveDayForecast from "./FiveDayForecast";
import getPosition from "../utilities/getPosition";

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

  // Create a ref to be used inside of weatherRequest below
  // That way, if the user first clicks on today's forecast, then the five day forecast (or vice versa), another request does not have to be made
  const requestMade = useRef(false);

  const weatherRequest = async () => {
    if (!requestMade.current) {
      // Showing "loading" while the forecast is being requested
      setForecast(["Loading", "Loading", "Loading", "Loading", "Loading"]);

      const position = await getPosition().catch((error) =>
        setForecast([
          "Error requesting location accesss, please try again.",
          "Error requesting location accesss, please try again.",
          "Error requesting location accesss, please try again.",
          "Error requesting location accesss, please try again.",
          "Error requesting location accesss, please try again.",
        ])
      );

      try {
        const response = await fetch("/api", {
          method: "POST",
          body: JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }),
        });
        const data = await response.json();

        const fiveDayMaxMin = data.daily
          .slice(0, 5)
          .map(
            (day) =>
              `High: ${Math.round(day.temp.max)}F, Low: ${Math.round(
                day.temp.min
              )}F`
          );
        setForecast(fiveDayMaxMin);

        requestMade.current = true;
      } catch (error) {
        setForecast([
          "Error making request, please double check that location access is allowed and try again.",
          "Error making request, please double check that location access is allowed and try again.",
          "Error making request, please double check that location access is allowed and try again.",
          "Error making request, please double check that location access is allowed and try again.",
          "Error making request, please double check that location access is allowed and try again.",
        ]);
      }
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
