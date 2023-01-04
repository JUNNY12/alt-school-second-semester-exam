import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const SharedSolutionNav = () => {
  return (
    <section className='section-container'>
        <div className='solution-nav'>
            <div>
                <NavLink to='repository' className={({isActive}) => isActive? "active nav-link" : "nav-link" } end>Repository</NavLink>
            </div>
            <div>
                <NavLink to='error-boundary' className={({isActive}) => isActive? "active nav-link" : "nav-link"} end>Error Boundary</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive? "active nav-link" : "nav-link" } end to='/help'>Not Found</NavLink>
            </div>
        </div>
        <Outlet />
    </section>
  )
}

export default SharedSolutionNav