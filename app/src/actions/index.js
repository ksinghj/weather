import axios from "axios";

const baseURL = "https://api.openweathermap.org/data/2.5/onecall";

export const getWeather = (lat, lon, appid, units) => async dispatch => {
  const res = await axios.get(baseURL, {
    params: {
      lat,
      lon,
      appid,
      units,
    },
  });

  dispatch({ type: "GET_WEATHER", payload: res.data });
};
