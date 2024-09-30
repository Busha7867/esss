import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import '../Contenthubpages/Design.css';
import Graphicimage from '../Contenthubpages/images/Graphic.jpg';
import '../Contenthubpages/Design.css';
import Print from '../Contenthubpages/images/print.png';
import CounterUp from "../../CounterUp";
import Form from '../../Form';
import Footer from "../../Footer";
import Universe from "../../Universe";
import '../../Responsive.css';
import Captcha2 from "../../captcha2";









export default function GraphicProduction() {
    const [show, toggleShow] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm()




    const onSubmit = data => console.log(data);




    return (
        <div className="graphic_section">
            <title>Exhibition graphic designing and production in Germany</title>
	<meta name="description" content="ESS has a team of experienced professionals, including skilled graphic designers, who work excellently on every exhibition stand." />
	<link rel="canonical" href="https://www.expostandservice.com/exhibition-graphic-designing-and-production/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Exclusive Exhibition Stand Graphics Production" />
	<meta property="og:description" content="ESS has a team of experienced professionals, including skilled graphic designers, who work excellently on every exhibition stand." />
	<meta property="og:url" content="https://www.expostandservice.com/exhibition-graphic-designing-and-production/" />
	<meta property="og:site_name" content="Expo Stand Services Sp. z o.o." />
	<meta property="article:publisher" content="https://www.facebook.com/expostandservice" />
	<meta property="article:modified_time" content="2023-09-13T06:55:48+00:00" />
	<meta property="og:image" content="https://www.expostandservice.com/wp-content/uploads/2021/01/10.jpg" />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="520" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@expostandservic" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="2 minutes" />
            <div className="graphic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-m-12">
                            <div className="graphic_imagebox">
                                <img src={Graphicimage} alt="" />
                            </div>

                        </div>
                        <div className="col-6 col-m-12">
                            <h1 className="graphic_heading"> <img src={Print} alt="" />Graphics Production </h1>

                        </div>
                    </div>
                </div>
            </div>
            <div className="graphic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12 col-d-12">
                            <h2 className="graphic_heading2">Exclusive Exhibition Stand Graphics Production</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-m-12 col-t-12 col-d-12">


                            <p className="intro-para3 germanpara">Exhibition graphics make exhibition stand more expressive. So, we have an expert in place to handle and oversee exhibition stand graphics production for your booth. We offer state-of the art exhibition stands to our customers and to further add value to the look of the stand we design enticing graphics as well. We use the advanced dye sublimation printing technology to make sure that the quality of graphics are on par with the designing standards of your exhibition stand.

                            </p>
                            <div className="animation_border">

                                <p className="graphicpara"> At our modern printing workshop, we have the facility of printing large format prints so that your exhibition stand graphics are uniquely merged with the booth design for the seamless experience. Dye-sublimation printing technology makes us capable to print on various forms of media. It also ensures that your artwork is printed in high resolution and the colors are appealing and eye catching. We print graphics that can be utilized for the longer time, with the use of permanent colors, we create weather-resistant and dust resistant exhibition graphics, which ensures our exhibition stand graphics reusable and our stands, an ideal option for outdoor events.</p>



                                <span className="top"></span><span className="right"></span><span className="bottom"></span><span className="left"></span>

                            </div>
                            <p className="intro-para3 germanpara">Our vast experience of working with different client from different geography on varying sizes starting from small businesses to mid and high level companies and to deliver design concept that exceeds their expectations. 3D design concepts are developed considering clients brand image and exhibition goals to deliver a state-of-the-art <a href="">exhibition stand design.</a>

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
                            <div className="row gifrow">
                                    <div className="col-6 col-m-12">
                                        <img src={Graphicimage} alt="" className="constimg"/>
                                    </div>
                                    <div className="col-6 col-m-12">
                                        <p className="gif_para">Need a high-quality trade show booth display to spread the right marketing message, Expo Stand Services may be your Turnkey exhibition service provider. To get free design proposal Whatsapp us at <a href="tel:+48-532499316">+48-532499316</a>  or email at  <a href="mailto: enquiry@expostandservice.com ">enquiry@expostandservice.com</a></p>
                                    </div>

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
                <CounterUp/>
                <Form/>
                <Footer/>
                <Universe/>
            </div>



        </div>

    )


}

