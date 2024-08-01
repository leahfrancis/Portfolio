import "./Heroimg.css";

import React from 'react'
import { Link } from "react-router-dom";
const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="bg-img" src="https://www.shutterstock.com/image-photo/blank-black-corporate-stationery-on-600nw-1051434977.jpg"></img>
            </div>
            <div className="content">
                <p>Hi ! I'm Leah. </p>
                <h1>Web Developer </h1>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
    </div>
  )
}

export default HeroImg