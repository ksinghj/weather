import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.getWeather(53, 1.15, "metric");
  }

  render() {
    return (
      <div>
        <p>App</p>
      </div>
    );
  }
}

const mapState = state => {
  return { weather: state.weather };
};

export default connect(mapState, { getWeather })(App);

// TODO: Use location?
// TODO: Use https://developers.google.com/maps/documentation/geocoding/intro to change location to coords
