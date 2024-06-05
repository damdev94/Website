import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import '../css/components/layout.scss'
import damdevLogo from '../images/logo-transparent-png.png'

function Layout() {

  const location = useLocation()
  return (
    <div className='layout'>
      <div className="sidebar">
        <div className="title">
          <img src={damdevLogo} alt='damdev' width='130px'></img>
        </div>
        <div className="link-list">

            <Link to='/' className={location.pathname === "/" ? "active" : ""}>BIENVENUE</Link>
            <Link to='/technologies' className={location.pathname === "/technologies" ? "active" : ""}>TECHNOLOGIES</Link>
            <Link to='/folio' className={location.pathname === "/folio" ? "active" : ""}>PORTFOLIO</Link>
            <Link to='/apropos' className={location.pathname === "/apropos" ? "active" : ""}>À PROPOS</Link>
            <Link to='/contact' className={location.pathname === "/contact" ? "active" : ""}>CONTACT</Link>

        </div>
      </div>
      <div className="content">
      <Outlet />
      </div>
    </div>
  )
}

export default Layout
