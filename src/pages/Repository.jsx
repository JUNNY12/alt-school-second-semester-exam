import { useContext, useEffect, useState } from 'react';
import DataContext from '../context/dataContext';
import { useGetReposQuery } from '../services/fetchRepo';
import Card from '../components/Card';
import { Loader } from '../components/Loader';
import {GrCaretNext, GrCaretPrevious} from "react-icons/gr"



const Repository = () => {
    // const {data, loading} = useContext(DataContext) 
    const {data, isLoading, isSuccess} = useGetReposQuery()


    const [currentPage, setCurrentPage] = useState(1)
    const [repoPerPage] = useState(6)
    const [pageNumLimit] = useState(6)
    const [maxPageLimit, setMaxPageLimit] = useState(6)
    const [minPageLimit, setMinPageLimit] = useState(0)
  
    const pages = []
    for (let i=1; i<=Math.ceil(data?.length / repoPerPage); i++){
      pages.push(i)
    }
  
    const indexOfLastPage = currentPage * repoPerPage
    const indexOfFirstPage = indexOfLastPage - repoPerPage
    const currentRepoPerPage = data?.slice(indexOfFirstPage, indexOfLastPage)
    
    const handleClick = (event) => {
      setCurrentPage(Number(event.target.id))
    }
  
    const handlePrevPage = () => {
      setCurrentPage(currentPage - 1)
      if((currentPage - 1) % pageNumLimit === 0){
        setMaxPageLimit(maxPageLimit - pageNumLimit);
        setMinPageLimit(minPageLimit - pageNumLimit)
      }
    }
  
    const handleNextPage = () => {
      setCurrentPage(currentPage + 1)
      if(currentPage + 1 > maxPageLimit){
        setMaxPageLimit(maxPageLimit + pageNumLimit);
        setMinPageLimit(minPageLimit + pageNumLimit)
      }
    }
  
    let pageIncrementBtn = null;
    let pageDecrementBtn = null;

    if(pages.length > maxPageLimit){
      pageIncrementBtn= <div onClick={handleNextPage} 
      className='dot'
       > &hellip; </div>
    }
    if(pages.length > maxPageLimit){
      pageDecrementBtn= <div onClick={handlePrevPage} 
      className={currentPage === pages[0] ? 'hide' : 'dot'}
      > &hellip; </div>
    }


  return (
    <section className='section-container' >
       <div className='repository'>
         <h1 className='header'>My Repositories</h1>
         <div className='card-container'>
         {
            isSuccess && currentRepoPerPage?.map(({id, name, owner,forks, language}) =>{
                return(
                   <Card 
                   id={id}
                   key={id}
                   name={name}
                   owner={owner}
                   forks={forks}
                   language={language}
                   />
                )
            } )
        }
         </div>
         {isLoading && <Loader />}
         <div>
         {
          data &&
           <div className='pagination-container'>
            <div  className='prev'>
            <button 
            onClick={handlePrevPage}
            disabled={currentPage === pages[0] ? true : false}
            >
            <GrCaretPrevious/></button>
            </div>
            {pageDecrementBtn}
            {pages.map((num) => {
            if(num  < maxPageLimit + 1 &&  num > minPageLimit){
                return(
                <ul className='pagination'>
                    <div
                    key={num}
                    id={num}
                    className={currentPage === num ? 'pagenum active-num' :'pagenum'}
                    onClick={handleClick}
                    >{num}</div>
                </ul>
                )
            }
            else{
                return null
            }
            })}
            {pageIncrementBtn}
            <div className='next'>
            <button 
            onClick={handleNextPage}
            disabled={currentPage === pages[pages.length-1] ? true : false}
            ><GrCaretNext /></button>
            </div>
          </div>
          }
         </div>
       </div>
    </section >
  )
}

export default Repository
