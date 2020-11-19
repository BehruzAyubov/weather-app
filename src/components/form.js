import React from 'react';

const Form  = (props) =>{
    return (
        <form onSubmit = {props.getWeather} className ='header'>
            <input placeholder = 'Enter city' name = 'city' className = 'inputValue' />
            <button type = "submit" className ='button'>Submit</button>
        </form>
 )
}    

export default Form;
       
      