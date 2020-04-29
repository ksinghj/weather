import React from "react";
import Card from "./Card";
import "../styles/row.css";

class Row extends React.Component {
  renderCards = type => {
    if (type === "hourly") {
      return this.props.hourly.slice(0, 24).map(cardData => {
        return <Card hourly={cardData} />;
      });
    }
    return this.props.daily.map(cardData => {
      return <Card daily={cardData} />;
    });
  };

  renderRowType = name => {
    if (this.props) {
      if (name === "hourly") {
        console.log(this.props.hourly);
        return (
          <div className="row">
            <div className="row__title">Hourly</div>
            <div className="row__description">Your forecast for today.</div>
            <div className="row__cards">{this.renderCards("hourly")}</div>
          </div>
        );
      }
      return (
        <div className="row">
          <div className="row__title">Weekly</div>
          <div className="row__description">Your forecast for this week.</div>
          <div className="row__cards">{this.renderCards("daily")}</div>
        </div>
      );
    }
    return <div>getting data</div>;
  };

  render() {
    return (
      <React.Fragment>{this.renderRowType(this.props.rowName)}</React.Fragment>
    );
  }
}

export default Row;
