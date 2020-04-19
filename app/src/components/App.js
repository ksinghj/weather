import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions";
// import owmKEY from "../api/owmKEY";

class App extends React.Component {
  // componentDidMount() {
  //   this.props.getWeather(53, 1.15, ownKEY, "metric");
  // } OWM API CALL HERE

  render() {
    return (
      <div className="container" style={{ margin: "2em" }}>
        <input id="search" type="text" />
        <button>Submit</button>
      </div>
    );
  }
}

const mapState = state => {
  return { weather: state.weather };
};

export default connect(mapState, { getWeather })(App);

// TODO: AUtocomplete working
// TODO: Use location
// TODO: call getWeather when input submited with geocoded values
// googleKEY: AIzaSyB5MxVLhc-62XMMwEB3PMLcEBZy5ceGOVI
