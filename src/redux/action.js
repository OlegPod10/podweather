import axios from "axios";

export const actionTypes = {
  SET_WEATHER: "SET_WEATHER",
  SET_WEATHER_SUCCES: "SET_WEATHER_SUCCES",
  SET_WEATHER_ERROR: "SET_WEATHER_ERROR",
};

export const getWeather = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.SET_WEATHER,
    });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=minsk&appid=5dd4a8304505ca16394a78b5757fb857&units=metric`
      )
      .then((res) => {
        dispatch({
          type: actionTypes.SET_WEATHER_SUCCES,
          payload: res.data.list,
        });
      })
      .catch((err) => {
        console.log(err.message, err);
        dispatch({
          type: actionTypes.SET_WEATHER_ERROR,
          payload: err.message,
        });
      });
  };
};
