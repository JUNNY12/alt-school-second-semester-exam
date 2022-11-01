import React from 'react'
import { useContext } from 'react'
import DataContext from '../context/dataContext'
import { useNavigate } from 'react-router-dom'



const Repository = () => {

    const {data, loading} = useContext(DataContext) 
    const navigate = useNavigate()

    console.log(data)
    console.log(loading)

    let populateRepo;

    if (loading){
        populateRepo = <div>Loading ......</div>
    }

    else {
        populateRepo = 
        <div className="card-container">
            {
            data?.map(({id, name, owner}) =>{
                return(
                    <div className="card" key={id}>
                        <h3 className='header-two'>{name}</h3>
                        <p></p>
                        <div className='image-wrapper'>
                            <img src={owner.avatar_url} />
                        </div>
                        <button onClick={() => navigate(`/solution/repository/${id}`)}>View</button>
                    </div>
                )
            } )
        }
      </div>
    }

  return (
    <section className='section-container' >
       <div className='repository'>
         <h1 className='header'>My Repositories</h1>
         <div>
            {populateRepo}
         </div>
       </div>
    </section >
  )
}

export default Repository