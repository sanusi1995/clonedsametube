import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Video from './Pages/Video/Video'
import Home from './Pages/Home/Home'

const App = () => {

  const [sidebar,setSidebar]= useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar ={sidebar}/> }/>
        <Route path='/Video/:categoryId/:VideoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App
