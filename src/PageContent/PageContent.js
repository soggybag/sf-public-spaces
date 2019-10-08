import React from 'react'
import PublicSpaceView from './PublicSpaceView/PublicSpaceView'
import data from '../project-data'
import './PageContent.css'

function PageContent() {
  const publicSpaces = data.map(({title, desc, images, features}, i) => {
    return (
      <PublicSpaceView 
        key={`${title}-${i}`}
        index={i}
        title={title}
        desc={desc}
        image={`/images/${images[0]}`}
        features={features}
      />
    )
  })

  // componentDidMount() {
  //   fetch('').then((res) => {
  //     return res.json()
  //   }).then((json) => {
  //     json.map()
  //   })
  // }
  
  return (
    <div className="PageContent">
      {publicSpaces}
    </div>
  )
}

export default PageContent