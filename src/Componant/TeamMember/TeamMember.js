import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// image
import team1 from "../image/team/team1.png";
import team2 from "../image/vImg.png";
import team3 from "../image/about.png";

export default class MultipleRows extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 1,
      speed: 1500,
      autoplay: true,
      autoplaySpeed: 2000,
      rows: 2,
      slidesPerRow: 3,
    };
    return (
      <div >
        <h1 style={{fontSize:"40px",textAlign:"center",padding:"60px"}}>Our Great Team Member</h1>
        <Slider {...settings}>
          <div className="teamMember">
            <img src={team1} alt="team1" />
          </div>
          <div className="teamMember">
            <img src={team2} alt="team1" />
          </div>
          <div className="teamMember">
            <img src={team3} alt="team1" />
          </div>
          <div className="teamMember">
            <img src={team1} alt="team1" />
          </div>
          <div className="teamMember">
            <img src={team2} alt="team1" />
          </div>
          <div className="teamMember">
            <img src={team3} alt="team1" />
          </div>
          <div className="teamMember">
            <img src={team1} alt="team1" />
          </div>
          <div className="teamMember">
            <img src={team2} alt="team1" />
          </div>
          <div className="teamMember">
            <img src={team3} alt="team1" />
          </div>
          <div className="teamMember">
            <img src={team1} alt="team1" />
          </div>
          <div className="teamMember">
            <img src={team2} alt="team1" />
          </div>
          <div className="teamMember">
            <img src={team3} alt="team1" />
          </div>
        </Slider>
      </div>
    );
  }
}
