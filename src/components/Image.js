import React from 'react'
import styled from 'styled-components'



const changeBackgound = () => {
        if(hour >= 18 ){
            const nightBg = "https://images.unsplash.com/photo-1479267658415-ff274a213280?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            return nightBg
        }else{
            const dayBg = "https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1347&q=80"
            return dayBg
        }
}

// creeanau horaire

const Image_background = styled.div`
    background-image: url(${changeBackgound});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 100vh;
    z-index: -1;
    position: relative;
`
const DateHour = styled.div`
    width: 300px;
    height: 170px;
    background-color: rgba(255, 255, 255, 0.08);
    position: absolute;
    top: 0rem;
    left: 0rem;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    z-index: 10;
`
const Timer = styled.p`
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`

var date = new Date();
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



export default function Image() {
    return (
        <Image_background>
            <DateHour>  
               <Timer>
                   {heure} <br></br>
                   {jour}
                </Timer>
            </DateHour>
        </Image_background>
    )
}
