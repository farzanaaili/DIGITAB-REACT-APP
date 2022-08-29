import "./About.css"
import React from 'react'
import react1 from "../image/about.png"
import about1 from '../image/about-l/business-proposal.png'
import about2 from '../image/about-l/graphic.png'
import about3 from '../image/about-l/graphic-design.png'
import about4 from '../image/about-l/stationery.png'


import { Link } from "react-scroll"

const About = () => {
  return (
    <div className="about">
       
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"></img>
                    <h4 className="ex-btn">5 Years
                                 Work
                                 Experience</h4>
                </div>
                
            </div>
        </div>
         <div className="left">
            <h1 style={{padding:"15px 0px"}}>About US</h1>
            <h3>Our Agency Provide<br></br>
             Best Services</h3>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam est dicta corrupti assumenda dolore eius in nesciunt delectus quo ducimus veritatis adipisci,voluptate labore.</p>
           <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr dunt ut labore et dolore magna aliquyam erat, sed am et justo duo dolores.</p>
           <div className="about-Clogo">
            <div className="abt-l">
            <img src={about1} alt='images'></img>
                <p>Modern Design</p>
            </div>
            <div className="abt-l">
            <img src={about2} alt='images'></img>
                <p>Modern Design</p>
            </div>
            </div>
            
            <div className="about-Clogo">
            <div className="abt-l">
            <img src={about3} alt='images'></img>
                <p>Modern Design</p>
            </div>
            <div className="abt-l">
            <img src={about4} alt='images'></img>
                <p >Modern Design</p>
            </div>
            </div>
            
           
            <Link className="about-btn" spy="true" smooth="true"  to="contact">
                <button className="btn">Learn More</button>
                <button className="btn">Discover More</button>

            </Link>
        </div>
    </div>
  )
}

export default About