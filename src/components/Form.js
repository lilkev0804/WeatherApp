import React, {useState} from 'react'
import {fechtWeather} from '../api'
import InfoWeather from './InfoWeather'
import Image from './Image'
import './Form.css'


const Form = () => {

    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState('')
 
    const search = async (e) => {
        if(e.key === "Enter"){
            const data = await fechtWeather(query)
            // console.log(data)
            setWeather(data)
            setQuery('')
        }
    }
    return (
        <>
        <Image></Image>
        <div className="Form_container">
            <div className="input">
            <p className="Form_title">Configurez votre recherche</p>
            <div className="Form_element">
                <input type="text" value={query} onChange={(e)=> setQuery(e.target.value)} onKeyPress={search} placeholder="Votre ville"></input>
            </div>
            </div >
             {weather.main && (
                 <InfoWeather 
                    city= {weather.name}
                    temp ={weather.main.temp}
                    ressenti ={weather.main.feels_like}
                    humidity ={weather.main.humidity}
                    tempmin ={weather.main.temp_min}
                    tempmax ={weather.main.temp_max}
                    img = {weather.weather.[0].icon}
                 ></InfoWeather>
             )}
        </div>
        </>
        
    )
}

export default Form 


