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
import Inher from '../logos/Inhorgenta.jpg';
import Ctabuttons from "../../../Ctabuttons";
import Captcha2 from "../../captcha2";





const Inhorgenta = () => {

    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const onSubmit = data => console.log(data);



    return (
        <div className="section">
            	<title>Inhorgenta Munich 2024 | From 16 to 19 Feb</title>
	<meta name="description" content="You can have the jewelry, watch, and gemstone industry focused on a brand by exhibiting at Inhorgenta 2024 Munich with us." />
	<link rel="canonical" href="https://www.expostandservice.com/inhorgenta-munich/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Inhorgenta Munich 2024 Germany" />
	<meta property="og:description" content="You can have the jewelry, watch, and gemstone industry focused on a brand by exhibiting at Inhorgenta 2024 Munich with us." />
	<meta property="og:url" content="https://www.expostandservice.com/inhorgenta-munich/" />
	<meta property="og:site_name" content="Expo Stand Services Sp. z o.o." />
	<meta property="article:publisher" content="https://www.facebook.com/expostandservice" />
	<meta property="article:modified_time" content="2023-10-23T05:57:47+00:00" />
	<meta property="og:image" content="https://www.expostandservice.com/wp-content/uploads/2023/01/inhorgenta-munich-2023-min.jpg" />
	<meta property="og:image:width" content="1300" />
	<meta property="og:image:height" content="535" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@expostandservic" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="3 minutes" />

            <div className=" Psi">

                <div className="container">
                    <div className="row ">
                        <div className="col-3"></div>

                        <div className="col-6 col-m-12">
                            <div className="tradeffect ">
                                <img src={Inher} alt="logo" className="psiLogo" />
                                <h1 className="trade_heading">
                                    INHORGENTA</h1>


                                <span> <i class="fa-solid fa-calendar-days tradeicons"></i>16-Feb to 19-Feb-20</span>
                                <span><i class="fa-solid fa-location-dot tradeicons"></i>MUNICH Germany</span>

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


                            <div className="flex-container">


                                <p className='intro-para3 germanpara'>
                                    The <b>INHORGENTA MUNICH </b>is Europe’s largest platform for jewelry, timepieces, and gemstones, and is the industry’s order and communications platform, reflecting the market’s diversity. Exhibitors from all over the world will showcase their latest products in 6 rooms at Messe Munchen. The trade fair provides an in-depth overview of international trends and developments with its broad supporting program, which includes the INHORGENTA AWARD and the TRENDFACTORY MUNICH. The previous trade show in Munich attracted 1,055 exhibitors from 44 nations and over 26,000 visitors from 85 countries.
                                    <br />
                                    <br />
                                    <b>INHORGENTA MUNICH 2024 </b> is a date to remember! From February 16th to 19th, 2024, Messe Munich will host the world’s leading exhibition for jewelry, timepieces, and gemstones. Munich hosts several international trade fairs that attract visitors from all over the world. <b> INHORGENTA </b>MUNICH is a global marketplace for jewelry, watches, and clocks. Various seminars and conferences will be held during the event to discuss the latest designs and breakthroughs. During these seminars, professionals instruct new firms and designers. An event is a magnificent setting with elegant products from the world’s most renowned designers and experts. Visitors can also take part in a variety of competitions and displays showcasing gems and watches based on current trends from around the world. This event attracts top designers and collectors who come to buy the newest and most unique stones and jewels. For watch and gemstone collectors, this is a must-attend event.
                                    <br />
                                    <br />

                                    At <b>INHORGENTA MUNICH 2024 in Munich, </b>exhibitors from Austria, Switzerland, Italy, Greece, and other countries will display and sell their latest collections to a large number of national and international visitors. The trade show will feature product booths with unique and traditional jewelry pieces, tools, and more in six exhibition areas: Timepieces, Technology & Bijoux, Fine Jewellery, Elegance & Lifestyle, Carat, and Contemporary Design & Vision.



                                </p>

                            </div>
                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">An important aspect of INHORGENTA MUNICH 2024
                            </h3>







                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>
                                    <b>INHORGENTA MUNICH 2024 </b> will feature live demonstrations, workshops, and TRENDFACTORY, a comprehensive lecture program including experienced speakers who will reveal tomorrow’s jewelry and watch trends. A unique event highlight will be the <b>INHORGENTA </b> Award, showcasing the greatest jewelry, timepieces, retail concepts, and designs in eight special categories.







                                </p>

                            </div>
                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">Your exhibiting partner at INHORGENTA MUNICH 2024</h3>

                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>
                                    <b>Expo Stand Services</b>
                                    <b>Expo Stand Services </b>has put in years of devotion and attention to designing, producing, and delivering customized display booths and stands for our loyal clientele to become the premier <a href="">exhibition stand builder in Munich.</a> The industry knowledge we’ve gained has been extremely beneficial in aiding our clients who have chosen Expo Stand Services as their sole exhibition stand design company in Germany.
                                    <br />
                                    <br />

                                    We build creative exhibition architecture with the help of our experienced team that reflects your company and showcases your items in the best possible light while staying within your budget. In Munich, Germany, Expo Stand Services is the most trusted show stand design and exhibition stand builder in Munich.
                                </p>







                            </div>

                            <Ctabuttons />

                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">The Out Stroke</h3>

                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>


                                    If you want to display at <b>INHORGENTA MUNICH 2024 in Munich,</b> Germany, you’ll need to invest in unconventional exhibition booths to ensure that your business gets the attention it deserves. Risking your display presentation by entrusting your stand design to the fingers of mediocre exhibition stand designers isn’t advisable. To make sure excessive go back to your funding you want to rent stands from relied on and reputed <a href="">exhibition stand design company in Germany.</a>
                                    <br />
                                    <br />

                                    In Europe,<b> Expo Exhibition Stands  </b>is counted the readiest and relied on exhibition stand builder in Munich. It is a famous stand design & construction accomplice that gives a huge variety of exhibition stands in Munich and lots of different European cities.
                                 



                                </p>







                            </div>








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
                                        <label for="file-upload" class="custom-file-upload customside">
                                            <i class="fas fa-file-import"></i> Browser..
                                        </label>

                                        <textarea name="" id="textger" cols="30" rows="4" placeholder='Description/Message' required></textarea>
                                        <Captcha2/>
                                      






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
                <CounterUp />
                <Form />
                <Footer />
                <Universe />








            </div>


        </div>
    )
}

export default Inhorgenta;