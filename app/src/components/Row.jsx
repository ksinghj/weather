import React from "react";

class Row extends React.Component {
  renderRowType = name => {
    if (this.props.data) {
      if (name === "hourly") {
        return <div>Hourly{console.log(this.props.data.hourly)}</div>;
      }
      return <div>Week{console.log(this.props.data.daily)}</div>;
    }
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
