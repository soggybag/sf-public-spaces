import React from 'react'

function PublicSpaceViewDetails(props) {
  // Get props passed through Link
  const { title, imageSrc, desc } = props.location.state

  return (
    <div className="PublicSpaceViewDetails">
      <h1>{title}</h1>
      <div className="PublicSpaceViewDetails--img__container">
        <img 
          alt={title}
          src={imageSrc}
        />
        <div className="PublicSpaceViewDetails--desc__container">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  )
} 

export default PublicSpaceViewDetails