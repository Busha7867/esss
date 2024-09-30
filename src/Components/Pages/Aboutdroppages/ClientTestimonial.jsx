import React from "react";
import Logo1 from '../Aboutdroppages/img2.png';
import Logo2 from '../Aboutdroppages/img3.png';
import Logo3 from '../Aboutdroppages/img4.png';
import Logo4 from '../Aboutdroppages/img1.png';
import Logo5 from '../Aboutdroppages/img6.png';
import Bigimage from '../Aboutdroppages/image4.jpg';
import '../Aboutdroppages/team.css';
import Max from '../Aboutdroppages/maxbill.jpg'
import Paul from '../Aboutdroppages/Paula.webp'
import Swiper from 'swiper';
// import Swiper styles
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TestSwiperSlider from "./TestSwiperSlider";
import CounterUp from '../../CounterUp';
import Form from '../../Form';
import Footer from '../../Footer';
import Universe from "../../Universe";

export default function ClientTestimonial() {


    return (
        <div className="clienttestimonial_section">


            <div className="testimonial_1">
                <div className="container">
                    <div className="row">
                        <div className="col-7 col-m-12 col-t-7 col-d-7">
                            <div className="mainclient_content">
                                <h1>Feedback ?</h1>
                                <p>The greatest are already with us, <br />Lets get together?</p>
                            </div>
                            <div className="testimonial">
                                <div className="onetestimonial">
                                    <img src={Max} alt="" className="testiimage" />
                                    <div className="flex1">
                                        <span>Maxbill</span>
                                        <p>Happy Client </p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                </div>
                                <div className="twotestimonial">
                                    <img src={Paul} alt="" className="testiimage" />
                                    <div className="flex1">
                                        <span>Paula</span>
                                        <p>Happy Client</p>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star-half-stroke"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 col-m-12 col-t-5 col-d-5">
                            <div className="clientlogo">

                                <img src={Logo1} alt="" className="client_logo1" />

                                <img src={Logo2} alt="" className="client_logo2" />
                                <img src={Logo3} alt="" className="client_logo3" />
                                <img src={Logo5} alt="" className="client_logo4" />
                                <img src={Logo4} alt="" className="client_logo5" />

                            </div>
                            <img src={Bigimage} alt="" className="big_image" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="testimonial_2">
                <div className="container">
                 
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4 col-m-12 col-t-12 col-d-12">
                            <h2 className="test_heading">Client Testimonials</h2>
                        </div>
                        <div className="col-4"></div>
                    </div>
                    {/* <TestiMonial/> */}
                    <TestSwiperSlider/>
                  
                    {/* <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                             <div className="testimonials">
                                <div className="testi-content">
                                    <div className="slide">

                                        <img src={Max} alt="" className="testi-image" />
                                        <p>We've commissioned Expo Stand Services to build our booth at the Spielwarenmesse toy fair in Germany on February 2023. It was our first time working with them, and the results exceeded our expectations. From continuous on and off-site smooth and professional communication to highly detailed construction work. As a designer who usually cannot compromise on quality and details, we had a booth to be proud of, thanks to Expo Stand Services. Highly recommended. We will surely work again with Expo Stand Services! </p>
                                        <i class='bx bxs-quote-alt-left quote-icon'></i>
                                        <div className="details">
                                            <span className="name">Shanghai Montasen</span>
                                            <span className="job">Exhibition - Spielwarenmesse 2023</span>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                          
              
                        </div>
                        <div className="col-2"></div>
                    </div> */}
                 
                </div>
            </div>
            <CounterUp/>
            <Form/>
            <Footer/>
            <Universe/>

            
        </div>
        
    )
}
