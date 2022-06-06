import React from 'react';
import Currentdate from "./Currentdate"
export default function WeatherInfo(props){
    return(
        <div className="weather">
            <div className="row">
          <div className="col-md-2">
          {<img className="img-responsive" src={props.data.icon} alt="current "/>}
          <span className="celcious">{Math.round(props.data.temperature)}°<span className="fahrenheit">c</span></span> 
          </div>
          <div className="col-md-2 prec">
              
               <ul>
                   <li>
                       Precipitation: 2%
                   </li>
                   <li>
                       Humididty: {Math.round(props.data.humidity)}
                   </li>
                   <li>
                       Wind: {Math.round(props.data.wind)}
                   </li>
               </ul>
                   
            
          </div>

          <div className="col-md-4">

          </div>
           <div className="col-md-4">
            <h1>
               {props.data.city

               }
            </h1>
            <ul className="day">
                <li>
                    <Currentdate date={props.data.date}/>
                </li>
                <li>
                   {props.data.description}
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
}