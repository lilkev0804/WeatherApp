import axios from 'axios'

    const API_KEY = "5f54bb751d2405533b404aa32960cba9"
    const URL = "https://api.openweathermap.org/data/2.5/onecall?"

 export const fechtWeatherSpe = async (lat ,long) => {
    const {data} = await axios.get(URL, {
       params:{
      lat: `${lat}`,
      lon : `${long}`,
      units: 'metric',
        APPID : API_KEY,
        exclude: 'minutely'
       }
    })
    return data
}
