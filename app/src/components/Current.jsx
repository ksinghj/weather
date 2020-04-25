import React from "react";
import { connect } from "react-redux";
import moment from "moment";

class Current extends React.Component {
  componentDidMount() {
    const { data } = this.props;
    console.log(data);
  }

  formatDate = time => {
    let day = moment.unix(time)._d;
    let sunrise = moment().from(day);
    let sunset = moment().to(day);
    let suntimes = [sunrise, sunset];
    return suntimes;
  };

  render() {
    const { data } = this.props;
    if (data) {
      this.formatDate(data.current.sunset);
      return (
        <div>
          <div className="current">
            <h1>Current</h1>
            <ul>
              <li>clouds{data.current.clouds}</li>
              <li>temp{data.current.temp}</li>
              <li>feels like{data.current.feels_like}</li>
              <li>sunrise{data.current.sunrise}</li>
              <li>sunset{data.current.sunset}</li>
            </ul>
          </div>
          <div className="weather">
            <h2>Weather</h2>
            <ul>
              <li>description{data.current.weather[0].description}</li>
              <li>icon{data.current.weather[0].icon}</li>
            </ul>
          </div>
        </div>
      );
    }
    return <div>Unable to get weather data for this location. (MODAL)</div>;
  }
}

const mapState = state => {
  return { data: state.weatherReducer.data };
};

export default connect(mapState)(Current);
