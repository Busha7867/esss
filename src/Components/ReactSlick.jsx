import React, { Component } from 'react'
import '../Components/ArroundWorld.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from '../Components/introimg3.webp';
import { Link } from 'react-router-dom';



export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            slidesToScroll: 1,
            autoplay:true,
            infinite: true,
            centerPadding: "80px",
            slidesToShow: 3,
            speed: 2000,
            autoplaySpeed:1000,
            cssEase: "linear"

        };
        return (
            <div>

                <Slider {...settings}>
                    <Link to='/custom stands'>
                        <div className='slick-box'>

                        <img src={Img1} alt='img' />
                        <div className="slick-heading">
                            <h3>Custom Stands</h3>
                        </div>
                    </div></Link>

                    <Link to="modular">
                        <div className='slick-box'>
                            <img src={Img1} alt='img' />
                            <div className="slick-heading">
                                <h3>Modular Stands</h3>
                            </div>
                        </div>
                    </Link>

                    <Link to="/Country">
                        <div className='slick-box'>

                        <img src={Img1} alt='img' className='h3' autoplay loop />
                        <div className="slick-heading">
                            <h3>Country Pavalion</h3>
                        </div>

                    </div>
                    </Link>
                    <Link to="decker">
                        <div className='slick-box'>

                        <img src={Img1} alt='img' />
                        <div className="slick-heading">

                            <h3>Double Decker</h3>
                        </div>

                    </div>
                    </Link>

                </Slider>
            </div>
        );
    }
}