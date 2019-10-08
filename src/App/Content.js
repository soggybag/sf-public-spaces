import React, { useState } from 'react'

function Content(props) {
  const [name, setName] = useState('') 
  const [item, setItem] = useState('Loaves')

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
      </div>
    </div>
  )
} 

export default Content