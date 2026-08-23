import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'
import Navbar from './Components/Navbar'

function App() {

  return (
    <>
    <div >
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
