import React from 'react'
import NavBar from '../components/NavBar'
import WorkCard from '../components/WorkCard'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
const Project = () => {
  return (
    <div>
      <NavBar/>
      <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Project