import React from "react";
import { connect } from "react-redux";
import moment from "moment";

class Current extends React.Component {
  renderSuntimes = (sr, ss) => {
    let now = moment();
    let sunriseTime = moment.unix(sr);
    let sunrise = sunriseTime.fromNow();
    let sunsetTime = moment.unix(ss);
    let sunset = now.to(sunsetTime);
    return (
      <div className="suntimes">
        <div>sunrise icon {sunrise}</div>
        <div>sunset icon {sunset}</div>
      </div>
    );
  };

  renderRawData = () => {
    const { data } = this.props;
    if (data) {
      return (
        <div className="raw">
          <div className="current">
            <p>Current</p>
            <ul>
              <li>clouds{data.current.clouds}%</li>
              <li>temp{data.current.temp}℃</li>
              <li>feels like{data.current.feels_like}℃</li>
              {this.renderSuntimes(data.current.sunrise, data.current.sunset)}
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
