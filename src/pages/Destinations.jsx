import React from 'react'
import destinations from '../assets/destinations.jpg'
import FeatureDestinations from '../components/FeatureDestinations'

const Destinations = () => {
  return (
    <div>
      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] mb-16">
        <img
          src={destinations}
          alt="Destinations"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl md:text-6xl font-bold font-serif">
            Top Destinations
          </h2>
        </div>
      </div>
      <FeatureDestinations />
    </div>
  )
}

export default Destinations