import React from 'react';
import WeatherIcon from './icons';

       
const Weather = (props) => {
    return (
        <div className = "info">
            <WeatherIcon className="weather-icon" weatherCondition = {props.condition} />  
            <h1 className="city">{props.city} , {props.country}</h1>
            <p className="desc">{props.description}</p>
            <p className="temp">{Math.floor(props.temperature)}°C</p>
        </div>
    )
    
}       
       
export default Weather;
       