import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../../redux/action";
import useLocalStorage from "use-local-storage";

export default function Container(props) {
  const [weather, setWeather] = useState([]);
  const { t } = useTranslation();

  const [name, setName] = useLocalStorage("");

  // const dispatch = useDispatch()
  // const { weather } = useSelector((state) => state.weatherC)
  // console.log(weather)

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        props.cityName ? props.cityName : "Могилёв"
      }&appid=5dd4a8304505ca16394a78b5757fb857&units=metric`
    )
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          props.erorrDisabler();
          setName(props.cityName ? props.cityName : "Могилёв");
          return res;
        } else {
          let error = new Error("Город введён некоректно");
          error.response = res;
          setName(name);
          throw error;
        }
      })
      .then((res) => res.json())
      .then((data) => setWeather(data.list))
      .catch(() => {
        props.erorr();
      });
  }, [props.cityName]);

  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  
  return (
    <div className="container-text">
      <h1>{name}</h1>
      <div className="container">
        {weather.map((item, index) => {
          if (
            index === 0 ||
            index === 8 ||
            index === 16 ||
            index === 24 ||
            index === 32
          ) {
            return (
              <Card
                date={`${t(days[new Date(item.dt_txt).getDay()])}`}
                key={index}
                imgUrl={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                sky={`${t(item.weather[0]["description"])}`}
                windSpeed={item.wind.speed.toFixed(1)}
                procent={item.main.humidity}
                temp={Math.round(item.main.temp)}
                feels={Math.round(item.main.feels_like)}
                gust={item.wind.gust}
                deg={item.wind.deg}
                id={item.dt}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
