import React from 'react'
import { Link } from 'react-router-dom'
import './PageHeader.css'

function PageHeader() {
  return (
    <div className="PageHeader">
      <header>
        <h1 className="page-title">SF Public Spaces</h1>
        <div>
          <Link className="PageHeader-link" to="/">Home</Link>
          <Link className="PageHeader-link" to="/a">AAA</Link>
          <Link className="PageHeader-link" to="/b">BBB</Link>
          <Link className="PageHeader-link" to="/c">CCC</Link>
        </div>
      </header>
    </div>
  )
}

export default PageHeader