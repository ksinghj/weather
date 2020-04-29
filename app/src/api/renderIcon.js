import React from "react";

const renderIcon = code => {
  if (code) {
    return (
      <img
        className="owm-icon"
        src={`http://openweathermap.org/img/wn/${code}@2x.png`}
        alt="weather icon"
      />
    );
  }
  return (
    <img
      className="owm-icon"
      src="http://openweathermap.org/img/wn/03n@2x.png"
      alt="weather icon"
    />
  );
};

export default renderIcon;
