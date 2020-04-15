import axios from "axios";

const KEY = "18a487f3c48a11617bfc4d5e60ff4dc8";
let unit = "metric";

let lat;
let lon;

export default axios.create({
  // baseURL: `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid=${KEY}`,
  baseURL: `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${KEY}&units=${unit}`,
});

// Example API call:
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={YOUR API KEY}
// https://api.openweathermap.org/data/2.5/onecall?lat=53.205399&lon=1.152560&appid=18a487f3c48a11617bfc4d5e60ff4dc8&units=metric
