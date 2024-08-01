import './Aboutcontent.css'
import { Link } from 'react-router-dom'
import React from 'react'
import photo from '../assets/resumephoto.jpg'

const Aboutcontent = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <h1>Who am I?</h1>
            <p>A recent BTech graduate in information Technology, passionate about web development. I'm driven by the challenge of creating innovative and user-friendly web applications. My skills include HTML, CSS, JavaScript, Bootstrap, React Js, Flutter and Firebase. I'm eager to contribute my abilities to a dynamic team and build exceptional digital experiences.</p>
            <Link to="/contact" className='btn'>Contact</Link>
        </div>
        <div className='about-right'>
            <div className='img-container'>
            <img src={photo} className='img' alt='photo'></img></div>
            </div>
    </div>
  )
}

export default Aboutcontent