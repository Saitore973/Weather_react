import React from "react";
import "./Weather.css"
export default function Weather(){
    return (
        <div>
            <div className="row">
          <div className="col-md-2">
          <img className="img-responsive" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="current "/>
          <span>17 </span> °C
          </div>
          <div className="col-md-2">
               <ul>
                   <li>
                       Precipitation: 2%
                   </li>
                   <li>
                       Humididty: 73%
                   </li>
                   <li>
                       Wind: 6 Km/hr
                   </li>
               </ul>
                   
            
          </div>

          <div className="col-md-4">

          </div>
           <div className="col-md-4">
            <h1>
                New york, NY, USA
            </h1>
            <ul>
                <li>
                    Sunday 04:00 PM
                </li>
                <li>
                    Clear
                </li>
            </ul>
           </div>

      </div>
            
        </div>
    )
}