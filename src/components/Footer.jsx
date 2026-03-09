import React from 'react'
import footer from '../assets/footer.jpg'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10"
      style={{
        backgroundImage: `url(${footer})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
      }}>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-4xl mb-4"><span className='text-red-500'>Go</span> Nomad</div>
            <p className='text-sm'>We're dedicated to making your travel dreams come true with expertly curated tours and unforgettable experiences.</p>
          </div>


          <div className="flex flex-col lg:items-center">
            <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Destinations</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>         
          </div>
          
          <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
               <ul className='space-y-2 text-sm'>
                      <li> 23 Phoenix Street, Istanbul,Turkey</li>
                      <li>Phone: +12 5678 5678</li>
                      <li>Email: xyz@gmail.com</li>
               </ul>
          </div>

          <div>
             <h3 className="text-lg font-semibold mb-4">Follow Us:</h3>
              <div className="flex space-x-4">
                  <FaInstagram className='hover:text-red-500 cursor-pointer'/>
                  <FaFacebook className='hover:text-red-500 cursor-pointer'/>
                  <FaTwitter className='hover:text-red-500 cursor-pointer'/>
              </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center justify-end text-sm">
         <p> &copy; {new Date().getFullYear()} GoNomad. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


