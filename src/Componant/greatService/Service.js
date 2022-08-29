import React from 'react'
import firstImg from '../image/firstImg.png'
import secondImg from '../image/second.png'
import thirdImg from '../image/third.png'
import forthImg from '../image/forth.png'

import './Service.css'

const Service = () => {
  return (
    <>
    <div className='service-header'>
        <h1 style={{color:"#2D3BB2"}}>Our Great Services</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod<br></br> 
        tempor invidunt ut labore et dolore magna aliquyam </p>
    </div>
   
  <div className='serviceCard-area'>
  <div className='service-card'>
    <div className="card service-area">
      <div className=" service">
        <div className='left'>
                  <img src={firstImg} alt="firstImg" ></img>

        </div>
        <div className='right'>
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            tempor invidunt ut labore et dolore magna aliquyam 
            ut labore et dolore</p>
        </div>
        
      </div>
    </div>
     <div className="card service-area">
      <div className=" service">
        <div className='left'>
                  <img src={secondImg} alt="firstImg" ></img>

        </div>
        <div className='right'>
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            tempor invidunt ut labore et dolore magna aliquyam 
            ut labore et dolore</p>
        </div>
        
      </div>
    </div>
    </div>
  <div className='service-card'>
  <div className="card service-area">
      <div className=" service">
        <div className='left'>
                  <img src={thirdImg} alt="firstImg" ></img>

        </div>
        <div className='right'>
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            tempor invidunt ut labore et dolore magna aliquyam 
            ut labore et dolore</p>
        </div>
        
      </div>
    </div>
 
 
    <div className="card service-area">
      <div className=" service">
        <div className='left'>
                  <img src={forthImg} alt="firstImg" ></img>

        </div>
        <div className='right'>
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr
            tempor invidunt ut labore et dolore magna aliquyam 
            ut labore et dolore</p>
        </div>
        
      </div>
    
  </div>
  </div>
  </div>
    
  
   
 
  
  
  
     <button className='btn service-btn'>See More</button>
     </>
  )
}

export default Service