import React from 'react'
import './PublicSpaceView.css'

function PublicSpaceView({ image, title, link }) {
  return (
    <div className="PublicSpaceView">
      <div className="PublicSpaceView-image-container">
        <img 
          className="PublicSpaceView-image-container--img"
          src={`${process.env.PUBLIC_URL}${image}`} 
          width="300" 
          height="200" />
      </div>
      <h3>{title}</h3>
      <a href={link}>Link to project</a>
    </div>
  ) 
}

export default PublicSpaceView