import React from 'react'
import styled from 'styled-components'

const Info_element = styled.div`
    color:white;
    max-width:400px;
    witdh:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:50px;
    cursor: none;
`
const Infoelementtitle = styled.div`
    color: white;
    text-align:center;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 800;
    font-size:3rem;
`
const Img = styled.img`
    objectif-fit:contain;
    width: 200px;
`
const LineItems = styled.span`
    font-weight: 800;
`
const Hours = styled.span`
    font-size:20px;
`


function InfoWeather(props) {
    return (
        <Info_element>
            <Infoelementtitle>{props.city}
             <Img src={`img/${props.img}.svg`}></Img> 
             <Hours>{props.hours}</Hours>
             </Infoelementtitle>
            <p><LineItems>Température</LineItems> : {props.temp} °C</p>
            <p><LineItems>Ressenti</LineItems> : {props.ressenti} °C</p>
            <p><LineItems>Température Min</LineItems> : {props.tempmin} °C</p>
            <p><LineItems>Température Max</LineItems> : {props.tempmax} °C</p>
            <p><LineItems>Taux d'humidité </LineItems>: {props.humidity} %</p>
            <p><LineItems>Pression</LineItems> : {props.pressure} HPA </p>
            <p><LineItems>Vitesse du vent</LineItems> : {props.wind} km / h</p>
        </Info_element>
    )
}

export default InfoWeather


