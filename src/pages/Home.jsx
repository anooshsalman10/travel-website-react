import React from 'react'
import Hero from "../components/Hero"
import Services from '../components/Services'
import Footer from '../components/Footer'
import GalleryComp from '../components/GalleryComp'
import Banner from '../components/Banner'
import ContactComp from '../components/ContactComp'

const Home = () => {
  return (
    <>
      <Hero />
      <Services/>
      <GalleryComp/>
      <Banner/>
      <ContactComp/>
    </>
  )
}

export default Home