import React, {useState} from 'react'
import {fechtWeather} from '../api'
import InfoWeather from './InfoWeather'
import GeneralInformation from './GeneralInfo'
import styled from 'styled-components'
import axios from 'axios'

import'./Form.css'



const Form = () => {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState('')
    const [img, setImg] = useState('')
    const [bg, setBg] = useState('')
    const [lang, setLang] = useState('')
    const [hours, setHours] = useState('')
    const [instruction, setInstruction] = useState('Choisissez votre ville')


    const search = async () => {
            const data = await fechtWeather(query, lang)
            const hour = await axios.get(`http://worldtimeapi.org/api/ip`)
            setHours(hour.data.datetime.substring(11, hour.data.datetime.length-16).replace(':' , "h"))
            setWeather(data)
            setQuery('')
            setLang('')
            setInstruction('Une nouvelle recherche ? ')
            setImg(data.weather[0].icon)
            setBg(data.weather[0].icon)
    }

    
    const changeBackgound = () => {
        if(bg.includes('04')){
            if(bg.includes('d')){
                const cloud = "https://images.unsplash.com/uploads/14122598319144c6eac10/5f8e7ade?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1514&q=80"
                return cloud
            }else{
                const cloud ="https://images.unsplash.com/photo-1573328708455-0969ec5b0efa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                return cloud
            }
        }else if( bg.includes('13')){
            if(bg.includes('d')){
                const snow = "https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                return snow
            }else {
                const snow = "https://images.unsplash.com/photo-1610830554426-f78b1ae49460?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
               return snow
            }
        }else if( bg.includes('50')){
            if(bg.includes('d')){
                const mist = "https://images.unsplash.com/photo-1543857326-7a8689de7c42?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1490&q=80"
                return mist
            }else{
                const mist = "https://images.unsplash.com/photo-1516714227952-3ae334ce2f37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                return mist
            }
           
        }else if( bg.includes('01')){
            if(bg.includes('d')){
                const sun = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                return sun
            }else{
                const sun = "https://images.unsplash.com/photo-1604083142449-79b1babd12d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                return sun
            }
        }else if( bg.includes("03")){
            if(bg.includes('d')){
                const cloudSimple = "https://images.unsplash.com/photo-1569428034239-f9565e32e224?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1358&q=80"
                return cloudSimple
            }else{
                const cloudSimple = "https://images.unsplash.com/photo-1510650499-08d11de6119e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            return cloudSimple
            }
        }else if( bg.includes('09')){
            if(bg.includes('d')){
                const rain = "https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1347&q=80"
                return rain
            }else{
                const rain = "https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
                return rain
            }
            
        }else if(bg.includes("10")){
             if( bg.includes('d')){
                const sunRain = "https://images.unsplash.com/photo-1475917446375-09326db30f7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                return sunRain
             }else{
                const sunRain = "https://unsplash.com/photos/FGjR4IGwP7U"
                return sunRain
             }
        }else{ 
            const lambda = "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            return lambda
        }
    }
    
   const Back = styled.div`
        width:100%;
        min-height:100vh;
        background-image: url(${changeBackgound}) ;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        z-index:-100;
        position:absolute;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
   `




    return (
        
        <>
            <div className="Form">
                <p>{instruction}</p>
                <div className="FormInput">
                    <input 
                        className="inputCity"
                        type="text" 
                        value={query} 
                        onChange={(e)=> setQuery(e.target.value)} 
                        placeholder="Votre ville" required>
                    </input>
                    <input
                        className="inputCountry"
                        value={lang} 
                        onChange={(e)=> setLang(e.target.value)} 
                        type="text" 
                        placeholder="Ex : FR , US , etc ..." required>
                    </input>
                    <button
                        className="btnLaunch"
                        onClick={search}> Envoyer
                    </button>
                </div>
            </div >
        <Back>  
            
            {weather.main && (
                    <GeneralInformation 
                    city= {weather.name}
                    hours = {hours}
                    img = {img}
                    temp ={weather.main.temp}
                    ></GeneralInformation>
            )}
            
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
                    ></InfoWeather>
                )}
        </Back>
        </>
    )
}

export default Form 




