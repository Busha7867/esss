import React from "react";
import '../pages2/germany.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import CounterUp from "../../CounterUp";
import Form from "../../Form";
import Footer from "../../Footer";
import Captcha2 from "../../captcha2";

import AOS from 'aos';
import 'aos/dist/aos.css';
// import '../ArroundWorld.css';
// import GermanyVideo from '../pages2/video/germanyworld.mp4';




const Italy = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const onSubmit = data => console.log(data);



    return (
        <div className="section">
            <title>Exhibition Stand Design Company In Italy | Expostandservices</title>
	<meta name="description" content="Go creative with Expo stand services, an award-winning exhibition stand design company in Italy. We offer exhibition design in Italy." />
	<link rel="canonical" href="https://www.expostandservice.com/exhibition-stand-design-company-in-italy/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Exhibition stand design company in Italy" />
	<meta property="og:description" content="Go creative with Expo stand services, an award-winning exhibition stand design company in Italy. We offer exhibition design in Italy." />
	<meta property="og:url" content="https://www.expostandservice.com/exhibition-stand-design-company-in-italy/" />
	<meta property="og:site_name" content="Expo Stand Services Sp. z o.o." />
	<meta property="article:publisher" content="https://www.facebook.com/expostandservice" />
	<meta property="article:modified_time" content="2023-10-26T06:51:06+00:00" />
	<meta property="og:image" content="https://www.expostandservice.com/wp-content/uploads/2023/03/italy-min.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="540" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@expostandservic" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="4 minutes" />

            <div className="germany-1 italy-1">
                {/* <video src={GermanyVideo} autoPlay muted className="gervideo"></video> */}
                <div className="container">
                    <div className="row ">
                        <div className="col-4"></div>
                        <div className="col-4 col-m-12 col-t-12 col-d-12">
                            <div className="glassEffect">
                                <h1 className="glass_headinggermany">Italy</h1>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>

            </div>
            <div className="germany-2">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-m-12 col-t-12">
                            <h2 className="germany_head">Expo Stand Services - Your Reliable Exhibition Stand Design Company In Italy<i class="fas fa-globe-europe"></i></h2>
                        </div>

                    </div>
                    <div className="row ">
                        <div className="col-8 col-m-12 col-t-12 col-d-12">


                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>If you’re looking for an exhibition stand design company in Italy, or a reliable exhibition stand contractor in Italy, then you have just stumbled upon the right place. We, expo stand services, design engaging tailor-made exhibition stands and booths in Italy and other cities of Italy, keeping your business goals and pain point in mind. Whether you want to increase footfall on your booth, generate sales leads, host clients, launch or display your brands and products or simply want some media coverage, expo stand services is the best exhibition stand builder in Italy to help you get ‘right there’.






                                </p>

                            </div>
                            <h3 className="german_para" >Full Range Of Services</h3>

                            <p className='intro-para3 germanpara'>
                                We offer exhibition booth design in Italy that is simple, easy to set up, and stress-free. We provide turnkey services from initial concept to designing and manufacturing, stand graphics to shipping, warehousing to transportation, installation and dismantling your stand, we offer end-to-end services to ensure a hassle-free exhibition experience and high return on investment. We offer expert guidance on selection of right stands and free design services that match your branding and budget, without hidden charges.
                            </p>
                            <h3 className="german_para" >Our Team</h3>

                            <p className='intro-para3 germanpara'>
                                We are a team of creative thinkers and highly qualified professionals, who are ready to work closely with you to make your exhibition a great success. Whether you’re looking for an exhibition stand builder in Verona or  <a href="">exhibition booth builder in Milan,</a> we are just a phone call away. Or, you can check out our online portal to get in touch with us in seconds.

                                <br />
                                <br />
                                Here are the reasons why you should invest in expo stand services:

                                <div className="flex-container">

                                    <ul class="custom_list">
                                        <li><i class="fa-solid fa-caret-right"></i>Expo stand services help you boost your exhibition presence by offering interactive exhibition stands and booths at competitive prices. </li>

                                        <li><i class="fa-solid fa-caret-right"></i>Our economical all-inclusive packages comprise turnkey services from designing, manufacturing, warehousing, logistics to installation, dismantling and project management. </li>

                                        <li><i class="fa-solid fa-caret-right"></i>We help you generate sales leads. Check out our portfolio to see some successful projects.</li>

                                        <li><i class="fa-solid fa-caret-right"></i>Our prices are transparent and budget-friendly and include no hidden charges..</li>

                                        <li><i class="fa-solid fa-caret-right"></i>Our stands will help generate valuable sales leads that your sales department can use to engage prospects.</li>

                                        <li><i class="fa-solid fa-caret-right"></i>We have thousands of pre-designed templates to choose from. It will help ease the selection and order process.</li>

                                        <li><i class="fa-solid fa-caret-right"></i>We provide bespoke exhibition stands and booths that replicate your corporate identity..</li>

                                        <li><i class="fa-solid fa-caret-right"></i>We offer a wide range of custom printing solutions so you can add images, artwork, slogans, texts, clip arts, etc.</li>

                                        <li><i class="fa-solid fa-caret-right"></i>Our expert team comprises strategists, creative designers, project managers, printing experts, and product specialists. They all work in tandem to make your exhibition experience seamless in Italy.</li>




                                    </ul>


                                </div>
                            </p>


                            <div className="request_quote" data-aos="fade-right" data-aos-duration="2000">
                                <p className="rqpara-1">Just For You</p>
                                <p className="rqpara-2">To have an elevated presence at your next exhibit in Dubai.</p>

                                {/* <Link to='/'>Reaquest A Quote</Link> */}
                                <Link class="cta">
                                    <span>Reaquest A Quote</span>
                                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                                        <path d="M1,5 L11,5"></path>
                                        <polyline points="8 1 12 5 8 9"></polyline>
                                    </svg>
                                </Link>

                            </div>


                            <h3 className="german_para" >24 Hours Expert Guidance And Assistance</h3>

                            <p class="para_expertize germanyparastand">Our upfront consultation development process makes it easy for you to get the answers you need. Our expert designers and manufacturers work closely with you through every step of planning and execution. We make your exhibiting experience hassle-free for you so you can focus on attracting prospects instead of wasting time on adjusting your stands and booths.
                            </p>


                            <h3 className="german_para" >A Word Of Appreciation For Our Customers</h3>
                            <p className='intro-para3 germanpara'>
                                At expo stand services, a leading <a href="">exhibition design company Bologna, </a>we are proud to say that we have the most satisfied customers in the industry, and our dedicated approach to help our clients build lasting brand impressions is priceless. We have served their exhibiting needs for quite a long time. We don’t expect you to take our word at face value, just go through our online portal and see with your own eyes what our esteemed customers have to say about us.

                                Not just exhibition stands, we offer many services in different cities of Italy. They include trade show booth design in Italy, exhibition booth design in Italy, <a href="">exhibition stand builder in Verona, </a>exhibition booth builder in Milan, and many more.  
                            </p>



                        </div>
                        <div className="col-4 col-m-12 col-t-12 col-d-12">
                            <div className="cities_box" >
                                <div className="cities">
                                    <div className="cities_head">
                                        <h4 className="cities_hd">MAJOR EXHIBITING COUNTRY</h4>
                                    </div>
                                    <div className="cities_links">
                                        <Link to='/germany' className="cities_item">Germany</Link>
                                        <Link to='/germany' className="cities_item">India</Link>
                                        <Link to='/germany' className="cities_item">USA</Link>
                                        <Link to='/germany' className="cities_item">UAE</Link>
                                        <Link to='/germany' className="cities_item">UK</Link>
                                        <Link to='/germany' className="cities_item">France</Link>
                                        <Link to='/germany' className="cities_item">China</Link>
                                        <Link to='/germany' className="cities_item">Italy</Link>
                                        <Link to='/germany' className="cities_item">Thailand</Link>
                                        <Link to='/germany' className="cities_item">Switzerland</Link>
                                        <Link to='/germany' className="cities_item">Spain</Link>
                                        <Link to='/germany' className="cities_item">Netherlands</Link>
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

                                        <textarea name="" id="textger" cols="30" rows="4" placeholder='Description/Message'></textarea>
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








            </div>


        </div>
    )
}

export default Italy;