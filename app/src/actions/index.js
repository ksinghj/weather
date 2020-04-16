// import weatherApi from "../api";
// import KEY from "../api/KEY";
import axios from "axios";

const baseURL = "https://api.openweathermap.org/data/2.5/onecall";

export const getWeather = (lat, lon, appid, unit) => async dispatch => {
  const res = await axios.get(baseURL, {
    params: {
      lat,
      lon,
      appid,
      unit,
    },
  });

  dispatch({ type: "GET_WEATHER", payload: res.data });
};
