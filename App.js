import axios from 'axios';
import {useState} from 'react';
import './App.css';

function App() {
  const[data,setData]=useState({})
  const[location,setLocation]=useState('')
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8c22a771244f581bd5c9ae454738e510&units=metric`;
  const searchLocation=(event)=>{
    if(event.key==='Enter'){
      axios.get(url).then((response)=>{
      setData(response.data)
      console.log(response.data)
    })
  }
    
  }
  return (
    <div className="app">
      <div className='Search'>
        <br/>
        <input type="text" value={location} onChange={event=>setLocation(event.target.value)} onKeyPress={searchLocation} placeholder='Enter Location...' ></input>
      </div>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temperature'>
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className='description'>
          {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

        </div>
        <div className='bottom'>
          <div className='feels'>
          {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
            <p>Feels like</p>
          </div>
          <div className='humidity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className='wind'>
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} KMPH</p> : null}
            <p>Wind speed</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
