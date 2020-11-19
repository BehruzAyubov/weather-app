import React from 'react';

const condition ={
    'name' : {
        'Clear' : 'http://openweathermap.org/img/wn/01d@2x.png',
        'Snow' : 'http://openweathermap.org/img/wn/13d@2x.png',
        'Thunderstorm':  'http://openweathermap.org/img/wn/11d@2x.png',
        'Rain': 'http://openweathermap.org/img/wn/10d@2x.png',
        'Mist': 'http://openweathermap.org/img/wn/50d@2x.png',
        'Drizzle':'http://openweathermap.org/img/wn/09d@2x.png',
        'Clouds': 'http://openweathermap.org/img/wn/02d@2x.png' 
    }
}

const WeatherIcon  = (props) => {
    return <img src ={condition.name[props.weatherCondition]} alt='' />
}

export default WeatherIcon;