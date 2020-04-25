import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions";
import Input from "./Input";
import Current from "./Current";

class App extends React.Component {
  render() {
    return (
      <div className="container" style={{ margin: "2em" }}>
        <Input />
        <Current />
      </div>
    );
  }
}

const mapState = state => {
  return { weather: state.weather };
};

export default connect(mapState, { getWeather })(App);

// TODO: Use location
// TODO: Switch betweenn Celcius and Farenheight and Kelvin
