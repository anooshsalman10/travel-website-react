import React from 'react'
import footer from '../assets/footer.jpg'

const AboutBanner = (props) => {
    return (
        <div className='h-[300px] relative mt-2'
            style={{
              backgroundImage:`url(${footer})`,
              backgroundPosition:'top',
              backgroundSize:'cover'
            }}>
         <div className=' bg-black opacity-30 inset-0 absolute'></div>
         <div className="absolute top-1/2 md:left-[45%] left-[35%]">
            <h1 className="text-white text-4xl font-bold font-serif">{props.text}</h1>
         </div>
        </div>
    )
}

export default AboutBanner
