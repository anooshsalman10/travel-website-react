import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import turkey from '../assets/turkey.jpg'
import dubai from '../assets/dubai.jpg'
import china from '../assets/china.jpg'
import paris from '../assets/paris.jpg'
import korea from '../assets/korea.jpg'
import back from '../assets/back.png'
import next from '../assets/next.png'
import destinations from '../assets/destinations.jpg'
import { Clock, Star } from 'lucide-react'



const destinationJson = [
    { name: 'Turkey', img: turkey, time: '7 days-6 nights', star: '3(12 reviews)', price: '70,000' },
    { name: 'Dubai', img: dubai, time: '7 days-6 nights', star: '3(12 reviews)', price: '70,000' },
    { name: 'China', img: china, time: '7 days-6 nights', star: '3(12 reviews)', price: '70,000' },
    { name: 'Paris', img: paris, time: '7 days-6 nights', star: '3(12 reviews)', price: '70,000' },
    { name: 'South Korea', img: korea, time: '7 days-6 nights', star: '3(12 reviews)', price: '70,000' }
]

const FeatureDestinations = () => {
    return (
        <section className="w-full py-20">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className='text-3xl lg:text-4xl font-serif mb-3 font-semibold text-center'>Destinations</h1>
                <hr className='text-red-500 w-[200px] bg-red-500 mx-auto h-1 mb-10' />
                <div className="w-full pb-20">
                    <Swiper
                        className="w-full"
                        modules={[Navigation, Pagination]}
                        spaceBetween={20}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            1024: { slidesPerView: 4 },
                            600: { slidesPerView: 2 },
                            480: { slidesPerView: 1 },
                        }}
                    >
                        {destinationJson.map((destination, index) => (
                            <SwiperSlide key={index}>
                                <div className=' border shadow-lg shadow-gray-500 rounded-lg mb-5'>
                                    <img
                                        src={destination.img}
                                        alt={destination.name}
                                        className='object-cover w-full h-48 hover:scale-110 transition-all'
                                    />
                                    <div className='p-4'>
                                        <p className='text-gray-500 flex items-center gap-1 text-sm mb-1'>
                                            <Clock width={15} />
                                            {destination.time}
                                        </p>

                                        <h3 className='text-xl font-bold mb-2'>
                                            {destination.name}
                                        </h3>

                                        <p className='flex gap-1 items-center'>
                                            <Star width={20} fill='red' />
                                            {destination.star}
                                        </p>

                                        <p className='text-gray-600 mb-4 mt-2'>
                                            Experience the beauty and culture of {destination.name}
                                        </p>

                                        <div className='flex gap-4'>
                                            <button className='px-3 py-2 bg-red-500 rounded-md text-white'>
                                                ${destination.price}
                                            </button>
                                            <button className='px-3 py-2 bg-black rounded-md text-white'>
                                                Learn More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default FeatureDestinations
