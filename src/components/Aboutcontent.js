import './Aboutcontent.css'
import { Link } from 'react-router-dom'
import React from 'react'
import photo from '../assets/resumephoto.jpg'

const Aboutcontent = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <h1>Who am I?</h1>
            <p>A recent B.Tech graduate in Information Technology with a strong passion for web development and full-stack engineering. I am driven by the challenge of designing and building efficient, scalable, and user-friendly web applications. My technical skills include HTML, CSS, JavaScript, React.js, Bootstrap, Flutter, and Playwright, along with hands-on experience in building responsive and interactive interfaces. I am eager to contribute my expertise to a dynamic engineering team and deliver high-quality digital solutions that provide real impact to users.</p>
            <Link to="/contact" className='btn'>Contact</Link>
        </div>
        <div className='about-right'>
            <div className='img-container'>
            <img src={photo} className='img' alt='contactphoto' ></img></div>
            </div>
    </div>
  )
}

export default Aboutcontent