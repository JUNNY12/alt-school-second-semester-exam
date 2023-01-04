import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import {AiOutlineMenu} from "react-icons/ai"
import {useState, useEffect} from "react"
import icon from "../assets/download.svg"
import { useLocation } from 'react-router-dom'


const SharedNav = () => {
    const[show, setShow] = useState(false)
    const {pathname} = useLocation()

    
    useEffect(() =>{
        setShow(true)
    }, [pathname])
  return (
    <>
       
       <nav>
            <div
             className='menu'
             onClick={() => setShow(prevState => !prevState)}
             > 
                <AiOutlineMenu />
            </div>

           <div className='nav'>
            <NavLink to='/' className={({isActive}) => isActive? "active" : undefined } end>
                <div className='icon'>
                    <img src={icon} alt="icon" />
                </div>
            </NavLink>
            
           <div className={!show? 'navs-link' : 'navs-link hide'}>
                <div className='link'>
                    <NavLink to='/' className={({isActive}) => isActive? "active" : undefined } end>Home</NavLink>
                </div>
                <div className='link'>
                    <NavLink to='/solution/repository' className={({isActive}) => isActive? "active" : undefined } end> Solution</NavLink>
                </div>
           </div>
           </div>

        </nav>

        <Outlet />
    </>
  )
}

export default SharedNav
