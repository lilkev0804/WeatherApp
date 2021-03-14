import React from "react";
import { infoWeatherEl } from "../components/infoWeatherEl";
import {Link} from "react-router-dom"
import "./TopWeather.css";
export default function TopWeather(props) {



  
  return (
    <div className="TopWeather" style={{display:`${props.visible}`}}>
      <div className="Principal-info">
        <img className="logo-actual-weather" src={`img/${props.icon}.svg`} alt="icone de la meteo"></img>
        <p>{props.description}</p>
        <p>{props.city}</p>
        <p>{props.temp} °C </p>
        <Link to="/">Changer de ville </Link>
      </div>
      <div className="Precise-info">
        {infoWeatherEl.map((info, index) => (
          <div className="block-info-supp" key={index}>
            <img className="logo-info-weather" alt="logo de la météo" src={`img/${info.logo}`}></img>
            <div className="sub-info-supp">
                <p>{info.name}</p>
                <p>{info.name === "Pression" ? `${props.pressure}` : `${info.name === "Ressenti" ? `${props.feels_like} °C` : `${info.name === "Humidité" ? `${props.humidity} %` : `${props.wind} Km/H`}`}` }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
