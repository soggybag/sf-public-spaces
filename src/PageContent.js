import React from 'react'
import Project from './Project'
import './PageContent.css'

function PageContent() {
  return (
    <div className="PageContent">
      <Project title="Tetris Dots" image="/images/kitten-0.jpeg" link="#" />
      <Project title="Zombie Server" image="/images/kitten-1.jpeg" link="#" />
      <Project title="Amazing Colors" image="/images/kitten-2.jpeg" link="#" />
      <Project title="Flip Toggle" image="/images/kitten-3.jpeg" link="#" />
      <Project title="121 Second St" image="/images/kitten-4.jpeg" link="#" />
      <Project title="Slide Shows" image="/images/kitten-5.jpeg" link="#" />
    </div>
  )
}

export default PageContent