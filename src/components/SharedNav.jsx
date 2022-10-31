import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const SharedNav = () => {
  return (
    <>
        <nav>
            <div>
                <NavLink to='/'>Home</NavLink>
            </div>
            <div>
                <NavLink to='/repository'> Repository</NavLink>
            </div>
        </nav>

        <Outlet />
    </>
  )
}

export default SharedNav