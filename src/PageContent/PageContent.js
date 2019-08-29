import React from 'react'
import PublicSpaceView from './PublicSpaceView/PublicSpaceView'
import data from '../project-data'
import './PageContent.css'

function PageContent() {
  const publicSpaces = data.map(({title, desc, images}, i) => {
    return (
      <PublicSpaceView 
        title={title}
        desc={desc}
        image={`/images/${images[0]}`}
      />
    )
  })

  return (
    <div className="PageContent">
      {publicSpaces}
    </div>
  )
}

export default PageContent