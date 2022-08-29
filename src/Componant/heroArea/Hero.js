import "./Hero.css"
import React from 'react'
import IntoImg from "../image/hero.png"
import heroImg from '../image/hero1.png'
import { Link } from "react-scroll"


const Hero = () => {
  return (
    
    <div className="hero">
        <div className=" mask ">
          <img className="into-img" src={IntoImg} alt="IntoImg"></img>
        </div>
        <div className="row">
         <div className="col-md-6 content">
          
          <h2>Best & First<br></br> Digital System </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing<br></br> elit. Adipisci quidem qui vitae nihil minima fuga!<br></br> Lorem ipsum dolor sit amet.</p>
          <div className="hero-btn">
            <Link spy="true" smooth="true" to="project" className="btn">PROJECTS</Link>
            <Link spy="true" smooth="true" to="contact" className="btn">CONTACT</Link>
          </div>
        </div>
        <div className=" col-md-6 heroImg">
        <img src={heroImg} alt='heroImg'></img>
        </div>
    </div>
    </div>
  )
}

export default Hero