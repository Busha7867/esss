import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../Aboutdroppages/Testimonial.css';
import { Pagination, Navigation } from 'swiper/modules';
import Mon from '../Aboutdroppages/img9.png';
import Cadmos from '../Aboutdroppages/img13.png';
import Iraundi from '../Aboutdroppages/img3.png';
import Mambia from '../Aboutdroppages/img5.png';
import Cathlen from '../Aboutdroppages/img2.png';
import Tokidoki from '../Aboutdroppages/Tokidoki.png';
import Matrax from '../Aboutdroppages/img6.png';
import Maxbill from '../Aboutdroppages/img7.png';
import General from '../Aboutdroppages/img12.png';

import '../Aboutdroppages/team.css';

export default function TestSwiperSlider() {
    return (
        <>
            <div className="swiperTest">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12 col-t-12 col-d-12">
                            <Swiper
                                pagination={{
                                    type: 'fraction',
                                }}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <img src={Mon} alt="" className="testi-image" />
                                                </div>
                                                <p>We've commissioned Expo Stand Services to build our booth at the Spielwarenmesse toy fair in Germany on February 2023. It was our first time working with them, and the results exceeded our expectations. From continuous on and off-site smooth and professional communication to highly detailed construction work. As a designer who usually cannot compromise on quality and details, we had a booth to be proud of, thanks to Expo Stand Services. Highly recommended. We will surely work again with Expo Stand Services! </p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">Shanghai Montasen</span>
                                                    <span className="job">Exhibition - Spielwarenmesse 2023</span>
                                                    <div className="flex1">

                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <img src={Cadmos} alt="" className="testi-image" />
                                                </div>
                                                <p>Expo Stand Services did great with our booth at Airspace World 2023 in Geneva. The personnel are very professional and supportive. We will keep them in mind also for next year's exhibition. </p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">
                                                        Cadmos</span>
                                                    <span className="job">Airspace World Geneva 2023</span>
                                                    <div className="flex1">

                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <img src={Iraundi} alt="" className="testi-image" />
                                                </div>
                                                <p>Last year we started working with Expo Stand Services. And we did 2 events with them. The execution was to our satisfaction, and the stands were as we had expected. Very good service and attention before as well as after the shows. We are working again with them to build our stands at Hannover Fair and inner-lift this year. </p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">IRAUNDI</span>
                                                    <span className="job">Hannover Messe 2023</span>
                                                    <div className="flex1">

                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <img src={Mambia} alt="" className="testi-image" />
                                                </div>
                                                <p>Thank you so much for the lovely booth at Equiphotel Paris last November 2022, we had some problems, but the staff responded well and helped a lot. A big thank you, Lukasz, for your support, especially during the weekends 🙂 </p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">Mamiba</span>
                                                    <span className="job">Exhibition – Equip Hotel</span>
                                                    <div className="flex1">

                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <img src={Cathlen} alt="" className="testi-image" />
                                                </div>
                                                <p>We really appreciated the quality service of Expo Stand Services for organizing a fair a few weeks ago. Communication went smoothly before, during, and after the event, and I recommend this company. </p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">Cathelain</span>
                                                    <span className="job">Exhibition - Valve world</span>
                                                    <div className="flex1">

                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <img src={Tokidoki} alt="" className="testi-image" />
                                                </div>
                                                <p>We had a fantastic experience working with Expo Stand Services. Our booth design and ultimate show presentation were spot on to our requests. They have a bright and talented team that greatly impacts our overall presentation. </p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">Tokidoki</span>
                                                    <span className="job">Exhibition - Toy Fair</span>
                                                    <div className="flex1">

                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <img src={Matrax} alt="" className="testi-image" />
                                                </div>
                                                <p>Our company had a great experience with Expo Stand Services on Tire Cologne 2022. Very professional team, especially project manager Andrew. Thanks to them for our amazing exhibition stand!</p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">Matrax</span>
                                                    <span className="job">Exhibition – Tire Cologne 2022
                                                    </span>
                                                    <div className="flex1">

                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">

                                                <div className="backs">


                                                    <img src={Maxbill} alt="" className="testi-image" />
                                                </div>

                                                <p>We had a great experience in preparation for The Enlit Europe in Frankfurt with Expo Stand Services. I am pleased to mention that the company has successfully worked to meet commitments as per the Action plan. So, we will gladly contact this company for the next exhibition preparation services!</p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">Maxbill</span>
                                                    <span className="job">Exhibition – Enlit Europe 2022
                                                    </span>
                                                    <div className="flex1">

                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>

                                    <div className="testimonials">
                                        <div className="testi-content">
                                            <div className="slide">
                                                <div className="backs">

                                                    <img src={General} alt="" className="testi-image" />
                                                </div>
                                                <p>Wonderful team. Fantastic finish! We at General Paint Co. enjoyed working with the team at Automechanika Frankfurt. They were very professional and finished in advance even! I will certainly work with them again! </p>
                                                <i class='bx bxs-quote-alt-left quote-icon'></i>
                                                <div className="details">
                                                    <span className="name">General Paint</span>
                                                    <span className="job">Exhibition – Automechanika 2022
                                                    </span>
                                                    <div className="flex1">

                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star-half-stroke"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
            </div>
        </>
    );
}
