import React, {useState} from 'react'
import {fechtWeather} from '../api'
import InfoWeather from './InfoWeather'
import './Form.css'
import styled from 'styled-components'
import axios from 'axios'



const Form = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState('')
    const [img, setImg] = useState('')
    const [bg, setBg] = useState('')
    const [lang, setLang] = useState('')
    const [hours, setHours] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] = useState('')
    const [sunAndRise , setsunAndRise] = useState('')

    const search = async () => {
            const data = await fechtWeather(query, lang)
            const hour = await axios.get(`http://worldtimeapi.org/api/ip`)
            setHours(hour.data.datetime.substring(11, hour.data.datetime.length-16).replace(':' , "h"))
            setWeather(data)
            setLong(data.coord.lon)
            setLat(data.coord.lat)
            setQuery('')
            setLang('')
            setImg(data.weather[0].icon)
            setBg(data.weather[0].icon)
            const sunsetSunrise = await axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`)
            setsunAndRise(sunsetSunrise.data.results)
    }

    

    const changeBackgound = () => {
        if(bg === "04d" ){
            const cloud = "https://images.unsplash.com/photo-1590664950986-c592693310a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            return cloud
        }else if( bg === "13d"){
            const snow = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            return snow
        }else if( bg === "50d"){
            const mist = "https://images.unsplash.com/photo-1543857326-7a8689de7c42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
            return mist
        }else if( bg === "01d"){
            const sun = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
            return sun
        }else if( bg === "03d"){
            const cloudSimple = "https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1358&q=80"
            return cloudSimple
        }else if( bg === "09d"){
            const rain = "https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80"
            return rain
        }else if(bg === "10d"){
             const sunRain = "https://images.unsplash.com/photo-1475917446375-09326db30f7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
             return sunRain
        }else{ 
            const lambda = "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            return lambda
        }
    }
    

   const Back = styled.div`
        width:100%;
        height:100vh;
        background-image: url(${changeBackgound});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
   `

    const BtnValidate = styled.button`
        border-radius : 10px;
        background-color : white;
        border: 1px solid white;
        outline:none;
        padding: 5px 0px;
    `

    return (
        
        <>
        <Back></Back>
        <div className="Form_container">
            <div className="input">
                <p className="Form_title">Configurez votre recherche</p>
                <div className="Form_element">
                    <input className="Form_input" id="input_city" type="text" 
                    value={query} 
                    onChange={(e)=> setQuery(e.target.value)} 
                    placeholder="Votre ville">
                    </input>

                    <input className="Form_input" id="input_lang"
                    value={lang} 
                    onChange={(e)=> setLang(e.target.value)} 
                    type="text" 
                    placeholder="Votre pays">
                    </input>

                    <BtnValidate
                    onClick={search}> Envoyer
                    </BtnValidate>


                </div>
            <div>
                
            </div>

            </div >
             {weather.main && (
                 <InfoWeather 
                    hours = {hours}
                    city= {weather.name}
                    temp ={weather.main.temp}
                    ressenti ={weather.main.feels_like}
                    humidity ={weather.main.humidity}
                    tempmin ={weather.main.temp_min}
                    tempmax ={weather.main.temp_max}
                    img = {img}
                    pressure = {weather.main.pressure}
                    wind ={weather.wind.speed}
                    sunrise = {sunAndRise.sunrise}
                    sunset = {sunAndRise.sunset}
                 ></InfoWeather>
             )}
        </div>
        
       
        </>
    )
}

export default Form 




