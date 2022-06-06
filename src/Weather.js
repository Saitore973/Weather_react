import React, {useState} from "react";
import axios from 'axios';
import "./Weather.css"

import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
    let [weatherData,setWeatherData] =useState({ready:false});
    let[city,setCity] = useState(props.defaultCity);
    
    function handleResponse(response) {
        console.log(response.data)
        setWeatherData({
            ready:true,
            temperature:response.data.main.temp,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
            date:new Date(response.data.dt * 1000),
            city: response.data.name,
            description:response.data.weather[0].description,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        })
        
    }

    function search(){
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    

      function handleCityChange(event) {
        setCity(event.target.value);
      }
    
    
    
    if (weatherData.ready){

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"  value={city}  onChange={handleCityChange}/>
                <input type="submit"/>
            </form> <br /> <br />

            <WeatherInfo data={weatherData}/>
            
            
        </div>
    )

    }else{
        search();
        
        return ("Loading weather")
       
        

           
        
    }

}