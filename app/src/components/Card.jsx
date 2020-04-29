import React from "react";
import renderIcon from "../api/renderIcon";

const Card = ({ rowName, data }) => {
  if (data) {
    console.log(data);
    return (
      <React.Fragment>
        <div> {renderIcon(data.weather[0].icon)}</div>
        <div>Temp: {data.temp}</div>
        <div>Feels like: {data.feels_like}</div>
        <div>{data.weather[0].description}</div>
      </React.Fragment>
    );
  }
  return <div>Waiting on data</div>;
};

export default Card;
