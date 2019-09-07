import React from 'react'
import { NavLink } from 'react-router-dom'
import './PageHeader.css'

function PageHeader() {
  return (
    <div className="PageHeader">
      <header>
        <h1 className="page-title">SF Public Spaces</h1>
        <div>
          <NavLink className="PageHeader-link" activeClassName="selected" exact to="/">Home</NavLink>
          <NavLink className="PageHeader-link" activeClassName="selected" exact to="/a">AAA</NavLink>
          <NavLink className="PageHeader-link" activeClassName="selected" exact to="/b">BBB</NavLink>
          <NavLink className="PageHeader-link" activeClassName="selected" exact to="/c">CCC</NavLink>
        </div>
      </header>
    </div>
  )
}

export default PageHeader