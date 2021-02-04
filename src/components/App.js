import React from "react";
import Header from "./Header";
import ForecastItem from "./ForecastItem";
import days from "../utilities/getDays";

const App = () => {
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
