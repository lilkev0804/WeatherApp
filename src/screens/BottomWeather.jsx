import React from "react";
import './BottomWeather.css'


export default function BottomWeather(props) {


    return (
        <div className="BottomWeather">
            <div className="slider-hourly">
            {props.element.map((hour, index) => (
                <div className="hourlycard" style={{
                    display : `${index >= 24 ? 'none' : "block"}`
                }}>
                    <p>h + {index + 1}</p>
                    <p>{hour.temp} °C</p>
                    <p>{hour.weather[0].description}</p>
                </div>
            ))}
            </div>
            
        </div>
    )
}
