import { combineReducers } from "redux";

const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_WEATHER":
      return { ...state, data: action.payload }; // TODO: change this so store is one object (currently nested as state > weather > weather i think)
    default:
      return state;
  }
};

export default combineReducers({
  weatherReducer,
});
