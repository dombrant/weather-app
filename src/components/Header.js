import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      <svg viewBox="0 0 64 64">
        <g fill="none" stroke="#202020">
          <path d="M27.1 39.5a10 10 0 116.9-10M24 8v6M8 30H2m6.4-15.5l4.3 4.2m26.9-4.2l-4.3 4.2M12.7 41.3l-4.3 4.3" />
          <path d="M52 36a13 13 0 00-25 4.1h-1a8 8 0 100 16h26a10 10 0 000-20z" />
        </g>
      </svg>
      <h1> Weather Forecast </h1>
    </div>
  );
};

export default Header;
