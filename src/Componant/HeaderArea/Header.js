import "./Header.css"
import React, { useState } from 'react'

import { Link } from "react-scroll"

import {FaBars, FaTimes} from "react-icons/fa"
import hlogo from '../image/h-logo.png'



const Header = () => {
    const[click,setClick]=useState(false);
    const handleClick =() => setClick(!click);

    const [color, setColor]=useState(false);
    const changeColor =() => {
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };
    window.addEventListener("scrollY", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"} >
        <Link className="logo" spy={true} smooth={true} to="home">
            <img src={hlogo} alt='h-logo'></img>
        </Link>
        
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <div className="F-nav">
              <Link spy={true} smooth={true} to="home" activeClass="active"><li>Home</li></Link>
              <Link spy={true} smooth={true} to="about"><li>Features</li></Link>
              <Link spy={true} smooth={true} to="services"><li>Pages</li></Link>
              <Link spy={true} smooth={true} to="about"><li>Blog</li></Link>
              <Link spy={true} smooth={true} to="services"><li>Contact</li></Link>

          </div>
           
                
            
                <Link spy={true} to="contact" smooth={true} ><li><button style={{border:"1px solid #FF00C4", padding:"5px", borderRadius:"5px"}}>Try Free</button></li></Link>
            
        </ul>
        <div className="hamburger " onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color:"#fff"}} />) : ( <FaBars  size={20} style={{color:"#fff"}} />) }
            
           
        </div>
    </div>
  )
}

export default Header