import React, { useEffect, useState } from "react";
import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";
import { Search } from 'lucide-react';

const slides = [
  {
    image: hero1,
    title: "Explore The Mountains",
    subtitle: "Experience breathtaking views and fresh air.",
  },
  {
    image: hero2,
    title: "Relax On Beautiful Beaches",
    subtitle: "Feel the calmness of crystal clear waters.",
  },
  {
    image: hero3,
    title: "Discover Amazing Cities",
    subtitle: "Travel through culture and modern life.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Manual Next
  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === slides.length - 1 ? 0 : currentIndex + 1
    );
  };

  // Manual Prev
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? slides.length - 1 : currentIndex - 1
    );
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden my-4">

      {/* Background Image */}
      <img
        src={slides[currentIndex].image}
        alt="travel"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {slides[currentIndex].title}
        </h1>

        <p className="max-w-xl text-lg md:text-xl mb-8">
          {slides[currentIndex].subtitle}
        </p>

        <button className="bg-red-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-lg transition">
          Explore Now
        </button>
      </div>

      {/* Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white px-4 py-2 rounded-full"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white px-4 py-2 rounded-full"
      >
        ❯
      </button>

      <div className='bg-white border border-gray-300 shadow-lg rounded-md z-10 left-[12%] absolute hidden lg:block bottom-[13%] items-center justify-center w-[1050px] mx-auto p-4'>
        <div className='flex gap-3 items-center'>
          <div className='grid gap-5 grid-cols-4 flex-grow'>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='flex font-semibold gap-1 items-center'><Search className='w-4 h-4' />Location</label>
              <select name="" id="" className='border border-gray-300 rounded-sm p-1'>
                <option value="">Select Options</option>
                <option value="">Bali</option>
                <option value="">India</option>
                <option value="">Tokyo</option>
                <option value="">Venice</option>
                <option value="">Paris</option>
              </select>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Check In</label>
              <input type="date" className='border p-1 border-gray-300 rounded-sm' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='font-semibold'>Check Out</label>
              <input type="date" className='border p-1 border-gray-300 rounded-sm' />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="" className='flex font-semibold gap-1 items-center'><Search className='w-4 h-4' />Guest</label>
              <select name="" id="" className='border border-gray-300 rounded-sm p-1'>
                <option value="">Select Options</option>
                <option value="">2 Guest 1 Children</option>
                <option value="">2 Guest 1 Children</option>
                <option value="">2 Guest 1 Children</option>
                <option value="">2 Guest 1 Children</option>
                <option value="">2 Guest 1 Children</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-white'>Transmissioin</label>
            <button className='bg-red-500 transition-all ease-in text-white hover:bg-black hover:text-white px-3 h-8 py-1 rounded-md'>Book Now</button>
          </div>

        </div>
      </div>
    
    </section >
  );
};

export default Hero;