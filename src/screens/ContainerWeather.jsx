import React, { useEffect, useState } from "react";
import BottomWeather from "./BottomWeather";
import TopWeather from "./TopWeather";
import { fechtWeatherSpe } from "../apisuper";
import { fechtCity } from "../api";

import "./bg.css";

export default function ContainerWeather() {
  const [hourly, sethourly] = useState([]);
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [newcity, setNewCity] = useState("");
  const [cityName, setCityName] = useState();
  const [global, setGlobal] = useState("");
  const [weather, setWeather] = useState([]);

  const handleChange = async () => {
      
    const mycity = await fechtCity(cityName);
    setLat(mycity.results[0].geometry.lat);
    setLong(mycity.results[0].geometry.lng);
    console.log(mycity.results[0].geometry.lat);
    console.log(mycity.results[0].geometry.lng);
    const result = await fechtWeatherSpe(lat, long);
    sethourly(result.hourly);
    setGlobal(result.current);
    setWeather(result.current.weather[0]);
    setNewCity(cityName)
    // console.log(result.hourly)
  }

 
  return (
    <div className="myBg" style={{ backgroundColor: "white" }}>
      <div className="Form">
        <h2>Choisissez votre ville</h2>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        ></input>
        <button onClick={handleChange}>Go</button>
      </div>
      <TopWeather
        icon={weather.icon}
        description={weather.description}
        city={newcity}
        temp={global.temp}
        pressure={global.pressure}
        feels_like={global.feels_like}
        humidity={global.humidity}
        wind={global.wind_speed}
      ></TopWeather>
      <BottomWeather element={hourly}></BottomWeather>
    </div>
  );
}
