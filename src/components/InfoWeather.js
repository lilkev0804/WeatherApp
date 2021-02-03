import React from 'react'
import styled from 'styled-components'

const Info_element = styled.div`
    color:white;
    width:400px;
    height: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Info_element_title = styled.h1`
    text-align: center
`

function InfoWeather(props) {
    return (
        <Info_element>
            <Info_element_title>{props.city} </Info_element_title>
            <p>Température : {props.temp} °C</p>
            <p>Ressenti : {props.ressenti} °C</p>
            <p>Température Min : {props.tempmin} °C</p>
            <p>Température Max : {props.tempmax} °C</p>
            <p>Taux d'humidité : {props.humidity} %</p>
            <img src={`http://openweathermap.org/img/wn/${props.img}.png`}></img>
        </Info_element>
    )
}

export default InfoWeather