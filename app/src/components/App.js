import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions";
import Input from "./Input";
import Weather from "./Weather";

class App extends React.Component {
  render() {
    return (
      <div className="container" style={{ margin: "2em" }}>
        <Input />
        <Weather />
      </div>
    );
  }
}

const mapState = state => {
  return { weather: state.weather };
};

export default connect(mapState, { getWeather })(App);

// TODO: Use location
