import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Components/ArroundWorld.css'
import Img1 from '../Components/Pages/majorcities/Liepzig.jpg'
import Img2 from '../Components/Pages/majorcities/Liepzig.jpg'
import Img3 from '../Components/Pages/majorcities/Liepzig.jpg'
import Img4 from '../Components/Pages/majorcities/Liepzig.jpg'

import Img6 from '../Components/Pages/majorcities/Liepzig.jpg'
import Img7 from '../Components/Pages/majorcities/Liepzig.jpg'
import Img8 from '../Components/Pages/majorcities/Liepzig.jpg'
import Img9 from '../Components/Pages/majorcities/Liepzig.jpg'

class LogoSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
        };
        return (
            <div className="bind">

                <div className="logo-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-4"></div>
                            <div className="col-4 col-m-12 col-l-12"><h2 className='slider-heading'>Exhibiting Cities</h2></div>
                            <div className="col-4"></div>
                        </div>
                        <div className="mainContainer">
                            <Slider {...settings}>
                                <div className="container">
                                    <img src={Img1} />
                                </div>
                                <div className="container">
                                    <img src={Img2} />
                                </div>
                                <div className="container">
                                    <img src={Img3} />
                                </div>
                                <div className="container">
                                    <img src={Img4} />
                                </div>
                                <div className="container">
                                    <img src={Img6} />
                                </div>
                                <div className="container">
                                    <img src={Img7} />
                                </div>
                                <div className="container">
                                    <img src={Img8} />
                                </div>
                                <div className="container">
                                    <img src={Img9} />
                                </div>
                                
                            </Slider>
                        </div>
                    </div>
                </div>


                {/* <div className="logo-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <div className="projects">
                                    <ul className='projects-lists'>
                                        <li className='projects-links'>750+ <span>Clients</span></li>
                                        <li className='projects-links'>750+ <span>Projects</span></li>
                                        <li className='projects-links'>750+ <span>Continents</span></li>
                                        <li className='projects-links'>750+ <span>Exhibitions</span></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div> */}


            </div>



        );
    }
}


export default LogoSlider