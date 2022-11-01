import React from 'react'
import {useParams} from "react-router-dom"
import {useContext} from 'react'
import DataContext from '../context/dataContext'

const SingleRepo = () => {

const {id} = useParams()

const {data} = useContext(DataContext)

const repo = data.find((repo) => repo.id === Number(id))




  return (
    <section className='section-container'>
        <div></div>
        <div>{repo.name}</div>
    </section>
  )
}

export default SingleRepo