import React from 'react'
import styled from 'styled-components'



export default function Timer() {

    const Timer = styled.p`
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    `

    let date = new Date();
    let hour = date.getHours();
    hour = ( hour < 10 ? "0" : "") + hour
    let min = date.getMinutes()
    min = (min < 10 ? "0" : "") + min
    let year = date.getFullYear()
    let day = date.getDate()
    day = ( day < 10 ? "0" : "") + day
    let month = date.getMonth() + 1
    month = (month < 10 ? "0" : "") + month
    const heure = hour + " : " + min
    const jour = day + " / " + month + " / " + year

    return (

               <Timer>
                   {heure} <br></br>
                   {jour}
                </Timer>

    )
}
