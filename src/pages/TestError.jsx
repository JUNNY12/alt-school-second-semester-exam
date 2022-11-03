import React from 'react'
import { useState } from 'react'

const TestError = () => {

    const [counter, setCounter] = useState(0)

    const handleCount = () => {
        setCounter(prevCount => prevCount + 1)
    }
    if(counter === 5){
        throw new Error('Oh!!! Sorry Dear, I crashed 😭😭😭')
    }
  return (
    <section className='section-container'>
       <h1 className='header'>Test Error Boundary</h1>
       <div className='counter'>
            <div className='count'>{counter}</div>
            <button className='btn-count' onClick={handleCount}>+</button>
       </div>
       <div className='note'>
            <strong>
             <em>Note!!!</em>
            </strong>
           <p>When the counter gets to 5th count, it triggers an error...</p>
       </div>
    </section>
  )
}

export default TestError