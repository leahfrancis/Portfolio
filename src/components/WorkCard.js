import './WorkCard.css'
import pro1 from '../assets/project1.jpg'
import React from 'react'
import { NavLink } from 'react-router-dom'
import pro2 from '../assets/project2.png'
import pro3 from '../assets/project3.jpg'
import pro4 from '../assets/project4.jpg'
import pro5 from '../assets/prod5.png'
import pro6 from '../assets/prod6.png'
import pro7 from '../assets/prod7.png'
import pro8 from '../assets/prod8.jpg'
const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={pro1} alt='let it out '/>
                <h2 className='project-title'>Let It Out-Mental Health Ease App</h2>
                <div className='proj-details'>
                  <p>Android application. 
                  Tech Stacks used: Flutter and Firebase.
                  Functionalities: Self Help, Professional Help, Journal, Blog.         

                  </p>
                  <div className='proj-btns'>
                    <NavLink to="https://github.com/leahfrancis/Let-It-Out" className='btn'>Source</NavLink>
                  </div>
                </div>
            </div>
            <div className='project-card'>
                <img src={pro3} alt='mosquito '/>
                <img src={pro4} alt='mosquito2'/>
                <h2 className='project-title'>Smart Mosquito Species and Density Detection</h2>
                <div className='proj-details'>
                  <p>IoT based system developed to lure and trap mosquitos and identify their species and density.
                    Tech Stacks used: React Js, Python Flask.
                  </p>
                  <div className='proj-btns'>
                    <NavLink to="https://github.com/Ananthutj/csml_frontend" className='btn'>Source</NavLink>
                  </div>
                </div>
            </div>
            <div className='project-card'>
                <img src={pro2} alt='bubble app'/>
                
                <h2 className='project-title'>Bubble and Arrow App using JavaScript</h2>
                <div className='proj-details'>
                  <p>Bubble and Arrow app built in such a way that when a bubble is clicked, the corresponding arrow moves towards it and once hit, the bubble turns black.
                    Tech Stacks Used:HTML,JavaScript, CSS
                  </p>
                  <div className='proj-btns'>
                    <NavLink to="https://github.com/leahfrancis/Bubble-and-arrow-using-JavaScript" className='btn'>Source</NavLink>
                  </div>
                </div>
            </div>
            <div className='project-card'>
                <img src={pro5} alt='netflix1'/>
                <img src={pro6} alt='netflix2'/>
                
                <h2 className='project-title'>Netflix Clone Website</h2>
                <div className='proj-details'>
                  <p>Netflix Clone website. Tech Stacks Used: JavaScript, CSS, React.Js
                  </p>
                  <div className='proj-btns'>
                    <NavLink to="https://github.com/leahfrancis/netflixclone-react" className='btn'>Source</NavLink>
                  </div>
                </div>
            </div>
            <div className='project-card'>
                <img src={pro7} alt='state table'/>
               
                
                <h2 className='project-title'>State Table for Product Sale.</h2>
                <div className='proj-details'>
                  <p>Table created to sell products.Tech Stacks Used: JavaScript,CSS,React.Js,Bootstrap.Functionalities: Add row/column, Delete row/column, Drag and drop rows to re arrange, Insert image.
                  </p>
                  <div className='proj-btns'>
                    <NavLink to="https://github.com/leahfrancis/Product-Page-ReactJs" className='btn'>Source</NavLink>
                  </div>
                </div>
            </div>
            <div className='project-card'>
                <img src={pro8} alt='E commerce'/>
               
                
                <h2 className='project-title'>E-Commerce Website</h2>
                <div className='proj-details'>
                  <p>E-commerce website with login/signup functionality.Tech Stacks used:Flutter and Firebase.
                  </p>
                  <div className='proj-btns'>
                    <NavLink to="https://github.com/leahfrancis/E-commerce-Flutter" className='btn'>Source</NavLink>
                  </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkCard