import React from 'react'
import "./Feedback.css"
import fImg from '../image/fImg1.png'

const Feedback = () => {
  return (
    <div className='feedback'>
     <div className='feed-content'>
     <h1>Our Customer Feedback</h1>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
tempor invidunt ut labore et dolore magna aliquyam </p>

     </div>
  <div className='goggleMap'>
    <iframe className='google-map' src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
  </div>
  <div className='goggleMap-content ' style={{background:"#3323A8"}}>
  <div className="cards" style={{width: " 420px",height:"250px"}}>
  <div className="card-bod">
    <p className="card-text" style={{width: " 420px",padding:"55px 0px", color:"#fff"}} >Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <div className='card-bodys'>
   <div className='fmap-area'>
      <div><img src={fImg}></img></div>
      <div><p style={{color:"#fff"}}>Rakib Hassan</p></div>

    </div>
    <div className='fmap-area'>
      <div><img src={fImg}></img></div>
      <div><p style={{color:"#fff"}}>Rakib Hassan</p></div>

    </div><div className='fmap-area'>
      <div><img src={fImg}></img></div>
      <div><p style={{color:"#fff"}}>Rakib Hassan</p></div>

    </div>
   </div>
  </div>
</div>
  </div>
  </div>
  
  )
}

export default Feedback