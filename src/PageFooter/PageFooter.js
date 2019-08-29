import React from 'react'
import './PageFooter.css'

function PageFooter(props) {
  const year = new Date().getFullYear()
  return (
    <div className="PageFooter">
      Mitchell Hudson copyright {year}
    </div>
  )
} 

export default PageFooter