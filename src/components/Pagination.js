import React from 'react'
import { useGolbalContext } from './Context'


function Pagination() {

  const {page, nbPages, getNextPage, getPrevPage} = useGolbalContext()

  return (
    <div className='d-flex justify-content-center align-items-center'>
        <button className='btn btn-dark' onClick={getPrevPage}>PREV</button>
        <span className='mx-3'>{page} of {nbPages}</span>
        <button className='btn btn-dark' onClick={getNextPage}>NEXT</button>

    </div>
  )
}

export default Pagination