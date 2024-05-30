import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../css/components/layout.scss'

function Layout() {
  return (
    <div className='layout'>
      <div className="sidebar">
        <div className="title">
          <h1>DAMDEV</h1>
        </div>
        <div className="link-list">

            <Link>BIENVENUE</Link>
            <Link>TECHNOLOGIES</Link>
            <Link>PORTFOLIO</Link>
            <Link>À PROPOS</Link>
            <Link>CONTACT</Link>

        </div>
      </div>
      <div className="content">
      <Outlet />
      </div>
    </div>
  )
}

export default Layout
