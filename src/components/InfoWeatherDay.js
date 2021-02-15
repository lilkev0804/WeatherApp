import React from 'react'
import styled from 'styled-components'

export default function InfoWeatherDay(props) {

    const GeneralDayWeather = styled.div`
        widh:100%;
        background-color: black;
        display: flex;
        flex-wrap: wrap;
        align-item:center;
        justify-content: space-around;
        margin-top: 10px;
    `
    const BoxPerDay = styled.div`
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items:center;
        background-color: black;
        color:white;
    `



    return (
        <GeneralDayWeather>
                 <BoxPerDay >
                     <p>J+1</p>
                     <img src={`img/${props.dayOneImg}.svg`} alt="img meteo"></img>
                    <p>Température : {props.dayOneTemp} °C</p>
                    <p>Min : {props.dayOneMin} °C</p>
                    <p>Max :{props.dayOneMax} °C</p>
                </BoxPerDay>
                <BoxPerDay >
                     <p>J+2</p>
                     <img src={`img/${props.dayTwoImg}.svg`} alt="img meteo"></img>
                    <p>Température : {props.dayTwoTemp} °C</p>
                    <p>Min : {props.dayTwoMin} °C</p>
                    <p>Max :{props.dayTwoMax} °C</p>
                </BoxPerDay>
                <BoxPerDay >
                     <p>J+3</p>
                     <img src={`img/${props.dayThreeImg}.svg`} alt="img meteo"></img>
                    <p>Température : {props.dayThreeTemp} °C</p>
                    <p>Min : {props.dayThreeMin} °C</p>
                    <p>Max :{props.dayThreeMax} °C</p>
                </BoxPerDay>
                <BoxPerDay >
                     <p>J+4</p>
                     <img src={`img/${props.dayFourImg}.svg`} alt="img meteo"></img>
                    <p>Température : {props.dayFourTemp} °C</p>
                    <p>Min : {props.dayFourMin} °C</p>
                    <p>Max :{props.dayFourMax} °C</p>
                </BoxPerDay>
                <BoxPerDay >
                     <p>J+5</p>
                     <img src={`img/${props.dayFiveImg}.svg`} alt="img meteo"></img>
                    <p>Température : {props.dayFiveTemp} °C</p>
                    <p>Min : {props.dayFiveMin} °C</p>
                    <p>Max :{props.dayFiveMax} °C</p>
                </BoxPerDay>
                <BoxPerDay >
                     <p>J+6</p>
                     <img src={`img/${props.daySixImg}.svg`} alt="img meteo"></img>
                    <p>Température : {props.daySixTemp} °C</p>
                    <p>Min : {props.daySixMin} °C</p>
                    <p>Max :{props.daySixMax} °C</p>
                </BoxPerDay>
                <BoxPerDay >
                     <p>J+7</p>
                     <img src={`img/${props.daySevenImg}.svg`} alt="img meteo"></img>
                    <p>Température : {props.daySevenTemp} °C</p>
                    <p>Min : {props.daySevenMin} °C</p>
                    <p>Max :{props.daySevenMax} °C</p>
                </BoxPerDay>
            
        </GeneralDayWeather>
    )
}
