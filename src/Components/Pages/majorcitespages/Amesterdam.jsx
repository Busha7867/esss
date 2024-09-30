import React from "react";
import '../pages2/germany.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';


import Custom37 from '../Portimage/Custom/Custom37.jpg';
import Custom38 from '../Portimage/Custom/Custom38.jpg';
import Custom39 from '../Portimage/Custom/Custom39.jpg';
import Custom40 from '../Portimage/Custom/Custom40.jpg';
import Custom41 from '../Portimage/Custom/Custom41.jpg';
import Custom42 from '../Portimage/Custom/Custom42.jpg';



import Custom33 from '../Portimage/Custom/Custom33.jpg';
import CounterUp from "../../CounterUp";
import Form from "../../Form";
import Footer from "../../Footer";
import Universe from "../../Universe";
import Amst from '../majorcities/Amsterdam.jpg'
import Leipzg from '../majorcities/Liepzig.jpg'
import Berl from '../majorcities/Berlin.jpg'
import Munch from '../majorcities/munich.jpg'

import Img1 from '../Portimage/Custom/Custom1.jpg';
import Img4 from '../Portimage/Pavilon/Pavilion1.jpg';

import Img2 from '../Portimage/Custom/Custom2.jpg';
import Img3 from '../Portimage/Decker/Decker1.jpg';

import LogoSlider from "../../LogoSlider";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../ArroundWorld.css';
// import GermanyVideo from '../pages2/video/germanyworld.mp4';




const Amesterdam = () => {

    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const onSubmit = data => console.log(data);



    return (
        <div className="section amstrdm" >

            <div className="germany-1 amsterdam-1">
                {/* <video src={GermanyVideo} autoPlay muted className="gervideo"></video> */}
                <div className="container">
                    <div className="row ">
                        <div className="col-2"></div>

                        <div className="col-8 col-m-12">
                            <div className="banner_box">
                                <h1 className="amsterdm">AMSTERDAM</h1>
                                <p className="amsterdm_para">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae cupiditate fugiat, nesciunt saepe perferendis temporibus ipsum! Laudantium ab beatae similique!</p>

                                <div className="button">
                                    <div>

                                        <Link to="/contactus" class="tradebtn btntrade-3 buttonpop ">Send Your Query to us!</Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-2"></div>

                    </div>
                </div>

            </div>
            <div className="germany-2">
                <div className="container">


                    <div className="row amstrdm_margin">


                        <div className="col-6 col-m-12 col-t-12">
                            <h2 className="germany_headd" >
                                Expo Stand Services: Top Exhibition Stand Design Company in Amsterdam
                            </h2>


                            <div className="flex-container">


                                <p className='amsrtrdm_para'>
                                    Triumfo International GmbH is a well-known exhibition stand builder in France. We have been designing and building engaging exhibition stands and display stands for the past 22 years, creating immersive experiences for the audience. As a booth construction company, we offer turnkey exhibit services, encompassing everything from building and transportation to installation and dismantling.
                                    <br />

                                    We are a leading exhibition stand builder and contractor in France who provide complete trade show booths design and build related services starting from planning to installing the stand at the suggested site. We understand the significance of exhibition stands to attract top players and new businesses.
                                </p>




                            </div>







                        </div>
                        <div className="col-6">
                            <div className="double_images">


                                <img src={Img2} alt="" className='big-imgs' />
                                <div className="white-backs">
                                    <img src={Img3} alt="" className='whiteback-img' />

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="row amstrdm_margin">
                        <div className="col-12 col-m-12 col-t-12">
                            <h2 className="germany_head mrg-up" >
                                What We Offer as Exhibition Stand Builders in Amsterdam
                            </h2>
                        </div>

                        <div className="col-12 col-m-12 col-t-12">


                            <div className="flex-container">


                                <p className='amsrtrdm_para margn_btm'>
                                    <Link>Expo Stand Services </Link>has a wide range of exhibition stands to offer. Whether you require a compact stand with minimal design or an expansive stand with multiple areas, we can build it. We are proficient in building custom, modular, double-decker, and country pavilion stands. If you wish to rent a stand, we can also do that. We are proficient in building custom, modular, double-decker, and country pavilion stands. If you wish to rent a stand, we can also do that.



                                </p>




                            </div>







                        </div>

                    </div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-10 col-m-12 col-t-12">
                            <div className="wrk-excell">

                                <h2 className='excel-workhead'>
                                    Our Services</h2>

                            </div>

                        </div>

                    </div>
                    <div className="row exclerow">
                        <div className="col-4 col-m-12 ">
                            <div className="service-1">
                                <Link to="/customstand"><img src={Img1} alt="" /></Link>
                                <div className="service-head">
                                    <h4>CUSTOM STANDS</h4>
                                </div>
                            </div>
                        </div>

                        <div className="col-4 col-m-12 ">
                            <div className="service-2">
                                <Link to="/modular"><img src={Img2} alt="" /></Link>
                                <div className="service-head">
                                    <h4>MODULAR STANDS</h4>
                                </div>

                            </div>
                            <div className="service-22">
                                <Link to="/pavilion"><img src={Img4} alt="" /></Link>
                                <div className="service-head">
                                    <h4>COUNTRY PAVILION</h4>
                                </div>

                            </div>
                        </div>
                        <div className="col-4  secondextracol ">
                            <div className="service-3">
                                <Link to="/doubledecker"><img src={Img3} alt="" /></Link>
                                <div className="service-head">
                                    <h4>DOUBLE DECKER</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row amstrdm_margin">

                        <div className="col-12 col-m-12 col-t-12">
                            <h2 className="germany_head" >
                                Why Are We the Best Exhibition Stand Design Company in Amsterdam?
                            </h2>
                        </div>
                        <div className="col-12 col-m-12 col-t-12">


                            <div className="flex-container">


                                <p className='amsrtrdm_para'>
                                    Amsterdam is home to multiple exhibitions taking place throughout the year. Packed with exhibitors from worldwide, it becomes quite a challenge to stand out at the exhibition venue. But with one of the best exhibition stand contractors in Amsterdam, standing out becomes easy. Expo Stand Services has been serving the industry for more than 15 years. We have worked with 1000+ clients, assisting them to garner more visibility, sales, and revenue. Our expertise in exhibition stand design and construction in Amsterdam surpasses that of others in the industry. We build exhibition stands that are a perfect combination of aesthetics and functionality.
                                    <br />


                                    Expo Stand Services go beyond building exhibition stands. We work closely with our clients to ensure they achieve their exhibition goals. Our services include furniture rentals, logistics, shipping, installation, dismantling, and storage. These services under one roof allow you to focus on your core business activities. Further, we have our own manufacturing and storage facility equipped with state-of-the-art machines and equipment. Our facilities are manned by skilled workers who ensure quality in every stand we build. You can put your whole trust in our exhibition stand design company in Amsterdam to elevate your presence at the exhibition venue.


                                </p>




                            </div>







                        </div>


                    </div>



                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-10 col-m-12 col-t-12">
                            <div className="wrk-excell">

                                <h2 className='excel-workhead'>
                                    Our Projects</h2>

                            </div>

                        </div>



                        <div className="grids">



                            <img src={Custom37} alt="custom exhibition booth" onClick={() => { setIsOpen(true) }} className='grid_image3' />
                            <img src={Custom38} alt="custom exhibition booth" onClick={() => { setIsOpen(true) }} className='grid_image3' />
                            <img src={Custom39} alt="custom exhibition booth" onClick={() => { setIsOpen(true) }} className='grid_image3' />
                            <img src={Custom40} alt="custom exhibition booth" onClick={() => { setIsOpen(true) }} className='grid_image3' />
                            <img src={Custom42} alt="custom exhibition booth" onClick={() => { setIsOpen(true) }} className='grid_image3' />

                            <img src={Custom33} alt="custom exhibition design" onClick={() => { setIsOpen(true) }} className='grid_image3' />




                        </div>
                        {/* <button onClick={() => { setIsOpen(true) }}>
                        <img src={image1} alt="" />
                    </button> */}

                    </div>

                    <div className="row amstrdm_margin">
                        <div className="col-12 col-m-12 col-t-12">
                            <h2 className="germany_head" >
                            Choose Expo Stand Services for Maximum Returns in Amsterdam Exhibitions
                            </h2>
                        </div>

                        <div className="col-12 col-m-12 col-t-12">


                            <div className="flex-container">


                                <p className='amsrtrdm_para'>
                                Expo Stand Services is the best option you have among the exhibition stand contractors in Amsterdam. You need our experience and expertise to make an impactful presence at the exhibition venue. Connect with us right away and let’s work together to the star at your next exhibition in Amsterdam.



                                </p>




                            </div>







                        </div>

                    </div>


                </div>
                <br />
                <br />
                <br />
                <br />

                <LogoSlider/>


                <CounterUp />
                <Form />
                <Footer />
                <Universe />








            </div>






        </div>


    )
}

export default Amesterdam;