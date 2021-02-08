import React from 'react'
import styled from 'styled-components'


const InfoSup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: black;
    flex-wrap: wrap;
    align-self : end;
    
`
const InfoSupBox = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;
    justify-content: space-between;
    width: 150px;
    text-align : center;
    color: white;
`
const ImgWeather = styled.img`
    width : 50px;
    height: 50px;
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
        }
    ] 
    return (    
            <InfoSup>
                {informations.map((information , i) => (
                    <InfoSupBox key={i}>
                        <p>{information.name}</p>
                        <ImgWeather  alt={`logo ${information.name}`} src={information.img}></ImgWeather>
                        <p> {information.value} {information.indicator} </p>
                    </InfoSupBox>
                ))}
            </InfoSup>
    )
}

export default InfoWeather