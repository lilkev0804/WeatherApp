import React from 'react'
import styled from 'styled-components'


const InfoSup = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2); 
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
const InfoSupTitle = styled.h3`
    color : white;
` 
const InfSupCheckBoxContainer = styled.div`
    
`
const InfoSupCard = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    width: 100%;
`



function InfoWeather(props) {

    const ButtonChange = styled.button`
    background-color:white;
    padding: 8px 16px;
    border: 1px solid white;
    border-radius: 20px;
    display :${props.showBtn ? "none" : "block"}
`

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
                <InfoSupTitle>Méteo du jour</InfoSupTitle>
                <InfSupCheckBoxContainer>
                    <ButtonChange onClick={props.handle} >Prévision sur 7 jours</ButtonChange>
                
                </InfSupCheckBoxContainer>
                <InfoSupCard>
                {informations.map((information , i) => (
                    <InfoSupBox key={i}>
                        <p>{information.name}</p>
                        <ImgWeather  alt={`logo ${information.name}`} src={information.img}></ImgWeather>
                        <p> {information.value} {information.indicator} </p>
                    </InfoSupBox>
                ))}
                </InfoSupCard>
                    
            </InfoSup>
    )
}

export default InfoWeather