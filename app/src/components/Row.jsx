import React from "react";

class Row extends React.Component {
  renderRowName = () => {
    return <div>{this.props.rowName}</div>;
  };

  render() {
    console.log(this.props.data);
    return (
      <div className="row__container">
        <div>{this.renderRowName()}</div>
      </div>
    );
  }
}

export default Row;
