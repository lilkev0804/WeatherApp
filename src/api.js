import axios from 'axios'

    const API_KEY = "5f54bb751d2405533b404aa32960cba9"
    const URL = "https://api.openweathermap.org/data/2.5/weather?"

 export const fechtWeather = async (query ,lang) => {
      const {data} = await axios.get(URL, {
       params:{
         q:`${query},${lang}`,
         units: 'metric',
         APPID : API_KEY
       }
    })
    return data
}




