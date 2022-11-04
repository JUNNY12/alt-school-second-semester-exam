import React from 'react'
import {Link, useParams} from "react-router-dom"
import {useContext} from 'react'
import DataContext from '../context/dataContext'
import {AiOutlineLink, AiOutlineArrowLeft} from "react-icons/ai"

const SingleRepo = () => {

const {id} = useParams()

const {data} = useContext(DataContext)

const repo = data?.find((repo) => repo.id === Number(id))



  return (
    <section className='repo-container'>
        <div className='grid-container'>
            <div className='repo-img'>
                <img src={repo?.owner.avatar_url} alt="repo" />
            </div>

            <div>
                <h1 className='repo-name'>Repository Name: {repo?.name}</h1>
                <div className='repo-id'>Repository ID: {repo?.id}</div>
                <div className='repo-text'>Default Branch : {repo?.default_branch}</div>
                <div className='repo-text'>Programming Language : {repo?.language}</div>
                <div className='repo-text'>Number of Forks : {repo?.forks}</div>
                {repo?.description && <div className='repo-text'>description: {repo?.description}</div>}
                <div className='repo-text'>Github Link : <a href={repo?.git_url.replace('git:', 'https:')} target='_blank'>Visit  <AiOutlineLink /></a></div>
                <div className='repo-text'>Visibility : {repo?.visibility}</div>
                {repo?.homepage &&   <div className='repo-text'> Live Url : <a href={`https://${repo?.homepage}`} target='_blank'>Visit <AiOutlineLink /></a></div>}

                <div>
                  <Link to='/solution/repository'>
                  <button className='back-arrow'><AiOutlineArrowLeft /> Back</button>
                  </Link>
                </div>
            </div>
        </div>

    </section>
  )
}

export default SingleRepo
