import React from "react";

const Card = ({ data }) => {
  if (data) {
    console.log(data);
    return (
      <React.Fragment>
        <div>Temp: {data.temp}</div>
        <div>Feels like: {data.feels_like}</div>
        <div>{data.weather[0].description}</div>
      </React.Fragment>
    );
  }
  return <div>Waiting on data</div>;
};

export default Card;
