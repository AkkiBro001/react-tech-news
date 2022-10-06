import React from 'react'
import { useGolbalContext } from './Context'

function Input() {

  const {query, searchPost} = useGolbalContext()

  return (
    <>
    <h1 className="text-center mt-4">Tech News</h1>
  <div className="form-floating my-3">
    <input type="email" className="form-control" id="floatingInput" placeholder="Search Here" value={query} onChange={(e)=>{searchPost(e.target.value)}}/>
    <label htmlFor="floatingInput">Search Post Here</label>
  </div>
  </>
  )
}

export default Input