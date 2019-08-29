import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTree, faHome, faStar, faToilet } from '@fortawesome/free-solid-svg-icons'

import './PublicSpaceView.css'

function PublicSpaceView({ image, title, link }) {
  return (
    <div className="PublicSpaceView">
      <div className="PublicSpaceView-image-container">
        <img
          className="PublicSpaceView-image-container--img"
          alt={`${title} image`}
          src={`${process.env.PUBLIC_URL}${image}`} 
          width="300" 
          height="200" />
      </div>
      <h3>{title}</h3>
      <p>
        <a href={link}>Link to project</a>
      </p>
      <p>
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faHome} />
        <FontAwesomeIcon icon={faTree} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faToilet} />
      </p>
    </div>
  ) 
}

export default PublicSpaceView