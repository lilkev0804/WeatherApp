import React, { useState } from "react";
import { fechtCity } from "../api";
import { Link } from "react-router-dom";

export default function Form() {
  const [message, setmessage] = useState("Choissiez votre ville");
  const [cityName, setCityName] = useState("Rouen");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const handleChange = async (e) => {
      setCityName(e.target.value)
    const mycity = await fechtCity(cityName);
    setLat(mycity.results[0].geometry.lat);
    setLong(mycity.results[0].geometry.lng);
  };

  console.log(lat+" - " +long)

  return (
    <div>
      <div className="Form">
        <h2>{message}</h2>
        <input
          type="text"
          value={cityName}
          onChange={handleChange}
        ></input>
        
        <Link  to={`/${lat}-${long}`}>
          Go
        </Link>
      </div>
    </div>
  );
}
