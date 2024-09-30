import React from "react";
import '../pages2/germany.css';
import '../Tradeshowinnerpages/trade.css'

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';

import CounterUp from "../../CounterUp";
import Form from "../../Form";
import Footer from "../../Footer";
import Universe from "../../Universe";
import Pap from '../logos/paper.png';

import Captcha2 from "../../captcha2";
import Ctabuttons from "../../../Ctabuttons";





const Paper = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const onSubmit = data => console.log(data);



    return (
        <div className="section">

            <div className=" Psi">

                <div className="container">
                    <div className="row ">
                        <div className="col-3"></div>

                        <div className="col-6 col-m-12">
                            <div className="tradeffect ">
                                <img src={Pap} alt="logo" className="psiLogo" />
                                <h1 className="trade_heading">
                                    PAPERWORLD</h1>


                                <span> <i class="fa-solid fa-calendar-days tradeicons"></i>26th to 30th January 2024</span>
                                <span><i class="fa-solid fa-location-dot tradeicons"></i>FRANKFURT Germany</span>

                                <div>

                                    <Link to="/contactus" class="tradebtn btntrade-3 buttonpop ">Send Your Query to us!</Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-3"></div>

                    </div>
                </div>

            </div>
            <div className="germany-2">
                <div className="container">

                    <div className="row ">
                        <div className="col-8 col-m-12 col-t-12">
                            <h2 className="construction_head2">Exhibit at the Paperworld 2024 Frankfurt Trade Show with Expo Stand Services
                            </h2>


                            <div className="flex-container">


                                <p className='intro-para3 germanpara'>
                                    Messe Frankfurt Paperworld is one of the world’s largest trade shows for the commercial office and stationery industries, with a focus on paper, school supplies, and stationery. The Paperworld 2024 will take place in Frankfurt from the 26th to 30th January 2024.
                                    <br />
                                    <br />

                                    Paperworld – Messe Frankfurt is the world’s most important venue for the international corporate office and stationery sector to develop business. Products linked to stationery, writing instruments, and office supplies are dispersed into two independent venues at Paperworld Messe Frankfurt 2024: stationery trends and imaginative office supplies. On the other hand, while stationery trends will focus on paper and stationery products, Visionary Office will focus on commercial office supplies.


                                </p>

                            </div>
                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">Make It Visible
                            </h3>







                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>

                                    Paperworld is the major worldwide event for stationery and office products, held every year in Frankfurt. The global stationery sector community is already looking forward to Paperworld Frankfurt 2024, after the 2023 appointment was converted to a digital version given the uncertain circumstances surrounding the COVID-19 epidemic. <a href="https://web.archive.org/web/20230329071908/https://www.expostandservice.com/paperworld-2023-frankfurt/"> Paperworld 2024 Frankfurt </a>will once again co-locate with the Christmasworld and Creativeworld fairs as part of one of the world’s major consumer products platforms.
                                    <br />
                                    <br />

                                    The Paperworld in 2024 Frankfurt trade show, which is divided into a commercial Office sector and a Stationery for Private Use sector, offers a diverse range of items to meet every need for every occasion. Thousands of exhibitors will present unique and imaginative offers ranging from branded office supplies to paper, school items, and writing utensils for everyday personal use, giving you an inside glimpse at all forthcoming industry trends for the coming year. Paperworld Frankfurt 2024 typically attracts large crowds, with the most recent edition attracting 30,000 trade visitors from over 140 countries.




                                </p>

                            </div>
                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">Figures From Paperworld Germany</h3>

                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>
                                Last year, a total of 1,581 exhibitors from 69 nations participated in the trade show. When it comes to the number of attendees, the show had roughly 29,266 people, with 9,171 visitors from Germany and 20,095 tourists from other countries coming to see the products and advances in the field of paper goods.

                                </p>







                            </div>
                            <Ctabuttons />

                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">Protection And Hygiene Measures At Paperworld Frankfurt 2024</h3>

                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>





                                    <ul class="custom_list">
                                        <li><i class="fa-solid fa-caret-right"></i>Hygiene and prevention: At Paperworld 2024, the general obligation of hygiene and prevention will be strictly enforced by wearing face masks throughout the show, during stand exhibition.</li>

                                        <li><i class="fa-solid fa-caret-right"></i>Waiting Area & Stand Construction: According to the show organizers’ safety philosophy, the waiting area to be built within the <a href="">exhibition stand at Frankfurt </a>Messe Paperworld shall not have closed ceilings.</li>

                                        <li><i class="fa-solid fa-caret-right"></i>Conference rooms and the ground levels of double-story stands will only be allowed in an open configuration to allow for proper air movement and complete ventilation.</li>

                                        <li><i class="fa-solid fa-caret-right"></i>Fresh Breeze Air Systems: Throughout the Paperworld trade show in 2024, high-performance air-handling systems will be placed throughout the halls to allow natural air to flow inside while making it safe to breathe.</li>

                                       




                                        The battle for the best exhibition stands near Frankfurt Messe Paperworld 2024 will be fierce. With Expo stand services, you may get discounted exhibition stands for Paperworld Frankfurt 2024 if you register early. We have relationships with exhibition builder in Frankfurt of different types throughout the city, allowing us to exceed our customers’ expectations. Send us an email with your choices and we’ll send you a free tailored exhibition stand offer!

                                    </ul>

                                </p>







                            </div>

                           




                          
                            <h3 className="german_para" >Why You Should Trust Expo Stand Services?</h3>


                            <p class="para_expertize germanyparastand">
                            The battle for the best exhibition stands near Frankfurt Messe Paperworld 2024 will be fierce. With Expo stand services, you may get discounted exhibition stands for Paperworld Frankfurt 2024 if you register early. We have relationships with exhibition builder in Frankfurt of different types throughout the city, allowing us to exceed our customers’ expectations. Send us an email with your choices and we’ll send you a free tailored exhibition stand offer!

                            </p>







                        </div>
                        <div className="col-4 col-m-12">
                            <div className="cities_box" data-aos="zoom-in-left" data-aos-duration="2000">
                                <div className="cities">
                                    <div className="cities_head">
                                        <h4 className="cities_hd">UPCOMING TRADE SHOWS IN EUROPE</h4>
                                    </div>
                                    <div className="cities_links">
                                        <Link to='/barcelona' className="cities_item">PSI</Link>
                                        <Link to='/bologna' className="cities_item">HEIMTEXTIL</Link>
                                        <Link to='/bermingham' className="cities_item">IMM</Link>
                                        <Link to='/cologne' className="cities_item">LIVING KITCHEN</Link>
                                        <Link to='/dusseldorf' className="cities_item">BOOT</Link>
                                        <Link to='/frankfurt' className="cities_item">FITUR</Link>
                                        <Link to='/geneva' className="cities_item">PAPER WORLD</Link>
                                        <Link to='/hannover' className="cities_item">AMBIENTE</Link>
                                        <Link to='/hamburg' className="cities_item">TOYFAIR</Link>
                                        <Link to='/milan' className="cities_item">ISH</Link>
                                        <Link to='/munich' className="cities_item">BIOFACH</Link>
                                        <Link to='/madrid' className="cities_item">ISE</Link>
                                        <Link to='/london' className="cities_item">FRUIT LOGISTICA</Link>
                                        <Link to='/nurmerg' className="cities_item">BIOFACH</Link>
                                        <Link to='/stuttgart' className="cities_item">EURO SHOP</Link>
                                        <Link to='/stuttgart' className="cities_item">ICE</Link>
                                        <Link to='/stuttgart' className="cities_item">IDS</Link>
                                        <Link to='/stuttgart' className="cities_item">AAD</Link>

                                    </div>
                                </div>
                            </div>


                            <div id="stickbox" className="register germanregister">

                                <h2 className="germanreg_head">CONTACT US</h2>

                                <form action="" id='form germanform' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>


                                    <div className="user-details sideform">
                                        <div className="input-box ginput">
                                            <i className='fa fa-user  icon'></i>
                                            <input type="text" {...register("contactname")} placeholder='Contact Name' className="germaninput" />
                                        </div>
                                        <div className="input-box ginput">
                                            <i class="far fa-building icon"></i>
                                            <input type="text" {...register("companyname")} placeholder='Company Name' />
                                        </div>
                                        <div className="input-box ginput">
                                            <i className="fas fa-envelope-open-text icon"></i>
                                            <input type="text" {...register("emailaddress")} placeholder='Email Address' />
                                        </div>
                                        <div className="input-box ginput">
                                            <i class="fas fa-mobile-alt icon"></i>
                                            <input type="text" {...register("mobilephone", { required: true, maxLength: 10 })} placeholder='Mobile / Phone  ' />
                                            {errors.mobilephone?.type === "required" && "Mobile Number is Required"}
                                            {errors.mobilephone?.type === "maxLength" && "Max Length Exceeds"}
                                        </div>
                                        <div className="input-box ginput">
                                            <i class="fas fa-store-alt icon"></i>
                                            <input type="text" {...register("exhibitionname")} placeholder='Exhibition Name' />
                                        </div>
                                        <div className="input-box ginput">
                                            <i class="fas fa-city icon  "></i>
                                            <input type="text" {...register("eventcity")} placeholder='Event City' />
                                        </div>
                                        <div className="input-box ginput">
                                            <i class="fas fa-share-alt icon"></i>
                                            <input type="text" {...register("standdimensionarea")} placeholder='Stand Dimension & Area' />
                                        </div>
                                        <div className="input-box ginput">
                                            <i class="fas fa-hand-holding-usd icon"></i>
                                            <input type="text" {...register("standbudget")} placeholder='Stand Budget' />
                                        </div>
                                        <textarea name="" id="textger" cols="30" rows="4" placeholder='Description/Message' required></textarea>
                                        <label for="file-upload" class="custom-file-upload customside">
                                            <i class="fas fa-file-import"></i> Browser..
                                        </label>
                                        <Captcha2 />






                                    </div>
                                    <div className="german_buttons">
                                        <input id="file-upload" type="file" />
                                        {/* <input type="submit"  placeholder="send"/> */}
                                        <button className='form-btn germanbtn'>Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Ctabuttons />
                <CounterUp />
                <Form />
                <Footer />
                <Universe />








            </div>


        </div>
    )
}

export default Paper;