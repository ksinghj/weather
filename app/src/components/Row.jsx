import React from "react";
import Card from "./Card";

class Row extends React.Component {
  renderRowType = name => {
    if (this.props) {
      if (name === "hourly") {
        console.log(this.props.hourly);
        return (
          <div>
            <div className="row__title">Hourly</div>
            <div className="row__description">Your forecast for today.</div>
            {this.props.hourly.map(card => {
              return <Card data={card} />;
            })}
          </div>
        );
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
