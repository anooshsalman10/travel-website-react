import React from 'react'
import ContactComp from '../components/ContactComp'
import AboutBanner from '../components/AboutBanner'

const Contact = () => {
  return (
    <div>
      <AboutBanner text='Contact Us'/>
        <ContactComp/>
    </div>
  )
}

export default Contact