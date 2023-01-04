import { useDispatch } from "react-redux"
import { increment,decrement } from "../state/slice/counterSlice"
import { useSelector } from "react-redux"

const TestError = () => {
  const counter = useSelector((state) => state.counter.value)
  console.log(counter)

  const dispatch = useDispatch()



  const handleIncrement = () => dispatch(increment())
  const handleDecrement = () => dispatch(decrement())

    if(counter >= 5 || counter < 0){
        throw new Error('Oh!!! Sorry Dear, I crashed 😭😭😭')
    }

  return (
    <section className='section-container'>
       <h1 className='header' data-aos='fade-up' data-aos-duration='8000'>Test Error Boundary</h1>
       <div className='counter'  data-aos='fade-right' data-aos-duration='8000'>
           <button className='btn-count' onClick={handleDecrement}>-</button>
            <div className='count'>{counter}</div>
            <button className='btn-count' onClick={handleIncrement}>+</button>
       </div>
       <div className='note'  data-aos='fade-left' data-aos-duration='8000'>
            <strong>
             <em>Note!!!</em>
            </strong>
           <p>When the counter is greater than or equal to 5 or less than 0, it triggers an error...</p>
       </div>
    </section>
  )
}

export default TestError