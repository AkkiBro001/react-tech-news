import React from 'react'
import Input from './components/Input';
import Pagination from './components/Pagination';
import Stories from './components/Stories'

import AppProvider from './components/Context';


function App() {
  return (
    <>

    <div className="container pb-5">
      <AppProvider>
        <Input/>
        <Stories/>
        <Pagination/>
      </AppProvider>
    </div>
    
    </>
  )
}

export default App