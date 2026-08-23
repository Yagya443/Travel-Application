import React from 'react'
import { MdTravelExplore } from "react-icons/md";

const Navbar = () => {
  return (
    <div className='absolute flex gap-2 items-center bg-gray-800 w-[100vw]'>
        <MdTravelExplore size={35} fill={"white"}/>
        <h1 className='text-white text-2xl font-bold'>Wix Travel</h1>
    </div>
  )
}

export default Navbar
