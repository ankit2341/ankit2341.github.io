import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/project" element={<Projects/>}></Route>
    </Routes>
  )
}

export default AllRoutes