import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Solution = () => {
  return (
    <section className='section-container'>
        <div className='solution-nav'>
            <div>
                <Link to='/solution/repository' className='nav-link'>Repository</Link>
            </div>
            <div>
                <Link to='/solution/error-boundary' className='nav-link'>Error Boundary</Link>
            </div>
        </div>
        <Outlet />
    </section>
  )
}

export default Solution