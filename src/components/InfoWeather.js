import React from 'react'
import styled from 'styled-components'

const InfoElement = styled.div`
    color:white;
    witdh:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top:50px;
`
const Infoelementtitle = styled.div`
    color: white;
    position: absolute;
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
const Hours = styled.span`
    font-size:3rem;
`
const InfoSup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom:0;
    background-color: rgba(0, 0, 0, 0.537);
    
`
const InfoSupBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
`
const ActualTemp = styled.p`
    color: white;
    margin-top:-5px;
    font-size: 2rem;
`



function InfoWeather(props) {
    const informations = [
        {
            name : "Temperature Min",
            img :'img/cold.svg',
            indicator : "°C",
            value :`${props.tempmin}`
        },
        {
            name : "Temperature Max",
            img :'img/hot.svg',
            indicator : "°C",
            value :`${props.tempmax}`
        },
        {
            name : "Ressenti",
            img :'img/hot.svg',
            indicator : "°C",
            value :`${props.ressenti}`
        },
        {
            name : "Humidité",
            img :'img/snow.svg',
            indicator : "%",
            value :`${props.humidity}`
        },
        {
            name : "Pression Atmospherique",
            img :'img/hot.svg',
            indicator : "HPA",
            value :`${props.pressure}`
        },
        {
            name : "Vitesse du vent",
            img :'img/wind.svg',
            indicator : "km / h",
            value :`${props.wind}`
        },
    ] 
    return (
        <InfoElement>
            <Infoelementtitle>
             <div>
                {props.city}
                <Img src={`img/${props.img}.svg`}></Img> 
                <Hours>{props.hours}</Hours>
             </div>
             <ActualTemp>{props.temp} °C</ActualTemp>
             </Infoelementtitle>
            
            <InfoSup>
                {informations.map((information , i) => (
                    <InfoSupBox key={i}>
                        <p>{information.name}</p>
                        <img className="img-weather-info" alt={`logo ${information.name}`} src={information.img}></img>
                        <p> {information.value} {information.indicator} </p>
                    </InfoSupBox>
                ))}
            </InfoSup>
        </InfoElement>
    )
}

export default InfoWeather


{/* <p><LineItems>Température</LineItems> : {props.temp} °C</p>
<p><LineItems>Ressenti</LineItems> : {props.ressenti} °C</p>
<p><img src="img/cold.svg"></img><LineItems>Température Min</LineItems> : {props.tempmin} °C</p>
<p><LineItems>Température Max</LineItems> : {props.tempmax} °C</p>
<p><LineItems>Taux d'humidité </LineItems>: {props.humidity} %</p>
<p><LineItems>Pression</LineItems> : {props.pressure} HPA </p>
<p><LineItems>Vitesse du vent</LineItems> : {props.wind} km / h</p> */}