import React, { Component } from 'react';
import './style.css';
import Weather from './components/weather';
import Form from './components/form';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      city : undefined,
      country : undefined,
      temperature  : undefined,
      description : undefined,
      condition : undefined
    }
  }

  inti(){
    console.log('hellow')
  }
  getWeather = (e)=> {
    e.preventDefault();

    const name = e.target.elements.city.value;
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+name+'&units=metric&appid=8aaa5f851426a097330057b85d8341ce';
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({
       city : data.name,
       country : data.sys.country,
       temperature : data.main.temp,
       description : data.weather[0].description,
       condition : data.weather[0].main
      })
    })
    .catch(err => {
      alert('Wrong city name!');

    }
  )

  }
      
  render(){
    return (
      <div>
        <Form getWeather = {this.getWeather} />
        <Weather   
          city = {this.state.city}
          country = {this.state.country}
          temperature = {this.state.temperature} 
          description = {this.state.description} 
          condition  = {this.state.condition}
        />        
      </div>
    )
  }
}


export default App;
