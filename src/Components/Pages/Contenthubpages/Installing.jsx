import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import '../Contenthubpages/Design.css';
import { Link } from "react-router-dom";
import DesigVideo from '../Contenthubpages/video/boothconclusion.gif';
import Truck from '../Contenthubpages/images/truck.webp';
import DesignAcordian from "./DesignAcordian";
import CounterUp from '../../CounterUp';
import Form from '../../Form';
import Universe from "../../Universe";
import Footer from '../../Footer';









export default function Installing() {
    const [show, toggleShow] = useState(false);

    const { register, handleSubmit, watch, formState: { errors } } = useForm()




    const onSubmit = data => console.log(data);




    return (
        <div className="construction_section">
<title>Exhibition Stand Installation and Dismantling - Expo Stand Services Sp. z o.o.</title>
	<meta name="description" content="If you’re looking for a comprehensive exhibition services provider, Then choose us, as we offer everything related to exhibition services." />
	<link rel="canonical" href="https://www.expostandservice.com/exhibition-stand-installation-dismantling/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Everything from start to end, you can get at ESS" />
	<meta property="og:description" content="If you’re looking for a comprehensive exhibition services provider, Then choose us, as we offer everything related to exhibition services." />
	<meta property="og:url" content="https://www.expostandservice.com/exhibition-stand-installation-dismantling/" />
	<meta property="og:site_name" content="Expo Stand Services Sp. z o.o." />
	<meta property="article:publisher" content="https://www.facebook.com/expostandservice" />
	<meta property="article:modified_time" content="2023-09-13T06:28:24+00:00" />
	<meta property="og:image" content="https://www.expostandservice.com/wp-content/uploads/2021/01/12.jpg" />
	<meta property="og:image:width" content="1280" />
	<meta property="og:image:height" content="480" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@expostandservic" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="2 minutes" />
            <div className="construction-1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 standConstruction col-m-12">
                            <h1 className="construction_head">Installation, dismantling & Services </h1>
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
                            <h2 className="construction_head2">Integrated services to ensure induce installation, dismantling & shipping of your trade show booth
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8 col-m-12 col-t-12 col-d-12">
                            <p className="intro-para3 germanpara">
                            At Expo Stand Services, top-grade exhibition stand designing and production is augmented with expert exhibition stand installation. Our exclusive and cost-effective packages include a host of services along with exhibition stand design and build. A highly skilled and competent team takes complete charge of the assembly and dismantling process of your exhibition stand at the venue, to ascertain that you are show-ready on schedule.
                            </p>
                            


                            <h3 className="german_para aos-init aos-animate" data-aos="fade-right" data-aos-duration="1500">Comprehensive Services To Ensure You Have A Stellar Show</h3>

                            <p className="intro-para3 germanpara">Installation is a crucial part of exhibition stand planning. Only well-trained and skilled professionals can assemble a stand as it was envisioned by the designers and the client. At Expo Display Service, we have a highly experienced and skillful team that handles the complete exhibition stand design and build of your booth on the fairground. This totally eliminates the hassle of outsourcing and coordinating with various suppliers to assemble and dismantle your exhibition stand. Your exhibition is pre-built in our warehouse weeks before it is shipped. It gives us ample time for last minute changes and also acts as a warm-up for our team. This task quickens the assembly process on the fairground thus giving you ample time to set-up.
                              </p>

                            

                            <div className="row gifrow">
                                <div className="col-6 col-m-12">
                                    <img src={Truck} alt="" className="constimg" />
                                </div>
                                <div className="col-6 col-m-12">
                                    <p className="gif_para">



                                    Once you partner with Expo Stand Services, we take complete responsibility of your exhibition stand. From stand manufacturing to the exhibition stand design and build process, we handle everything so that you need not worry about these details and concentrate solely on your show. To get free design proposal Whatsapp us at<a href="tel:+48-532499316">+48-532499316</a>  or email at <a href="mailto: enquiry@expostandservice.com ">enquiry@expostandservice.com</a>
                                      
                                    </p>













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
                <CounterUp />
                <Form />
                <Footer />
                <Universe />
            </div>
        </div>

    )


}

