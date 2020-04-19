import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions";
// import owmKEY from "../api/owmKEY";
import Input from "./Input";

class App extends React.Component {
  render() {
    return (
      <div className="container" style={{ margin: "2em" }}>
        <Input />
      </div>
    );
  }
}

const mapState = state => {
  return { weather: state.weather };
};

export default connect(mapState, { getWeather })(App);

// TODO: Use location
