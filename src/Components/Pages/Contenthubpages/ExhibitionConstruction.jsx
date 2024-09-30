import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import '../Contenthubpages/Design.css';
import { Link } from "react-router-dom";
import DesigVideo from '../Contenthubpages/video/boothconclusion.gif';
import Constructimg from '../Contenthubpages/images/construction.webp';
import DesignAcordian from "./DesignAcordian";
import CounterUp from '../../CounterUp';
import Form from '../../Form';
import Universe from "../../Universe";
import Footer from '../../Footer';









export default function ExhibitionConstruction() {
    const [show, toggleShow] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm()




    const onSubmit = data => console.log(data);




    return (
        <div className="construction_section">
            <title>Exhibition Stand Construction Company in Germany - Expo Stand Services Sp. z o.o.</title>
	<meta name="description" content="Top-rated exhibition stand construction company in Germany with expertise in creating innovative and bespoke stands for global clients." />
	<link rel="canonical" href="https://www.expostandservice.com/exhibition-stand-construction/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Exclusive Exhibition Stand Construction" />
	<meta property="og:description" content="Top-rated exhibition stand construction company in Germany with expertise in creating innovative and bespoke stands for global clients." />
	<meta property="og:url" content="https://www.expostandservice.com/exhibition-stand-construction/" />
	<meta property="og:site_name" content="Expo Stand Services Sp. z o.o." />
	<meta property="article:publisher" content="https://www.facebook.com/expostandservice" />
	<meta property="article:modified_time" content="2023-08-07T06:50:20+00:00" />
	<meta property="og:image" content="https://www.expostandservice.com/wp-content/uploads/2021/01/14.jpg" />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="520" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@expostandservic" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="2 minutes" />

            <div className="construction-1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 standConstruction col-m-12">
                            <h1 className="construction_head">Exhibition Stand Construction </h1>
                        </div>
                        <div className="col-6 col-m-12">
                            <div className="construction_img">
                                <img src={DesigVideo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="construction-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-m-12 col-t-12 col-d-12">
                            <h2 className="construction_head2">Exhibition Stand Construction Company in Germany
                            </h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-8 col-m-12 col-t-12 col-d-12">
                            <p className="intro-para3 germanpara">Expo Stand Services is a leading Exhibition Booth Designing & Construction Company who understand that every brand has unique requirement. Therefore, custom exhibition stand construction company in Germany can help in making a personalized design that appraise your stand space and meets all your brand requirements. We are always working closely with our clients as a competent <a href=""> exhibition stand builder </a> across the globe.

                                <br />
                                <br />
                                Expo Stand Services is a competent <a href="">trade show booth builder </a> with clients across the globe. We have manufacturing setup and competencies required to create an exhibition stand construction company in Germany that blend perfectly fine with your corporate goals. Choose us for an embracing experience as an exhibition booth builder in Germany. When preparing for the upcoming Exhibition, Client always want that their custom exhibition booth should set up before time and look fabulous. Each Exhibition booth is designed to fit client requirements and you may choose between lightweight portable exhibition booth design to an elegant double decker exhibition design or exhibition country pavilion.


                            </p>
                            <p className="para_expertize germanyparastand">No matter what is the scale of your exhibition stand design in Germany, and we have the bandwidth for your booth construction, we are available 24×7 to deliver the best exhibition booth builder services in Germany and worldwide to all our clients every time.</p>
                            <div className="request_quote" >
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
                                    <img src={Constructimg} alt="" className="constimg" />
                                </div>
                                <div className="col-6 col-m-12">
                                    <p className="gif_para">You can select trade show booth building material, exhibition stand specifications or exhibition stand construction company in Germany for the custom exhibition stand and we will create it into a pleasing and perfect experience being an exhibition booth design company in Germany for you. To get free design proposal WhatsApp us at <a href="tel:+48-616255500">+48-616255500</a>or email at  <a href="mailto: enquiry@expostandservice.com ">enquiry@expostandservice.com</a></p>
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
                <CounterUp/>
                <Form/>
                <Footer/> 
                <Universe/>  
            </div>
        </div>

    )


}

