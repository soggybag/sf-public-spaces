import React from 'react'

function Content(props) {
  return (
    <div style={{backgroundColor: props.color}}>
      <h1>{props.title}</h1>
    </div>
  )
} 

export default Content