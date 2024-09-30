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
import Eur from '../logos/Euroshop.png';

import Captcha2 from "../../captcha2";



const Euroshop = () => {


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
                                <img src={Eur} alt="logo" className="psiLogo" />
                                <h1 className="trade_heading">
                                    EURO SHOP</h1>


                                <span> <i class="fa-solid fa-calendar-days tradeicons"></i>22-Feb to 26-Feb-20244</span>
                                <span><i class="fa-solid fa-location-dot tradeicons"></i>DUSSELDORF Germany</span>

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
                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">Get all exhibition services in one place; at Expo Stand Services for EURO SHOP 2026
                            </h3>


                            <div className="flex-container">


                                <p className='intro-para3 germanpara'>
                                    Even in the digital age, physical stores continue to be a powerful tool for increasing sales. For this reason,<b> Euro Shop </b>    continues to be an increasingly relevant exhibition, serving as a platform for developing modern businesses incorporating the latest technology. The hall is still diverse in the topic as it is lined with store equipment, cash register systems, price display systems, merchandise management systems, lighting concepts, security technology, store equipment, storage facilities, and outdoor advertising.
                                    <br />
                                    <br />

                                    Retailers in more than 140 countries are adjusting their plans for Euro <b>Shop 2026 </b> from February 22th to 26th Feb 2026. You will discover novelty in the 8 dimensions of the fair. In addition, the <b>Euro Shop </b> experience is increasing with the guided tour of the event, the matchmaking program, the lounge, and the <b> EURO SHOP Retail Trade Fair.</b>



                                </p>

                            </div>
                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">A perfect partner for Euro Shop DUSSELDORF 2026
                            </h3>

                            <div className="german_paragraph">

                                <div className="flex-container">


                                    <p className='intro-para3 germanpara'>
                                        At <b>Expo Stand Services, </b>you can browse different types of <b> exhibition stand designs </b> to find the one that suits your stand design ideas. We are one of the few <b>stand builders in Germany, </b>with various stand design types to choose from. All of these can be customized to suit your brand. You will likely find one that corresponds to the design idea of ​​a suitable exhibition stand in Düsseldorf. As an <b> exhibition stand construction company in Europe, </b>it has always been our goal to provide our customers with a hassle-free exhibition experience. To achieve this, we offer a service that sets it apart from other <b>Düsseldorf exhibition stand builders,</b> including additional charges.
                                        <br />
                                        <br />
                                        Exhibits are installed and dismantled at the exhibition hall.
                                        <br />
                                        <br />
                                        We also deliver and store exhibition stands. Moreover, unlike other <b>exhibition stand builders in Düsseldorf,</b> we are familiar with the exhibition industry throughout Europe and have offices near all major exhibition cities.
                                        <br />
                                        <br />


                                        Our local warehouse ensures that the design of the Düsseldorf exhibition stand is delivered on time and any questions are resolved promptly by our office team.
                                        <br />


                                        We provide a complete turnkey solution to meet your exhibition needs.
                                        <br />


                                        Our in-house builds the stand according to the design requirements. We will also create a graphic of the exhibition stand-by printing in-house.
                                        <br />

                                        To meet branding requirements, we will provide a prestigious booth for <b>exhibitions in Düsseldorf.</b>
                                        <br />


                                        Our team of in-house exhibition stand designer experts will create your exhibition stand to differentiate you from your competitors.
                                        <br />
                                        <br />


                                        Choose a bespoke <b>exhibition stand rental </b> package at the most competitive and transparent price. Enjoy a stress-free exhibition trade fair look with a rental stand with comprehensive services from stand design to complete trade fair management. Experience a simple and stress-free exhibition in Düsseldorf with a comprehensive rental solution.

                                    </p>
                                </div>

                            </div>





                            <h3 className="german_para" >One that has it all- Expo Stand Services</h3>

                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>
                                The Expo Stand Services is one of the prominent <b> exhibition stand builders in Düsseldorf.</b> In addition, customers design and establish and establish a secrecy work environment and design and establish estimates.
                                <br />
                                <br />
                                On the other hand, we are starting to create a very creative head to create a <b> custom exhibition design in Düsseldorf </b>with high-quality material to make it elastic, still evoked design. And one of the services we offer, one of the services we offer:
                                <br />
                                <br />
                                <ul class="custom_list">
                                        <li><i class="fa-solid fa-caret-right"></i>Indoor production setting.</li>

                                        <li><i class="fa-solid fa-caret-right"></i>Represents the conceptualization of the topic</li>

                                        <li><i class="fa-solid fa-caret-right"></i>End to end program management</li>
                                        <li><i class="fa-solid fa-caret-right"></i>Display location monitoring.</li>

                                        <li><i class="fa-solid fa-caret-right"></i>Decomposition and shipping.</li>
                                        <li><i class="fa-solid fa-caret-right"></i>Most importantly, our experienced stator and graphic designer’s business-oriented tailor made exhibition is designed to meet the needs of the modular display stand, two 2-responsible stalls, and land pavilions.</li>







                                    </ul>
                                    However, all important points mentioned by customers are called industries.




                                </p>

                            </div>
                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">Why should you contact us for Düsseldorf's main stand contractor?</h3>

                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>
                                The Expo Stand Services team is proficient in-market expertise to realize your brand vision. As a leading exhibition stand designer and <a href="">exhibition stand builder in Düsseldorf,</a>
                               we support our customers by designing high-quality stands according to their brand/business. That aside, we ensure a critical analysis of the requirements of your exhibition stand, so our dedicated team will respond accordingly to give you the exact cost as initially discussed.
                                </p>







                            </div>

                            <h3 className="german_para" >Conclusion::</h3>


                            <p class="para_expertize germanyparastand">
                            In the end, we welcome working with all types of companies and brands of different industries and sizes. Our creative designers create exclusive and lucrative exhibition stand designs, and our craftsmen build the best <b> exhibition stands </b> exactly to the client’s specifications.

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
                                        <textarea name="" id="textger" cols="30" rows="4" placeholder='Description/Message'  {...register("standbudget")} ></textarea>
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
                <CounterUp />
                <Form />
                <Footer />
                <Universe />








            </div>


        </div>
    )
}

export default Euroshop;