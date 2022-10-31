import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className='section-container'>
        <div className='page-not-found'>
            <p> 404 Page Not Found</p>
            <div>
                <Link to='/'>
                    <button className='back-btn'>Back to home</button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default NotFound