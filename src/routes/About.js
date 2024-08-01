import React from 'react'
import NavBar from '../components/NavBar'
import Heroimg2 from '../components/Heroimg2'
import Aboutcontent from '../components/Aboutcontent'
import Footer from '../components/Footer'
const About = () => {
  return (
    <div><NavBar/>
    <Heroimg2 heading="ABOUT." text="I am a front-end developer"/>
    <Aboutcontent />
      <Footer/>
      </div>
  )
}

export default About