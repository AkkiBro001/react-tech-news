import React from 'react'
import { useGolbalContext } from './Context'

function Stories() {

  const { hits, isLoading, removePost } = useGolbalContext()

  if (isLoading) {
    return (
      <div className="container d-flex">
        <div class="spinner-border mt-4 mb-4 m-auto" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  if (hits.length === 0) {
    return <h1 className='text-center my-3'>No Result Found</h1>
  }

  return (
    <>
      <div className="row mb-5 mt-2">
        {hits.map((curElement) => {
          const { title, url, num_comments, objectID, author } = curElement;
          return <div className="col-12 g-3" key={objectID}>
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">{title ? title : 'N/A'}</h5>
                <p className="card-text text-secondary">By <span className='fw-bold'>{author}</span> | <span className='fw-bold'>{num_comments ? num_comments : 0}</span> comments</p>
                <div className="d-flex justify-content-between">
                  <a href={url} className="text-primary text-decoration-none">{url ? 'Read More' : 'N/A'}</a>
                  <button className="text-danger text-decoration-none border-0 bg-transparent" onClick={() => { removePost(objectID) }}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        })}
      </div>
    </>
  )
}

export default Stories