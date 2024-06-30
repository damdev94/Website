import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import '../css/components/layout.scss'
import damdevLogo from '../images/Damien1.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

function Layout() {

  const location = useLocation()

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='layout'>
      <div className='burger'>
      {isSidebarOpen ? (
        <FontAwesomeIcon icon={faXmark} onClick={toggleSidebar}/>
      ) :
        <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} />
      }
      </div>
      <div className={`sidebar ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <div className="title">
          <img src={damdevLogo} alt='damdev' width='130px'></img>
        </div>
        <div className="link-list">

            <Link
              to='/'
              className={location.pathname === "/" ? "active" : ""}
              onClick={() => setIsSidebarOpen(false)}>BIENVENUE
            </Link>

            <Link
              to='/technologies'
              className={location.pathname === "/technologies" ? "active" : ""}
              onClick={() => setIsSidebarOpen(false)}>TECHNOLOGIES
            </Link>

            <Link
              to='/folio'
              className={location.pathname === "/folio" ? "active" : ""}
              onClick={() => setIsSidebarOpen(false)}>PORTFOLIO
            </Link>

            <Link
              to='/apropos'
              className={location.pathname === "/apropos" ? "active" : ""}
              onClick={() => setIsSidebarOpen(false)}>À PROPOS
            </Link>

            <Link
              to='/contact'
              className={location.pathname === "/contact" ? "active" : ""}
              onClick={() => setIsSidebarOpen(false)}>CONTACT
            </Link>

        </div>
      </div>
      <div className="content">
      <Outlet />
      </div>
    </div>
  )
}

export default Layout
