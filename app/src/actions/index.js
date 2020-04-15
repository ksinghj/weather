import weatherApi from "../api";
import KEY from "../api/KEY";

export const getWeather = (lat, lon, unit) => async dispatch => {
  const res = await weatherApi.get(
    `lat=${lat}&lon=${lon}&appid=${KEY}&units=${unit}`
  );

  dispatch({ type: "GET_WEATHER", payload: res.data });
};

// TODO: Fetch weather data on componentDidMount()
