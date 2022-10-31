import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/dataContext'




const Repository = () => {

    const data = useContext(DataContext) 

  return (
    <section className='section-container' >
       <div className='repository'>
         <h1 className='header'>My Repository</h1>

         <div>
             <div className="card-container">
                 {
                     data?.map(({id, name , description}) =>{
                         return(
                            <div className="card" key={id}>
                                <h3 className='header-two'>{name}</h3>
                                <p>{description}</p>
                           </div>
                         )
                     } )
                 }
             </div>
         </div>
       </div>
    </section >
  )
}

export default Repository