import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import Navbar from './Components/Navbar'
import Planner from './Pages/Planner/Planner'

function App() {

  return (
    <>
    <div >
        {<Navbar/>} 
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/planner' element={<Planner />} />
      </Routes>
    </div>
    </>
  )
}

export default App
