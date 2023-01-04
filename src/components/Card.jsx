import React from 'react'
import { useNavigate } from 'react-router-dom'
import {AiFillEye} from "react-icons/ai"

const Card = ({name,owner,forks, language,id}) => {
    const navigate = useNavigate()
  return (
    <div className="card" key={id} data-aos="fade-up" data-aos-duration='8000'>
        <h3 className='header-two'>{name}</h3>
        <p className='fork'>No of Forks : {forks}</p>
        <p className='language'>Language: {language}</p>
        <div className='image-wrapper' alt={name}>
            <img src={owner.avatar_url} />
        </div>

        <button className='btn-view' onClick={() => navigate(`/solution/repository/${id}`)}>
            <AiFillEye /> 
        </button>
    </div>
  )
}

export default Card