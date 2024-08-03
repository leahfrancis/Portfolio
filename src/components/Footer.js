

import React from 'react'
import './Footer.css'
import {FaGithub, FaHome,FaLinkedin,FaMailBulk,FaPhone} from "react-icons/fa";


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                <div>
                    <p></p>
                    <p>Kozhikode, Kerala.</p>
                </div>
                
            </div>
            <div className='phone'>
            <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>+91 8138958508</h4>

            </div>
            <div className='email'>
            <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>francisleah2023@gmail.com</h4>

            </div> </div>
            <div className='right'>
                <h4>About</h4>
                <p>I am Leah Francis, a recent BTech IT graduate who is passionate about learning and building things. I look forward to discussing projects and interesting ideas.</p>
                <div className='socials'>
            <a
              href="https://www.linkedin.com/in/leah-francis-augustine"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/leahfrancis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          </div>
           </div>
           
            
       
    </div>
    </div>
  )
}

export default Footer