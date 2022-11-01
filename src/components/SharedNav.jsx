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
                <NavLink to='/solution/repository'> Solution</NavLink>
            </div>
        </nav>

        <Outlet />
    </>
  )
}

export default SharedNav