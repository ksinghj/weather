import React from "react";
import renderIcon from "../api/renderIcon";

const Card = ({ hourly, daily }) => {
  if (hourly) {
    return (
      <div className="card">
        <div className="card__header">07:00</div>
        <div className="card__description">{hourly.weather[0].description}</div>
        <div className="card__icon">{renderIcon(hourly.weather[0].icon)}</div>
        <div className="card__temp">Temp: {hourly.temp}</div>
        <div className="card__temp">Feels like: {hourly.feels_like}</div>
      </div>
    );
  } else if (daily) {
    console.log(daily);
    return (
      <div className="card">
        <div className="card__header">Thursday</div>
        <div className="card__description">{daily.weather[0].description}</div>
        <div className="card__icon">{renderIcon(daily.weather[0].icon)}</div>
        <div className="card__temp">High: {daily.temp.max}</div>
        <div className="card__temp">Low: {daily.temp.min}</div>
      </div>
    );
  }
  return <div>Waiting on data</div>;
};

export default Card;