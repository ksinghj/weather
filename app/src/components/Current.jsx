import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import sunriseIcon from "../suntimes/sunrise.svg";
import sunsetIcon from "../suntimes/sunset.svg";

class Current extends React.Component {
  renderSuntimes = (sr, ss) => {
    let now = moment();
    let sunriseTime = moment.unix(sr);
    let sunrise = sunriseTime.fromNow();
    let sunsetTime = moment.unix(ss);
    let sunset = now.to(sunsetTime);
    return (
      <div className="suntimes">
        <div>
          <img
            style={{ maxWidth: "80px", maxHeight: "auto" }}
            src={sunriseIcon}
            alt="sunrise"
          />{" "}
          {sunrise}
        </div>
        <div>
          <img
            style={{ maxWidth: "80px", maxHeight: "auto" }}
            src={sunsetIcon}
            alt="sunset"
          />{" "}
          {sunset}
        </div>
      </div>
    );
  };

  renderIcon = (code) => {
    if (code) {
      return (
        <img
          src={`http://openweathermap.org/img/wn/${code}@2x.png`}
          alt="weather icon"
        />
      );
    }
    return (
      <img
        src="http://openweathermap.org/img/wn/03n@2x.png"
        alt="weather icon"
      />
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
              <li>temp{data.current.temp}℃</li>
              <li>feels like{data.current.feels_like}℃</li>
              {this.renderSuntimes(data.current.sunrise, data.current.sunset)}
            </ul>
          </div>
          <div className="weather">
            <p>Weather</p>
            <ul>
              <li>clouds{data.current.clouds}%</li>
              <li>description{data.current.weather[0].description}</li>
              <li>{this.renderIcon(data.current.weather[0].icon)}</li>
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

const mapStateToProps = (state) => {
  return { data: state.weatherReducer.data };
};

export default connect(mapStateToProps)(Current);

// TODO: Map icon ids to imgs (and find imgs first)
