import React from "react";
import '../Pages/Major.css';
import contactimg from '../Pages/contactimg.png';
import Handshake from '../Pages/handshake.png';
import { useForm } from 'react-hook-form';
import CounterUp from "../CounterUp";
import Form from "../Form";
import Footer from "../Footer";
import Universe from "../Universe";
import Poland from '../Pages/pages2/poland.jpg';
import German from '../Pages/pages2/german.webp';
import London from '../Pages/pages2/London.webp';
import USA from '../Pages/majorcities/usa.jpg';
import UAE from '../Pages/majorcities/UAE.jpg';
import IndiaGate from '../Pages/majorcities/IndiaGate.jpg';
import { Helmet } from "react-helmet";



const Contact = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const onSubmit = data => console.log(data);




    return (
        <div className="section">
            <Helmet>

            <title>Exhibition stand design company in Germany | Expo stand service</title>
	<meta name="description" content="Exhibition stand design company in Germany, Exhibition stand contractor, tread show booth design company in USA" />
	<link rel="canonical" href="https://www.expostandservice.com/contact-us/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Contact Us" />
	<meta property="og:description" content="Exhibition stand design company in Germany, Exhibition stand contractor, tread show booth design company in USA" />
	<meta property="og:url" content="https://www.expostandservice.com/contact-us/" />
	<meta property="og:site_name" content="Expo Stand Services Sp. z o.o." />
	<meta property="article:publisher" content="https://www.facebook.com/expostandservice" />
	<meta property="article:modified_time" content="2023-09-12T06:27:37+00:00" />
	<meta property="og:image" content="https://www.expostandservice.com/wp-content/uploads/2021/01/WhatsApp-Image-2021-01-03-at-8.48.16-PM.jpeg" />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="379" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@expostandservic" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="1 minute" />
            </Helmet>

            <div className="contact-1">
                

                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12 col-t-12">
                            <div className="glassy">
                                <h1 className="contact_head">WE'RE AlWAYS HAPPY TO HELP <img src={Handshake} alt="" /></h1>
                                <p className="contact_para">Get in touch with us today <img src={contactimg} alt="" /> </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="contact-2">
                <div className="container">
                   
                    <div className="row">
                        <div className="contact_flex">
                            <div className="contact_card">
                                {/* <i class="fa-solid fa-location-arrow"></i> */}

                                <div className="imgbx">
                                    <i class="fa-solid fa-map-pin contacticon"></i>
                                    <img src={Poland} alt="" className="card_images" />
                                    <p className="card_para">POlAND</p>
                                </div>
                                <div className="contact_content">
                                    <ul className="Contact-list">

                                        <li className='contact-lists '><i class="fa-solid fa-phone  contacticonss "></i><a href="tel:+48-616255500">+48-616255500</a></li>
                                        <li className='contact-lists'><i class="fab fa-whatsapp  contacticonss"></i><a href="https://api.whatsapp.com/send?phone=48532499316"> +48-532499316</a></li>
                                        <li className='contact-lists'><i class="fa-solid fa-envelopes-bulk contacticonss "></i><a href="mailto: enquiry@expostandservice.com ">enquiry@expostandservice.com</a></li>
                                        <li className='contact-lists'><i class="fa-solid fa-location-crosshairs  contacticonss   "></i><a href="https://www.google.com/maps/place/Expo+Stand+Services+%7C+Exhibition+Stand+Builders+Company+in+Poznan/@52.4033693,16.8602544,12z/data=!4m19!1m12!4m11!1m3!2m2!1d16.9297772!2d52.4072442!1m6!1m2!1s0xeab0b2574d84039:0xeb955f9cb460c9ac!2zUMOzxYJ3aWVqc2thIDE3LzI2LCA2MS04ODggUG96bmHFhCwgUG9sYW5k!2m2!1d16.9302939!2d52.40339!3m5!1s0xeab0b2574d84039:0xeb955f9cb460c9ac!8m2!3d52.40339!4d16.9302939!16s%2Fg%2F11t6y8gp28?hl=en&entry=ttu" target="blank">Półwiejska 17/26, 61-888 Poznan, Poland</a></li>




                                    </ul>
                                </div>
                            </div>
                            <div className="contact_card">

                                <div className="imgbx">
                                    <i class="fa-solid fa-map-pin contacticon"></i>
                                    <img src={German} alt="" className="card_images" />
                                    <p className="card_para">Germany</p>
                                </div>
                                <div className="contact_content">
                                    <ul className="Contact-list">

                                        <li className='contact-lists '><i class="fa-solid fa-phone  contacticonss "></i><a href="tel:+493022077794">+48-616255500</a></li>
                                        <li className='contact-lists'><i class="fab fa-whatsapp  contacticonss"></i><a href="https://api.whatsapp.com/send?phone=493022077794">+49 1520 6638854</a></li>
                                        <li className='contact-lists'><i class="fa-solid fa-envelopes-bulk contacticonss "></i><a href="mailto: enquiry@expostandservice.com ">enquiry@expostandservice.com</a></li>
                                        <li className='contact-lists'><i class="fa-solid fa-location-crosshairs  contacticonss   "></i><a href="https://www.google.com/maps/place/Expo+Stand+Services+%7C+Exhibition+Stand+Builder+%26+Contractor/@52.4857256,13.357311,16z/data=!4m6!3m5!1s0x47a85197a738441f:0x45bc54b90f6b3b11!8m2!3d52.4867644!4d13.3555944!16s%2Fg%2F11txvnckmj?hl=en-GB&entry=ttu" target="blank">Akazienstraße 3a, 10827 Berlin, Germany</a></li>




                                    </ul>
                                </div>
                            </div>

                            <div className="contact_card">

                                <div className="imgbx">
                                    <i class="fa-solid fa-map-pin contacticon"></i>
                                    <img src={London} alt="" className="card_images" />
                                    <p className="card_para">London</p>

                                </div>
                                <div className="contact_content">
                                    <ul className="Contact-list">

                                        <li className='contact-lists '><i class="fa-solid fa-phone  contacticonss "></i><a href="tel:+442032861646">+44 20 3286 1646</a></li>
                                       
                                        <li className='contact-lists'><i class="fa-solid fa-envelopes-bulk contacticonss "></i><a href="mailto: uk@expostandservice.com ">uk@expostandservice.com</a></li>
                                        <li className='contact-lists'><i class="fa-solid fa-location-crosshairs  contacticonss   "></i><a href="https://www.google.com/maps/place/Expo+Stand+Services+%7C+Exhibition+Stand+Contractor+in+Germany/@51.514907,-0.127806,17z/data=!3m1!5s0xaf7b71b7a2f6a1d:0xc29729f81c2d68ba!4m14!1m7!3m6!1s0x4876056af8acc657:0x40470ef710ee5a19!2sExpo+Stand+Services+%7C+Exhibition+Stand+Contractor+in+Germany!8m2!3d51.5149037!4d-0.1235842!16s%2Fg%2F11nxp9hx3m!3m5!1s0x4876056af8acc657:0x40470ef710ee5a19!8m2!3d51.5149037!4d-0.1235842!16s%2Fg%2F11nxp9hx3m?hl=en&entry=ttu" target="blank">71-75 Shelton St, London WC2H 9JQ, United Kingdom</a></li>




                                    </ul>
                                </div>
                            </div>

                      
                            <div className="contact_card">
                                {/* <i class="fa-solid fa-location-arrow"></i> */}

                                <div className="imgbx">
                                    <i class="fa-solid fa-map-pin contacticon"></i>
                                    <img src={USA} alt="" className="card_images" />
                                    <p className="card_para">USA</p>
                                </div>
                                <div className="contact_content">
                                    <ul className="Contact-list">

                                        <li className='contact-lists '><i class="fa-solid fa-phone  contacticonss "></i><a href="tel:+17026050607">+1(702) 605-0607</a></li>
                                        <li className='contact-lists'><i class="fab fa-whatsapp  contacticonss"></i><a href="https://wa.link/diqfz3"> +1(702) 605-0607</a></li>
                                        <li className='contact-lists'><i class="fa-solid fa-envelopes-bulk contacticonss "></i><a href="mailto:info@expostandservice.us">info@expostandservice.us</a></li>
                                        <li className='contact-lists'><i class="fa-solid fa-location-crosshairs  contacticonss   "></i><a href="https://www.google.com/maps/place/Expo+Stand+Services+USA+%7C+Trade+Show+Booth+Display+in+USA/@39.5239967,-119.8085713,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x22bf084f825044e1:0xa36761cb642663c7!2sExpo+Stand+Services+USA+%7C+Trade+Show+Booth+Display+in+USA!8m2!3d39.5239926!4d-119.8059964!16s%2Fg%2F11s56rmc7l!3m5!1s0x22bf084f825044e1:0xa36761cb642663c7!8m2!3d39.5239926!4d-119.8059964!16s%2Fg%2F11s56rmc7l?hl=en&entry=ttu" target="blank">401, Ryland St. Ste 200-A Reno NV 89502 Nevada, USA</a></li>




                                    </ul>
                                </div>
                            </div>
                            <div className="contact_card">

                                <div className="imgbx">
                                    <i class="fa-solid fa-map-pin contacticon"></i>
                                    <img src={UAE} alt="" className="card_images" />
                                    <p className="card_para">UAE</p>
                                </div>
                                <div className="contact_content">
                                    <ul className="Contact-list">

                                        <li className='contact-lists '><i class="fa-solid fa-phone  contacticonss "></i><a href="tel:+971567383998">+971-567383998</a></li>
                                    
                                        <li className='contact-lists'><i class="fa-solid fa-envelopes-bulk contacticonss "></i><a href="mailto: uae@expostandservice.com ">uae@expostandservice.com</a></li>
                                        <li className='contact-lists'><i class="fa-solid fa-location-crosshairs  contacticonss   "></i><a href="https://www.google.com/maps/place/Expo+Stand+Services+%7C+Exhibition+Stand+Builders+Company+in+Poznan/@52.4033693,16.8602544,12z/data=!4m19!1m12!4m11!1m3!2m2!1d16.9297772!2d52.4072442!1m6!1m2!1s0xeab0b2574d84039:0xeb955f9cb460c9ac!2zUMOzxYJ3aWVqc2thIDE3LzI2LCA2MS04ODggUG96bmHFhCwgUG9sYW5k!2m2!1d16.9302939!2d52.40339!3m5!1s0xeab0b2574d84039:0xeb955f9cb460c9ac!8m2!3d52.40339!4d16.9302939!16s%2Fg%2F11t6y8gp28?hl=en&entry=ttu" target="blank">Al Quoz Industrial -3 Near Al Quoz Mall Dubai</a></li>




                                    </ul>
                                </div>
                            </div>
                           
                            <div className="contact_card">

                                    <div className="imgbx">
                                        <i class="fa-solid fa-map-pin contacticon"></i>
                                        <img src={IndiaGate} alt="" className="card_images" />
                                        <p className="card_para">India</p>

                                    </div>
                                    <div className="contact_content">
                                        <ul className="Contact-list">

                                            <li className='contact-lists '><i class="fa-solid fa-phone  contacticonss "></i><a href="tel:+0120-3570565">+09120 3570565</a></li>

                                            <li className='contact-lists'><i class="fa-solid fa-envelopes-bulk contacticonss "></i><a href="mailto: enquiry@expostandservice.com ">enquiry@expostandservice.com</a></li>
                                            <li className='contact-lists'><i class="fa-solid fa-location-crosshairs  contacticonss   "></i><a href="https://www.google.com/maps/place/Expo+Stand+Services+%7C+Exhibition+Stand+Builders+Company+in+Poznan/@52.4033693,16.8602544,12z/data=!4m19!1m12!4m11!1m3!2m2!1d16.9297772!2d52.4072442!1m6!1m2!1s0xeab0b2574d84039:0xeb955f9cb460c9ac!2zUMOzxYJ3aWVqc2thIDE3LzI2LCA2MS04ODggUG96bmHFhCwgUG9sYW5k!2m2!1d16.9302939!2d52.40339!3m5!1s0xeab0b2574d84039:0xeb955f9cb460c9ac!8m2!3d52.40339!4d16.9302939!16s%2Fg%2F11t6y8gp28?hl=en&entry=ttu" target="blank">C-49, Ground Floor,Sector 10,Noida,  Uttar pradesh 201301</a></li>




                                        </ul>
                                    </div>
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
export default Contact;