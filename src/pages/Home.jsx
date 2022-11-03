import React from 'react'

const Home = () => {
  return (
    <section className='home-container'>
        <div className='home'>
            <h1 className='header'>Welcome On Board</h1>
            <p className='welcome'>
                Feel free to navigate to the <strong>solution</strong> <br />
                route to see my awesome solution to the exam question one
            </p>
            <div className='text-center'>
                <span>Student Id:</span>
                <span> ALT/SOE/022/2629</span>
            </div>

            <div className='gitLink'>
                <span> Github Link: </span>
                <a href="https://github.com/JUNNY12/alt-school-second-semester-exam" target={`_blank`} style={{fontSize:'1rem'}}> Click Here </a>
            </div>
        </div>
    </section>
  )
}

export default Home