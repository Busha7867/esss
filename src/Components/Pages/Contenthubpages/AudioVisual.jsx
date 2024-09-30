import React, { useState } from "react";
import { useForm } from 'react-hook-form';

import '../Contenthubpages/StandBuilder.css';
import '../Contenthubpages/Design.css';
import Audio from '../Contenthubpages/video/Audiovisual.mp4';
import { Link } from "react-router-dom";
import CounterUp from "../../CounterUp";
import Form from '../../Form';
import Footer from '../../Footer';
import Universe from "../../Universe";








export default function AudioVisual() {

    const [show, toggleShow] = useState(false);



    const { register, handleSubmit, watch, formState: { errors } } = useForm()




    const onSubmit = data => console.log(data);



    return (
        <div className="audiovisual_section">
            <title>Exhibition Stand Audio-Visual - Expo Stand Services Sp. z o.o.</title>
	<meta name="description" content="Nowadays, audio-visuals play a crucial role in attracting visitors to display grounds. So, how can we stay caught up? We offer technologically advanced and audio-visually rich exhibits based on clients&#039; needs." />
	<link rel="canonical" href="https://www.expostandservice.com/exhibition-stand-audio-visual/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Technologically advanced and Audio-Visually rich exhibition stands" />
	<meta property="og:description" content="Nowadays, audio-visuals play a crucial role in attracting visitors to display grounds. So, how can we stay caught up? We offer technologically advanced and audio-visually rich exhibits based on clients&#039; needs." />
	<meta property="og:url" content="https://www.expostandservice.com/exhibition-stand-audio-visual/" />
	<meta property="og:site_name" content="Expo Stand Services Sp. z o.o." />
	<meta property="article:publisher" content="https://www.facebook.com/expostandservice" />
	<meta property="article:modified_time" content="2023-09-13T06:49:55+00:00" />
	<meta property="og:image" content="https://www.expostandservice.com/wp-content/uploads/2021/01/11.jpg" />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="520" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@expostandservic" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="2 minutes" />
            <div className="audio">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-m-12">
                            <div className="visual">
                                <div className="visual_back">
                                    <video src={Audio} autoPlay muted loop></video>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-m-12 ">
                            <h1 className="audiovisual_heading">Audio & Video services for your trade show</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="audio_two">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12 col-d-12">
                            <h2 className="german_heading2 audioHeading">Audio & Video and experiential marketing services for your trade show</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-m-12 col-t-12 col-d-12">
                            <p className="intro-para3 germanpara">EXPO STAND SERVICES offers a wide range of audio visual rental services and experiential marketing services for exhibitions. Starting from a projector rental, a high powered sound system, LED video walls, LCD Screens to stage lighting, we offer complete exhibition solutions to our clients. We also provide food catering and Exhibition hostess services. We have the complete knowledge base and expertise to deliver the right solution to our client needs.</p>
                            <p className="intro-para3 germanpara">With more than a decade of experience in planning and execution of trade show services, we are well-equipped to put on a show. We are one of the best company across the globe to provide new innovative technologies and experiential marketing which include.
                                <br />
                                <br />
                                With more than a decade of experience in planning and execution of trade show services, we are well-equipped to put on a show. We are one of the best company across the globe to provide new innovative technologies and experiential marketing which include:


                            </p>
                            <div className="audio_flex">
                                <div className="german_paragraph audiopara">

                                    <p> <span><i class="fa-solid fa-star-of-david"></i></span>
                                        LED/LCD Video Wall/screen for Trade Show booths.</p>

                                    <p> <span><i class="fa-solid fa-star-of-david"></i></span> Touchscreen Panels for your audience </p>

                                    <p> <span><i class="fa-solid fa-star-of-david"></i></span>
                                        Attractive LED floor screens</p>

                                    <p> <span><i class="fa-solid fa-star-of-david"></i></span>
                                        Live webcasting services</p>



                                </div>
                                <div className="german_paragraph audiopara">

                                    <p> <span><i class="fa-solid fa-star-of-david"></i></span>Audience Q&A and Polling software</p>

                                    <p> <span><i class="fa-solid fa-star-of-david"></i></span>High Powered Professional Sound System</p>

                                    <p> <span><i class="fa-solid fa-star-of-david"></i></span>Internet kiosks</p>
                                    <p> <span><i class="fa-solid fa-star-of-david"></i></span>Videography & complete editing
                                    </p>



                                </div>
                            </div>
                            <div className="animation_border">

                                <p class="para_expertize audioteam">A TEAM OF SPECIALISTS, WITH A GOAL TO DOMINATE THE EXHIBITION SPACE WORLDWIDE. </p>
                                <span class="top"></span>
                                <span class="right"></span>
                                <span class="bottom"></span>
                                <span class="left"></span>

                            </div>



                        </div>
                        <div className="col-4 col-m-12">


                            <div className="audiohide">
                                <div className="baudio">
                                <button className="button_audio" onClick={() => toggleShow(!show)}>{show ? "Our Services" : "Our Services"}</button>
                                </div>

                                {show && <div className="AudioList">
                                    <ul>

                                        <li><Link to="/">Consultation</Link></li>
                                        <li><Link to="/">Exhibition Stand Design</Link></li>
                                        <li><Link to="/">Stand Construction</Link></li>
                                        <li><Link to="/">Graphic Production</Link></li>
                                        <li><Link to="/">Exhibition Stand Management</Link></li>
                                        <li><Link to="/">Audio & Visual</Link></li>
                                        <li><Link to="/">Installing & Dismantling</Link></li>
                                    </ul>




                                </div>}
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
                                        <textarea name="" id="textger" cols="30" rows="4" placeholder='Description/Message'></textarea>
                                        <label for="file-upload" class="custom-file-upload customside">
                                            <i class="fas fa-file-import"></i> Browser..
                                        </label>






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

