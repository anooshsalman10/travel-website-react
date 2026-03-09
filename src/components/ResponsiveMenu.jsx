import { X } from 'lucide-react';
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom'

const ResponsiveMenu = ({ showMenu, setshowMenu }) => {
  return (
    <div
      className={`${showMenu ? "right-0" : "-right-full"
        } fixed top-0 h-screen w-[75%] z-[9999]
  bg-white px-8 pb-6 pt-16 text-black
  transition-all duration-300 md:hidden shadow-xl border-l-4`}
    >
      <div>
        <button className='border border-black rounded-lg absolute top-4 right-9' onClick={() => { setshowMenu(false) }}><X /></button>
        <div className='flex items-center justify-start gap-3'>
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className='text-sm text-slate-500'>Premium User</h1>
          </div>
        </div>
        <nav className='mt-12'>
          <ul className='space-y-4 text-xl text-black flex flex-col'>
            <Link to='/' onClick={() => { setshowMenu(false) }}><li>Home</li></Link>
            <Link to='/about' onClick={() => { setshowMenu(false) }}><li>About Us</li></Link>
            <Link to='/destinations' onClick={() => { setshowMenu(false) }}><li>Destinations</li></Link>
            <Link to='/blog' onClick={() => { setshowMenu(false) }}><li>Blog</li></Link>
            <Link to='/contact' onClick={() => { setshowMenu(false) }}><li>Contact</li></Link>
            <Link to='#'><button onClick={() => setshowMenu(false)} className='bg-red-500 text-white px-4 py-1 rounded-md font-semibold'>Book Now</button></Link>
          </ul>
        </nav>

      </div>
    </div>
  )
}

export default ResponsiveMenu
