import React, { useState } from "react";
import Header from "./Header";
import ForecastItem from "./ForecastItem";
import days from "../utilities/getDays";

const App = () => {
  const [location, setLocation] = useState([]);
  // Set forecast to five "Loadings" to start
  // It will later change to forecast for the next five days
  const [forecast, setForecast] = useState([
    "Loading",
    "Loading",
    "Loading",
    "Loading",
    "Loading",
  ]);

  // Make a request to the API whenever the location is updated.
  useEffect(() => {}, [location]);

  return (
    <div>
      <Header />
      <div className="forecast-container">
        {days.map((day, index) => {
          return <ForecastItem key={index} day={day} />;
        })}
      </div>
    </div>
  );
};

export default App;
