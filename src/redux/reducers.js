import { actionTypes } from "./action";

const initialState = {
  weather: [],
  succes: false,
  loading: false,
  error: false,
};

export const reducerWeather = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_WEATHER:
      return {
        ...state,
        weather: [],
        succes: false,
        loading: true,
        error: false,
      };
    case actionTypes.SET_WEATHER_SUCCES:
      return {
        ...state,
        weather: action.payload,
        succes: true,
        loading: true,
        error: false,
      };
    case actionTypes.SET_WEATHER_ERROR:
      return {
        ...state,
        error: true,
      };
      default:
        return state;
  }
};
