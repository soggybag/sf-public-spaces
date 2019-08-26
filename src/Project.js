import React from 'react'
import './Project.css'

function Project({ image, title, link }) {
  return (
    <div className="Project">
      <img src={image} width="300" height="200" />
      <h3>{title}</h3>
      <a href={link}>Link to project</a>
    </div>
  ) 
}

export default Project