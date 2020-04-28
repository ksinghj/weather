import React from "react";
import Card from "./Card";

class Row extends React.Component {
  renderRowType = name => {
    if (this.props) {
      if (name === "hourly") {
        return <div>Hourly{console.log(this.props.hourly)}</div>;
      }
      return <div>Week{console.log(this.props.daily)}</div>;
    }
    return <div>getting data</div>;
  };

  render() {
    return (
      <div className="row__container">
        <div>{this.renderRowType(this.props.rowName)}</div>
      </div>
    );
  }
}

export default Row;
