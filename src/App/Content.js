import React, { useState } from 'react'

function Content(props) {
  const [name, setName] = useState('') 
  const [item, setItem] = useState('Loaves')
  const [weather, setWeather] = useState(null)

  return (
    <div style={{backgroundColor: props.color}}>
      <h1>{props.title}</h1>
      <h2>{name}</h2>
      <h3>{item}</h3>
      <div>

        <input 
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
        />

        <select
          value={item}
          onChange={(e) => {
            setItem(e.target.value)
          }}
        >
          <option>Fritters</option>
          <option>Loaves</option>
          <option>Patissiere</option>
        </select>

        <button
          onClick={() => {
            const baseURL = 'https://api.openweathermap.org/data/2.5/weather'
            const appid = '467355df4c808dd6134a3b64e9ace282'
            const path = `${baseURL}?q=${name}&appid=${appid}&unit=imperial`
            fetch(path)
            .then(res => res.json())
            .then(json => {
              console.log(json)
              setWeather(json)
            }).catch(err => {
              console.log(err.message)
            })
          }}
        >Get Weather!</button>

        <div>
          {weather ? 
          <p>{weather.main.temp}</p> : 
          <p>Loading</p>}
        </div>
      </div>
    </div>
  )
} 

export default Content