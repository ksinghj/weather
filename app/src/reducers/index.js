import { combineReducers } from "redux";

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  weatherReducer,
});
