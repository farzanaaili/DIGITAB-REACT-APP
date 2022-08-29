import React from 'react'
import "./Footer.css"
import {ImFacebook, ImTwitter, ImInstagram} from 'react-icons/im'

const Footer = () => {
  return (
    <>
      <div className='footer-area'>
        <div className='part1'>
          <ul>
            <li><a href='/'>About Us</a></li>
            <li><a href='/'>Contact</a></li>
            <li><a href='/'>Terms & Conditions</a></li>

          </ul>
        </div>
        <div className='part2'>
          <ul>
            <li><a href='/'><ImFacebook />Facebook</a></li>
            <li><a href='/'><ImTwitter /> Twitter</a></li>
            <li><a href='/'><ImInstagram />Instagram</a></li>
          </ul>
        </div>
        <div className='part3'>
          <h4>Subscribe to our newsletter</h4>
          <input placeholder='Email Address'></input>
          <button className='f-btn'>OK</button>
        </div>
        <div className='part4'>
          <p style={{color:"#fff"}} >497 Evergreen Rd. Roseville,</p>
          <p style={{color:"#fff"}} >+44 345 678 903</p>
          <p style={{color:"#fff"}} >adobexd@mail.com</p>
        </div>

      </div>
    </>
  )
}

export default Footer