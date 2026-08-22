import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Navbar from './Pages/Navbar'

function App() {

  return (
    <>
    <div className=''>
        {<Navbar/>} 
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
    </>
  )
}

export default App
