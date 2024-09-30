import React, { Component } from "react";
import Slider from "react-slick";
import image1 from '../Components/image4.jpg';
import image2 from '../Components/introimg2.webp';
import image3 from '../Components/intropic.webp';

export default class Simple extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear"
    };
    return (
      <div className="simplewrap">
        <div className="container">
          <div>
    
            <Slider {...settings} className="slidesimage">
              <div>
                <h3><img src={image1} alt="" /></h3>
              </div>
              <div>
              <h3><img src={image2} alt="" /></h3>
              </div>
              <div>
              <h3><img src={image3} alt="" /></h3>
              </div>
              <div>
              <h3><img src={image1} alt="" /></h3>
              </div>
              <div>
              <h3><img src={image1} alt="" /></h3>
              </div>
              <div>
              <h3><img src={image1} alt="" /></h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}