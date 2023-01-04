import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";


export const Loader = () => {
  return (
    <div className='loader'><BounceLoader  size={150} color="#7B47CC"/></div>
  )
}

export const PreLoader = () => {
    return(
        <div className='pre'><BounceLoader size={80} /></div>
    )
}