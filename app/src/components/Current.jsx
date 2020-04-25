import React from "react";
import { connect } from "react-redux";
import moment from "moment";

class Current extends React.Component {
  formatDate = time => {
    let day = moment.unix(time)._d;
    let sunrise = moment().from(day);
    let sunset = moment().to(day);
    let suntimes = [sunrise, sunset];
    return suntimes;
  };

  renderRawData = () => {
    const { data } = this.props;
    // this.formatDate(data.current.sunset);
    if (data) {
      return (
        <div className="raw">
          <div className="current">
            <p>Current</p>
            <ul>
              <li>clouds{data.current.clouds}%</li>
              <li>temp{data.current.temp}℃ </li>
              <li>feels like{data.current.feels_like}</li>
              <li>sunrise{data.current.sunrise}</li>
              <li>sunset{data.current.sunset}</li>
            </ul>
          </div>
          <div className="weather">
            <p>Weather</p>
            <ul>
              <li>description{data.current.weather[0].description}</li>
              <li>icon{data.current.weather[0].icon}</li>
            </ul>
          </div>
        </div>
      );
    }
    return <div>No data yet...</div>;
  };

  render() {
    // const { data } = this.props;
    // this.formatDate(data.current.sunset);
    return (
      <div className="current current-container">
        <div>Current</div>
        <div>Raw:{this.renderRawData()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.weatherReducer.data };
};

export default connect(mapStateToProps)(Current);

// TODO: Map icon ids to imgs (and find imgs first)
