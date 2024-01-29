import React from 'react'
import {
  
  Link
} from "react-router-dom";

const Header = () => {
  return (
    <div className='w-full h-28 bg-cyan-400 shadow-2xl rounded-lg flex items-center justify-center'>
      <h1 className='text-white font-extrabold text-3xl'><Link className="nav-link active"  to="/">Welcome To Registeration Portal</Link></h1>
    </div>
  )
}

export default Header
