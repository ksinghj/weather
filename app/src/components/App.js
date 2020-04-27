import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions";
import Input from "./Input";
import Current from "./Current";
import "../styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="container__app">
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
// TODO: Conditional render with react-media
// TODO: add buttons for desktop scrolling on cards (later)
// TODO: round temps to nearest int
