import React from 'react'
import { MdTravelExplore } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='absolute flex items-center bg-black w-[100vw]'>
        <MdTravelExplore size={25} fill={"white"}/>
        <h1 className='text-white text-xl font-bold'>Wix Travel</h1>
    </div>
  )
}

export default Navbar
