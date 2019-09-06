import React from 'react'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTree, faHome, faStar, faToilet, faBolt } from '@fortawesome/free-solid-svg-icons'

import './PublicSpaceView.css'

function getFeatureIcons(features) {
  const icons = {
    coffee: <FontAwesomeIcon key='coffee' icon={faCoffee} />,
    indoors: <FontAwesomeIcon key='indoors' icon={faHome} />,
    outdoors: <FontAwesomeIcon key='outdoors' icon={faTree} />,
    art: <FontAwesomeIcon key='art' icon={faStar} />,
    toilet: <FontAwesomeIcon key='toilet' icon={faToilet} />,
    power: <FontAwesomeIcon key='power' icon={faBolt} />
  }
  
  return features.map(feature => icons[feature])
}

function PublicSpaceView(props) {
  const { image, title, features } = props
  return (
    <div 
      key={`${title}`} 
      className="PublicSpaceView">
      <div className="PublicSpaceView-image-container">
        <Link 
          to={{
            pathname:"/details",
            state: props // Pass props through Link
          }}
        >
        <img
          className="PublicSpaceView-image-container--img"
          alt={`${title}`}
          src={`${process.env.PUBLIC_URL}${image}`} 
          width="300" 
          height="200" />
        </Link>
      </div>
      <h3>{title}</h3>
      <p>
        {/* <a href={link}>Link to project</a> */}
      </p>
      <p>
        {getFeatureIcons(features)}
      </p>
    </div>
  ) 
}

export default PublicSpaceView