import React, {useState} from "react";
import axios from 'axios';
import "./Weather.css"
import Currentdate from "./Currentdate"

export default function Weather(){
    let [weatherData,setWeatherData] =useState({ready:false});
    
    function handleResponse(response) {
        console.log(response.data)
        setWeatherData({
            ready:true,
            temperature:response.data.main.temp,
            wind:response.data.wind.speed,
            humidity:response.data.main.humidity,
            date:new Date(response.data.dt * 1000)
        })
        
    }

    
    if (weatherData.ready){

    return (
        <div>
            <form>
                <input type="text" />
                <input type="submit" value="Search" />
            </form> <br /> <br />
            <div className="row">
          <div className="col-md-2">
          <img className="img-responsive" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="current "/>
          <span className="celcious">{Math.round(weatherData.temperature)}°<span className="fahrenheit">c</span></span> 
          </div>
          <div className="col-md-2 prec">
               <ul>
                   <li>
                       Precipitation: 2%
                   </li>
                   <li>
                       Humididty: {Math.round(weatherData.humidity)}
                   </li>
                   <li>
                       Wind: {Math.round(weatherData.wind)}
                   </li>
               </ul>
                   
            
          </div>

          <div className="col-md-4">

          </div>
           <div className="col-md-4">
            <h1>
                New york, NY, USA
            </h1>
            <ul className="day">
                <li>
                    <Currentdate date={weatherData.date}/>
                </li>
                <li>
                    Clear
                </li>
            </ul>
           </div>

           </div>

           <div className="row">
               <div className="col-md-6">
                   <div className="row">
                       <div className="col-md-2">
                           <p>Temperature</p>
                       </div>
                       <div className="col-md-2">
                           <p>Precipitation</p>
                       </div>
                       <div className="col-md-2">
                           <p>Wind</p>
                       </div>
                   </div>

               </div>
               <div className="col-md-6">
                   
               </div>
           </div>

           <div className="row">
               <div className="col-md-2">
                   <h3>Mon</h3>
                   <img className="img-responsive" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="current "/>
                   <p>35°  17° </p>
               </div>
               <div className="col-md-2">
                   <h3>Tue</h3>
                   <img className="img-responsive" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="current "/>
                   <p>35°  17° </p>
               </div>
               <div className="col-md-2">
                   <h3>Wed</h3>
                   <img className="img-responsive" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="current "/>
                   <p>35°  17° </p>
               </div>
               <div className="col-md-2">
                   <h3>Thur</h3>
                   <img className="img-responsive" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="current "/>
                   <p>35°  17° </p>
               </div>
               <div className="col-md-2">
                   <h3>fri</h3>
                   <img className="img-responsive" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="current "/>
                   <p>35°  17° </p>
               </div>
               <div className="col-md-2">
                   <h3>Sat</h3>
                   <img className="img-responsive" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="current "/>
                   <p>35°  17° </p>
               </div>
           </div>
            
        </div>
    )

    }else{
        let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=${apiKey}`
        axios.get(apiUrl).then(handleResponse);

        return (
            "Loading weather"
        )
    }

}