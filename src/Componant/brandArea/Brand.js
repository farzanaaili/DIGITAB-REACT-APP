import React from 'react'
// image-import-area
import Slide1 from '../image/heineken.png'
import Slide2 from '../image/adidas.png'
import Slide3 from '../image/chanel.png'
import Slide4 from '../image/fritolay.png'
import Slide5 from '../image/at$t.png'



import "./Brand.css"

const Brand = () => {
  return (
    <div className='brand-logo'>
       
          <a href="/"><img src={Slide1} alt="Slide1" /></a> 
          <a href="/"><img src={Slide2} alt="Slide2" /></a>
          <a href="/"><img src={Slide3} alt="Slide3" /></a>
          <a href="/"><img src={Slide4} alt="Slide4" /></a>
          <a href="/"><img src={Slide5} alt="Slide1" /></a> 
          
          
       
    </div>
      
    
  )
}

export default Brand


