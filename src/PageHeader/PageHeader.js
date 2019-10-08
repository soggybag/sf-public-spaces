import React from 'react'
import { NavLink } from 'react-router-dom'
import './PageHeader.css'

function PageHeader() {
  return (
    <div className="PageHeader">
      <header>
        <h1 className="page-title">SF Public Spaces</h1>
        <div>
          <NavLink to="/"  className="PageHeader-link" activeClassName="selected" >Home</NavLink>
          <NavLink to="/a" className="PageHeader-link" activeClassName="selected" >AAA</NavLink>
          <NavLink to="/b" className="PageHeader-link" activeClassName="selected" >BBB</NavLink>
          <NavLink to="/dashboard" className="PageHeader-link" activeClassName="selected" >Dashboard</NavLink>
          
        </div>
      </header>
    </div>
  )
}

export default PageHeader