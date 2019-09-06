import React from 'react'
import { Link } from 'react-router-dom'
import './PageHeader.css'

function PageHeader() {
  return (
    <div className="PageHeader">
      <header>
        <h1 className="page-title">SF Public Spaces</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/a">AAA</Link>
          <Link to="/b">BBB</Link>
          <Link to="/c">CCC</Link>
        </div>
      </header>
    </div>
  )
}

export default PageHeader