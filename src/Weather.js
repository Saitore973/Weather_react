import React from "react";
import "./Weather.css"
export default function Weather(){
    return (
        <div>
            <form>
                <input type="text" />
                <input type="submit" value="Search" />
            </form> <br /> <br />
            <div className="row">
          <div className="col-md-2">
          <img className="img-responsive" src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="current "/>
          <span className="celcious">17°<span className="fahrenheit">c</span></span> 
          </div>
          <div className="col-md-2 prec">
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
            <ul className="day">
                <li>
                    Sunday 04:00 PM
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
}