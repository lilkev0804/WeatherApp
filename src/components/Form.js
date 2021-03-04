import React, {useState,useEffect} from 'react'
import {fechtWeatherSpe} from '../apisuper'
import {fechtWeather} from '../api'
import InfoWeather from './InfoWeather'
import InfoWeatherDay from './InfoWeatherDay'
import GeneralInformation from './GeneralInfo'
import styled from 'styled-components'

import'./Form.css'



const Form = () => {
    const [query, setQuery] = useState('')
    const [queryName, setQueryName] = useState('')
    const [lang, setLang] = useState('')
    const [generalWeather, setGeneralWeather] = useState('')
    const [weatherDay, setWeatherDay] = useState("")
    // const [weather, setWeather] = useState('')
    const [img, setImg] = useState('')
    const [bg, setBg] = useState('')
    const [lat, setLat] = useState('')
    const [long, setLong] =useState('')
    const [toggle, setToggle] = useState(false)
    const [instruction, setInstruction] = useState('Choisissez votre ville')
    
    const BlockForm = document.querySelector('.Form')

    const search = async () => {
        console.log('hello')
            const data = await fechtWeather(query, lang)
            setLat(data.coord.lat)
            setLong(data.coord.lon)
            const dataS = await fechtWeatherSpe(lat, long)
            setGeneralWeather(dataS)
            setImg(dataS.current.weather[0].icon)
            setBg(dataS.current.weather[0].icon)

            setLang('')
            setInstruction('Une nouvelle recherche ? ') 
            if(window.innerWidth < 918){
                BlockForm.style.top = "0%"
                BlockForm.style.transform = 'translateY(0)'
            }
            setQueryName(query)
            

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
    const handleChange = async() => {
        setToggle(!toggle)
        const dataS = await fechtWeatherSpe(lat, long)
        setWeatherDay(dataS.daily)
         BlockForm.style.top = "0px"
            BlockForm.style.transform = "translateY(0px)"
    }
    const closer = () => {
        setToggle(!toggle)
    }

    
   const Back = styled.div`
        width:100%;
        height:100vh;
        background-image: url(${changeBackgound}) ;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        z-index:-100;
        position:absolute;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
`
    const ContainerWeather = styled.div`
    background-color: rgba(0, 0, 0, 0.2); 
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
            
            {generalWeather && (
                    <GeneralInformation 
                    city= {queryName}
                    img = {img}
                    temp ={generalWeather.current.temp}
                    ></GeneralInformation>
            )} 
            
            <ContainerWeather>
            {generalWeather && (
                    <InfoWeather 
                        showBtn = {toggle}
                        handle= {handleChange}
                        city= {query}
                        ressenti ={generalWeather.current.feels_like}
                        humidity ={generalWeather.daily[0].humidity}
                        tempmin ={generalWeather.daily[0].temp.min}
                        tempmax ={generalWeather.daily[0].temp.max}
                        img = {img}
                        pressure = {generalWeather.current.pressure}
                        wind ={generalWeather.current.wind_speed}
                    ></InfoWeather>
            )}
            {weatherDay && (
                <InfoWeatherDay
                    toggle = {toggle}
                    close ={closer}
                    dayOneImg ={weatherDay[1].weather[0].icon}
                    dayOneTemp= {weatherDay[1].temp.day}
                    dayOneMin ={weatherDay[1].temp.min}
                    dayOneMax={weatherDay[1].temp.max}
                    dayTwoImg ={weatherDay[2].weather[0].icon}
                    dayTwoTemp= {weatherDay[2].temp.day}
                    dayTwoMin ={weatherDay[2].temp.min}
                    dayTwoMax={weatherDay[2].temp.max}
                    dayThreeImg ={weatherDay[3].weather[0].icon}
                    dayThreeTemp= {weatherDay[3].temp.day}
                    dayThreeMin ={weatherDay[3].temp.min}
                    dayThreeMax={weatherDay[3].temp.max}
                    dayFourImg ={weatherDay[4].weather[0].icon}
                    dayFourTemp= {weatherDay[4].temp.day}
                    dayFourMin ={weatherDay[4].temp.min}
                    dayFourMax={weatherDay[4].temp.max}
                    dayFiveImg ={weatherDay[5].weather[0].icon}
                    dayFiveTemp= {weatherDay[5].temp.day}
                    dayFiveMin ={weatherDay[5].temp.min}
                    dayFiveMax={weatherDay[5].temp.max}
                    daySixImg ={weatherDay[6].weather[0].icon}
                    daySixTemp= {weatherDay[6].temp.day}
                    daySixMin ={weatherDay[6].temp.min}
                    daySixMax={weatherDay[6].temp.max}
                    daySevenImg ={weatherDay[7].weather[0].icon}
                    daySevenTemp= {weatherDay[7].temp.day}
                    daySevenMin ={weatherDay[7].temp.min}
                    daySevenMax={weatherDay[7].temp.max}
                ></InfoWeatherDay>
            )}
            </ContainerWeather>
        </Back>
        
        </>
    )
}

export default Form 




