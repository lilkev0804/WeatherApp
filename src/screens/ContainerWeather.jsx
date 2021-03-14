import React, { useEffect, useState } from "react";
import BottomWeather from "./BottomWeather";
import TopWeather from "./TopWeather";
import { fechtWeatherSpe } from "../apisuper";
import { fechtCity } from "../api";
import { useParams } from "react-router-dom";

import "./bg.css";

export default function ContainerWeather() {
  const [hourly, sethourly] = useState([]);

  const [newcity, setNewCity] = useState("");
  const [cityName, setCityName] = useState("paris");
  const [global, setGlobal] = useState("");
  const [weather, setWeather] = useState([]);
  const [visible, setVisible] = useState(true);

  let { lat, long } = useParams();

  console.log(lat + "- " + long);


  useEffect(() => {
    const catchData = async () => {
        const result = await fechtWeatherSpe(lat, long);
  sethourly(result.hourly);
  setGlobal(result.current);
  setWeather(result.current.weather[0]);
  setNewCity(cityName)
  setVisible(false)
    };
    catchData()
  },[]);

  return (
    <div className="myBg" >
      <TopWeather
        visible={visible ? "flex" : "flex"}
        icon={weather.icon}
        description={weather.description}
        city={newcity}
        temp={global.temp}
        pressure={global.pressure}
        feels_like={global.feels_like}
        humidity={global.humidity}
        wind={global.wind_speed}
      ></TopWeather>
      <BottomWeather
        visible={visible ? "flex" : "flex"}
        element={hourly}
      ></BottomWeather>
    </div>
  );
}
