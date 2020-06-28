import React from "react";
import { connect } from "react-redux";
import { getWeather } from "../actions";
import { WEATHER_API_KEY } from "../api/owmKEY";
import "../styles/input.css";

import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = address => {
    this.setState({ address });
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.props.getWeather(
          latLng.lat,
          latLng.lng,
          WEATHER_API_KEY,
          "metric"
        );
      })
      .catch(error => console.error("Error", error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="container__input">
            <input
              {...getInputProps({
                placeholder: "Where to?",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? {
                      backgroundColor: "#89c8ff",
                      cursor: "pointer",
                      padding: "1em",
                    }
                  : {
                      backgroundColor: "#64b6f",
                      cursor: "pointer",
                      padding: "1em",
                    };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default connect(null, { getWeather })(LocationSearchInput);

// There is some work to be done on this component
// Active selections on the dropdown stay active styled (undesired)
// Input text isn't updated when option is CLICKED
