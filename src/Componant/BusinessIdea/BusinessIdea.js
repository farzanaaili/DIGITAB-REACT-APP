import React from 'react'
import "./BusinessIdea.css"
import businessImg  from '../image/b-plan/bg.png'
import halfCircle from '../image/b-plan/halfCircle.png'
import {TbWorld} from "react-icons/tb"
// logo
import logo1 from '../image/plan-l/logo1.png'
const BusinessIdea = () => {
  return (
    <div className='businessIdea container-fluid'>
      <h1 style={{textAlign:"center", marginTop:"80px", fontSize:'50px'}}>Our Business Idea</h1>
      <div className='image-area'>
        <img src={businessImg} alt='businessImg' />
      </div>
      <div className='business-area'>
        <div className='half-circle'>
          <img src={halfCircle} alt='halfCircle' />
          <div className='shadow-circle'>
          </div>
            <div className='circle'>
              <div className='circle-content'>
              <h1> <TbWorld /></h1>
               <h3>BUSINESS</h3>
               <h3>INFOGRAPHIC</h3>  
               <div className='p-area'><p >Lorem ipsum dolor sit amet,  consectetuer adipiscing elit, sed diam nonummy nibh </p></div>
                
              </div>          
          </div>
        </div>
        <div className='first-business-element'>
        
            <div className='logo-element'>
              <img src={logo1} alt='logo' />
            </div>
            <div className='element-content'>
              <h4>Your Title</h4>
              <p style={{color:"#fff"}}>Lorem ipsum dolor sit amet,  consectetuer adipiscing elit, sed diam nonummy nibh </p>
            </div>
            <h5 className='business-e' >1</h5>
        </div>
        <div className='secnd-business-element'>
        
            <div className='secnd-logo-element'>
              <img src={logo1} alt='logo' />
            </div>
            <div className='secnd-element-content'>
              <h4>Your Title</h4>
              <p style={{color:"#fff"}}>Lorem ipsum dolor sit amet,  consectetuer adipiscing elit, sed diam nonummy nibh </p>
            </div>
            <h5 className='secnd-business-e' >2</h5>
        </div>
        {/* ////////////////// */}
        <div style={{marginTop:"50px", marginLeft:"600px"}} className='first-business-element'>
        
        <div className='logo-element'>
          <img src={logo1} alt='logo' />
        </div>
        <div className='element-content'>
          <h4>Your Title</h4>
          <p style={{color:"#fff"}}>Lorem ipsum dolor sit amet,  consectetuer adipiscing elit, sed diam nonummy nibh </p>
        </div>
        <h5 className='business-e' >3</h5>
        </div>

        {/* ////////////////// */}
        <div style={{marginTop:"50px", marginLeft:"580px"}} className='first-business-element'>
        
        <div className='logo-element'>
          <img src={logo1} alt='logo' />
        </div>
        <div className='element-content'>
          <h4>Your Title</h4>
          <p style={{color:"#fff"}}>Lorem ipsum dolor sit amet,  consectetuer adipiscing elit, sed diam nonummy nibh </p>
        </div>
        <h5 className='business-e' >4</h5>
        </div>

        {/* ////////////////// */}
        <div style={{marginTop:"50px", marginLeft:"420px"}} className='first-business-element'>
        
        <div className='logo-element'>
          <img src={logo1} alt='logo' />
        </div>
        <div className='element-content'>
          <h4>Your Title</h4>
          <p style={{color:"#fff"}}>Lorem ipsum dolor sit amet,  consectetuer adipiscing elit, sed diam nonummy nibh </p>
        </div>
        <h5 className='business-e' >3</h5>
        </div>
      </div>
    </div>
  )
}

export default BusinessIdea