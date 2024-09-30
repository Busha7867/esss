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
import Ambi from '../logos/ambin.png';

import Captcha2 from "../../captcha2";
import Ctabuttons from "../../../Ctabuttons";





const Ambin = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const onSubmit = data => console.log(data);



    return (
        <div className="section">
            <title>Ambiente Frankfurt 2024 Germany Trade Show</title>
            <meta name="description" content="If you are into consumer goods, be it a hobby or a profession, visit Ambiente 2024 Frankfurt. It is a must-visit place for you!" />
            <link rel="canonical" href="https://www.expostandservice.com/ambiente-frankfurt/" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="article" />
            <meta property="og:title" content="Ambiente Frankfurt 2024 Germany" />
            <meta property="og:description" content="If you are into consumer goods, be it a hobby or a profession, visit Ambiente 2024 Frankfurt. It is a must-visit place for you!" />
            <meta property="og:url" content="https://www.expostandservice.com/ambiente-frankfurt/" />
            <meta property="og:site_name" content="Expo Stand Services Sp. z o.o." />
            <meta property="article:publisher" content="https://www.facebook.com/expostandservice" />
            <meta property="article:modified_time" content="2023-10-19T12:33:25+00:00" />
            <meta property="og:image" content="https://www.expostandservice.com/wp-content/uploads/2022/03/Ambiente-2023.jpg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="600" />
            <meta property="og:image:type" content="image/jpeg" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@expostandservic" />
            <meta name="twitter:label1" content="Est. reading time" />
            <meta name="twitter:data1" content="4 minutes" />

            <div className=" Psi">

                <div className="container">
                    <div className="row ">
                        <div className="col-3"></div>

                        <div className="col-6 col-m-12">
                            <div className="tradeffect ">
                                <img src={Ambi} alt="logo" className="psiLogo" />
                                <h1 className="trade_heading">
                                    AMBIENTE</h1>


                                <span> <i class="fa-solid fa-calendar-days tradeicons"></i>26 to 30 January 2024</span>
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
                            <h2 className="construction_head2">Ambiente 2024 Is A Place To Hook The Audience On Your Brand
                            </h2>


                            <div className="flex-container">


                                <p className='intro-para3 germanpara'>
                                    Ambiente is a leading platform for the customer goods industry. Ambiente Frankfurt 2024 is slated from 26th January to 30th January 2024 in Frankfurt am Main. It is an exhibition that will bring together the culture, art, trends, and products of the consumables industry, such as kitchen trends, kitchen cabinets, contemporary designer tables, tabletop, housewares, and others.
                                    Ambiente Frankfurt 2024 is a concrete source of inspiration for consumer market trends and a dynamically developing market. Every edition of Ambiente Germany Frankfurt exceeds expectations in terms of internationality and participation. Still, in 2024, the new one-stop shop concept will delight shoppers with a unique variety of new business impulses.
                                    <br />
                                    <br />

                                    The <a href="https://ambiente-frankfurt.blogspot.com/"> Ambiente Frankfurt 2024 </a>has been transformed into a completely digitalized event. The presentation, traditionally divided into “Eating Environment,” “Life,” and “Giving,” is now enriched with a new “Work” section, which offers an updated overview of the post-pandemic world of work. This trade show will be accompanied by presentations, competitions, and award ceremonies to reflect the dynamics of the consumer goods industry. The trio of exhibitions, which almost 155,000 trade visitors will attend, will be another effective and efficient meeting canter that connects successful international companies from all sectors.

                                </p>

                            </div>
                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">More Information About Ambiente Frankfurt 2024
                            </h3>







                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>

                                    Ambiente 2024 will offer consumer goods with the most modern ordering options. Here, visitors can also experience and learn about the Future of Work and Circular Materials for Future Dining program to highlight all spectrums of the world of consumer goods and focus on trends. You can use an amazing platform to close important business deals and get the most relevant information. The concept concerns internal and external design solutions for buildings, offices, cruise ships, and hotels. This exhibition will help you meet potential business partners and suppliers/customers in one place! With the latest developments and digital transformation of the consumer goods industry towards ethical production, the revival of traditional crafts – environment is very important! Ambiente is an internationally renowned event. This trade fair is known for its international profile, as more than 80% of all exhibitors and 40% of all visitors are foreign and cross-border guests.
                                    <br />
                                    <br />

                                    So, you are planning to exhibit at Ambiente 2024 and want a good exhibition stand at Ambiente Frankfurt 2024. In that case, you have come to the right place: We at <a href=""> Expo Stand Services </a> offer you reliable exhibition stand designs according to your wishes. Choose us to discover an unstoppable creative exhibit with a passion for excellence!



                                </p>

                            </div>

                            <Ctabuttons />














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

export default Ambin;