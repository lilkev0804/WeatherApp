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
    flex-wrap: wrap;
    
`
const InfoSupBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    text-align : center;
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
            img :'img/humidity.svg',
            indicator : "%",
            value :`${props.humidity}`
        },
        {
            name : "Pression Atmospherique",
            img :'img/pressure.svg',
            indicator : "HPA",
            value :`${props.pressure}`
        },
        {
            name : "Vitesse du vent",
            img :'img/wind.svg',
            indicator : "km / h",
            value :`${props.wind}`
        },
        {
            name : "Lever",
            img :'img/sunrise.svg',
            indicator : "AM",
            value :`${props.sunrise}`
        },
        {
            name : "Coucher",
            img :'img/sunset.svg',
            indicator : "PM",
            value :`${props.sunset}`
        }
    ] 
    return (
        <InfoElement>
            <Infoelementtitle>
             <div>
                {props.city} - 
                <Hours> {props.hours}</Hours>
             </div>
             <Img src={`img/${props.img}.svg`}></Img> 
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