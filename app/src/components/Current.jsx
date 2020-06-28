import React from "react";
import { connect } from "react-redux";
import Media from "react-media";
import moment from "moment";
import renderIcon from "../api/renderIcon";
import sunriseIcon from "../img/suntimes/sunrise.svg";
import sunsetIcon from "../img/suntimes/sunset.svg";
import sunIcon from "../img/sun-icon.png";
import "../styles/current.css";
import "../styles/global.css";

class Current extends React.Component {
  renderSuntimes = (sr, ss) => {
    let now = moment();
    let sunriseTime = moment.unix(sr);
    let sunsetTime = moment.unix(ss);
    let sunrise = sunriseTime.fromNow();
    let sunset = now.to(sunsetTime);
    return (
      <div className="suntimes__grid global-font__medium">
        <div className="suntimes__sunrise suntimes__padding-align">
          <img
            className="suntimes__img"
            style={{ maxWidth: "50px", maxHeight: "auto" }}
            src={sunriseIcon}
            alt="sunrise"
          />{" "}
          {sunrise}
        </div>
        <div className="suntimes__sunset suntimes__padding-align">
          <img
            style={{ maxWidth: "50px", maxHeight: "auto" }}
            src={sunsetIcon}
            alt="sunset"
          />{" "}
          {sunset}
        </div>
      </div>
    );
  };

  renderTemp = () => {
    const { data } = this.props;
    if (data) {
      return (
        <div className="current__temps">
          <img className="current__main-icon" src={sunIcon} alt="main icon" />
          <div className="current__temp global-font__large">
            {data.current.temp}℃
          </div>
          <div className="current__feelslike global-font__medium">
            Feels like {data.current.feels_like}℃
          </div>
        </div>
      );
    } // TODO: Change current__main-icon to my own icons
    // {this.renderIcon(data.current.weather[0].icon)}
  };

  render() {
    const { data } = this.props;
    if (data) {
      return (
        <div className="current__container current-font">
          <Media queries={{ small: { maxWidth: 680 } }}>
            {matches =>
              matches.small ? (
                // Mobile
                <React.Fragment>
                  {this.renderTemp()}
                  {this.renderSuntimes(
                    data.current.sunrise,
                    data.current.sunset
                  )}
                </React.Fragment>
              ) : (
                // Tablet and up
                <React.Fragment>
                  {this.renderTemp()}
                  {this.renderSuntimes(
                    data.current.sunrise,
                    data.current.sunset
                  )}
                  <div className="current__clouds-grid global-font__medium">
                    <div className="clouds-percent">{data.current.clouds}%</div>
                    <div className="clouds-description">
                      {data.current.weather[0].description}
                    </div>
                    <div className="clouds-icon">
                      {renderIcon(data.current.weather[0].icon)}
                    </div>
                  </div>
                </React.Fragment>
              )
            }
          </Media>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => {
  return { data: state.weatherReducer.data };
};

export default connect(mapStateToProps)(Current);
