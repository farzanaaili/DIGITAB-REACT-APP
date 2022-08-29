import React from 'react'
import YoutubeEmbed from '../VideoArea/YoutubeEmbed'
import './Video.css'

const Video = () => {
  return (
    <div className='row'>
        <div className='video-area'>
            <div className='video-img'></div>
            <div className='video-content'>
         <div className='col-md-3'>
                <h1>500</h1>
                <p style={{color:"#fff"}}>PROJECT COMPLATE</p>
            </div>
            <div className='col-md-3'>
                <h1 >175</h1>
                <p style={{color:"#fff"}}>HAPPY CUSTOMER</p>
            </div>
            <div  className='col-md-3'>
                <h1>5</h1>
                <p style={{color:"#fff"}}>OUR PARTNER</p>
            </div>
            <div className='col-md-3'>
                <h1>9/10</h1>
                <p style={{color:"#fff"}}>Average Rating</p>
            </div>
         </div>
         <div className='youtube'>
                <YoutubeEmbed  embedId="rokGy0huYEA"  />
         </div>
        </div>
    </div>
  )
}

export default Video