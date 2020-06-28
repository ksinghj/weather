import React from "react";
import renderIcon from "../api/renderIcon";
import "../styles/card.css";
import moment from "moment";

const Card = ({ hourly, daily }) => {
  if (hourly) {
    let hour = moment.unix(hourly.dt).format("LT");
    return (
      <div className="card">
        <div className="card__header">{hour}</div>
        <div className="card__description">{hourly.weather[0].description}</div>
        <div className="card__icon">{renderIcon(hourly.weather[0].icon)}</div>
        <div className="card__temp">Temp: {hourly.temp}℃</div>
        <div className="card__temp">Feels like: {hourly.feels_like}℃</div>
      </div>
    );
  } else if (daily) {
    let day = moment.unix(daily.dt).format("dddd");
    return (
      <div className="card card__weekly">
        <div className="card__header">{day}</div>
        <div className="card__description">{daily.weather[0].description}</div>
        <div className="card__icon">{renderIcon(daily.weather[0].icon)}</div>
        <div className="card__temp">High: {daily.temp.max}℃</div>
        <div className="card__temp">Low: {daily.temp.min}℃</div>
      </div>
    );
  }
  return <div>Waiting on data</div>;
};

export default Card;
