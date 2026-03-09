import React from 'react'
import { Link } from 'react-router-dom'
import { HiMenuAlt1 } from "react-icons/hi";
import { useState } from 'react';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {

  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  }
  return (
    <header className='fixed top-0 left-0 w-full z-[9999] bg-transparent'>
      <div className='bg-transparent/75 px-4 w-full py-4 '>

        <div className='max-w-7xl mx-auto py-2 px-6 flex bg-transparent justify-between items-center'>

          <Link to='/'>
            <h1 className='text-2xl text-white font-bold'>Go <span className='text-red-500'>Nomad</span></h1>
          </Link>

          <div className='flex items-center gap-5'>
            <nav className='hidden md:flex gap-7'>
              <ul className='flex justify-center gap-7 text-white text-xl font-semibold'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About Us</li></Link>
                <Link to='/destinations'><li>Destinations</li></Link>
                <Link to='/blog'><li>Blog</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
              </ul>
              <button className='bg-red-500 text-white px-4 py-1 font-semibold rounded-md'>Book Now!</button>
            </nav>
            <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer md:hidden text-white' size={30} />
          </div>

        </div>
        <ResponsiveMenu showMenu={showMenu} setshowMenu={setshowMenu}/>
      </div>
    </header>
  )
}

export default Navbar