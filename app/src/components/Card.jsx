import React from "react";

const Card = ({ data }) => {
  if (data) {
    console.log(data);
    return (
      <React.Fragment>
        <div>{data.temp}</div>
      </React.Fragment>
    );
  }
  return <div>Waiting on data</div>;
};

export default Card;
