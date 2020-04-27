import React from "react";
import { connect } from "react-redux";
import moment from "moment";
import sunriseIcon from "../suntimes/sunrise.svg";
import sunsetIcon from "../suntimes/sunset.svg";
import "../styles/current.css";

class Current extends React.Component {
  renderSuntimes = (sr, ss) => {
    let now = moment();
    let sunriseTime = moment.unix(sr);
    let sunrise = sunriseTime.fromNow();
    let sunsetTime = moment.unix(ss);
    let sunset = now.to(sunsetTime);
    return (
      <React.Fragment>
        <div className="suntimes__sunrise">
          <img
            style={{ maxWidth: "80px", maxHeight: "auto" }}
            src={sunriseIcon}
            alt="sunrise"
          />{" "}
          {sunrise}
        </div>
        <div className="suntimes__sunset">
          <img
            style={{ maxWidth: "80px", maxHeight: "auto" }}
            src={sunsetIcon}
            alt="sunset"
          />{" "}
          {sunset}
        </div>
      </React.Fragment>
    );
  };

  renderIcon = code => {
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

  renderTemp = () => {
    const { data } = this.props;
    if (data) {
      return (
        <div className="current__temps">
          <img
            src="http://openweathermap.org/img/wn/03n@2x.png"
            alt="icon"
            className="current__main-icon"
          />
          <div className="current__temp">{data.current.temp}℃</div>
          <div className="current__feelslike">
            Feels like {data.current.feels_like}℃
          </div>
        </div>
      );
    }
  };

  render() {
    const { data } = this.props;
    if (data) {
      return (
        <div className="current-container current-font">
          <div>{this.renderTemp()}</div>
          {this.renderSuntimes(data.current.sunrise, data.current.sunset)}
          <div className="current__clouds-grid">
            <div className="clouds-percent">{data.current.clouds}%</div>
            <div className="clouds-description">{data.current.weather[0].description}</div>
            <div className="clouds-icon">{this.renderIcon(data.current.weather[0].icon)}</div>
          </div>
        </div>
      );
    }
    return <div>Enter location in search</div>;
  }
}

const mapStateToProps = state => {
  return { data: state.weatherReducer.data };
};

export default connect(mapStateToProps)(Current);
