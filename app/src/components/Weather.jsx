import React from "react";
import { connect } from "react-redux";

class Weather extends React.Component {
  render() {
    if (this.props.data) {
      console.log(this.props.data);
      return <div>Weather{this.props.data.lat}</div>;
    }
    return <div>Nope</div>;
  }
}

const mapState = state => {
  return { data: state.weatherReducer.data };
};

export default connect(mapState)(Weather);
