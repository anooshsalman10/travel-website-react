import React from 'react'
import AboutBanner from '../components/AboutBanner'
import about_img from '../assets/about_img.jpg'
import trip from '../assets/trip.gif'
import gif from '../assets/gif.gif'
import fast from '../assets/fast.gif'
const About = () => {
  return (
    <div>
      <AboutBanner text='About Us' />
      <div className="mx-w-7xl mx-auto my-10">
        <div className="flex flex-col md:flex-row px-4 md:px-0 gap-4">
          <div className="flex-1">
            <div className="relative">
              <img src={about_img} alt="Travel" className='rounded-lg' />
              <div className='absolute bottom-[70%] right-0 p-4 bg-red-500 text-white font-bold md:text-4xl rounded-lg'>
                Why YOUR Journey Starts <br /> with US!
              </div>
            </div>
            <h1 className='md:text-4xl font-bold mt-8 mb-4 text-3xl'>Why Your Journey Starts With Us</h1>
            <p className="text-gray-500"><span className='text-black font-bold'>GoNomad</span> stands out as the premier choice for travelers seeking more than just a typical vacation; it is a gateway to authentic, transformative experiences. By prioritizing immersive storytelling and expert-curated content, the platform empowers you to move beyond the tourist traps and connect deeply with the culture, people, and landscapes of every destination. Whether you are embarking on a rugged solo expedition or looking for a meaningful cultural exchange, GoNomad provides the practical tools and soul-stirring inspiration needed to turn any trip into a life-changing journey. </p>
          </div>

          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={trip} alt="" className='w-20' />
              </div>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>50+ Destination</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>Unlock unforgettable journeys tailored just for you, all at an unmatched value.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={gif} alt="" className='w-20'/>
              </div>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>Best Price</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>Unmatched affordability without compromising on quality.We guarantee the most competitive rates for every journey.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-start mb-4">
                <img src={fast} alt="" className='w-20' />
              </div>
              <div>
                <h2 className='ml-2 text-2xl font-semibold mb-1'>Super Fast Booking</h2>
                <p className='text-gray-700 ml-2 lg:mr-28'>Confirm your entire itinerary in just a few clicks.Our streamlined process turns your travel plans into reality instantly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div >
  )
}

export default About