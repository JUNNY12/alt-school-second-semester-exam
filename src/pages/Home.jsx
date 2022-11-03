import React from 'react'

const Home = () => {
  return (
    <section className='home-container'>
        <div className='home'>
            <h1 className='header' data-aos='fade-right' data-aos-duration='8000'>Welcome On Board</h1>
            <p className='welcome' data-aos='fade-left' data-aos-duration='8000'>
                Feel free to navigate to the <strong>solution</strong> <br />
                route to see my awesome solution to the exam question one
            </p>
            <div className='text-center' data-aos='fade-up' data-aos-duration='8000'>
                <span>Student Id:</span>
                <span> ALT/SOE/022/2629</span>
            </div>

            <div className='gitLink' data-aos='fade-down' data-aos-duration='8000'>
                <span> Github Link: </span>
                <a href="https://github.com/JUNNY12/alt-school-second-semester-exam" target={`_blank`} style={{fontSize:'1rem'}}> Click Here </a>
            </div>
        </div>
    </section>
  )
}

export default Home