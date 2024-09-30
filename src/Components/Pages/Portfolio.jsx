import React from "react";
import { useState, useEffect } from "react";
import PortVideo from '../Pages/portfolio.mp4';
import '../Responsive.css';
import '../ArroundWorld.css';
import '../Pages/Major.css';

import CounterUp from "../CounterUp";
import Form from "../Form";
import Footer from "../Footer";
import Universe from "../Universe";
import CustomSlider from "./CustomSlider";
import Deckerslider from "./Deckerslider";
import Pavilionslider from "./Pavilionslider";
import Modularslider from "./Modularslider";



export default function Portfolio() {


    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    return (

        <div className="section">

            <div className="portfolio-1">
                <div className="trade_video">
                    <video src={PortVideo} autoPlay muted className="trade_video" ></video>
                </div>


            </div>
            <div className="port_content">
                <div className="container">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 col-m-12 col-t-12 col-d-12 " >


                            <div className="bloc-tabs">
                                <ul className="bloc_lists">
                                    <li className={toggleState === 1 ? " bloc active" : "blocs "}
                                        onClick={() => toggleTab(1)}>Custom Stand</li>
                                    <li className={toggleState === 2 ? " bloc active" : "blocs "}
                                        onClick={() => toggleTab(2)}>Double Decker</li>
                                    <li className={toggleState === 3 ? " bloc active" : "blocs "}
                                        onClick={() => toggleTab(3)}>Country Pavilion</li>
                                    <li className={toggleState === 4 ? " bloc active" : "blocs "}
                                        onClick={() => toggleTab(4)}>Modular Stand</li>
                                </ul>


                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-12 col-m-12 col-t-12 col-d-12">

                            <div className="content-tabs">
                                <div className="row grid_container">





                                    <div className={toggleState === 1 ? "content  active-content" : "content"}

                                    >


                                        <div className="ports_image">
                                            <div className="gallery_item">
                                            
                                                
                                                <CustomSlider/>

                                            </div>




                                        </div>


                                    </div>

                                    <div className={toggleState === 2 ? "content  active-content" : "content"}


                                    >

                                        <div className="ports_image">
                                            <div className="gallery_item2">
                                               <Deckerslider/>



                                            </div>




                                        </div>


                                    </div>

                                    <div
                                        className={toggleState === 3 ? "content  active-content" : "content"}
                                    >
                                        <div className="ports_image">
                                            <div className="gallery_item3">
                                                <Pavilionslider/>
                                            </div>




                                        </div>





                                    </div>
                                    <div
                                        className={toggleState === 4 ? "content  active-content" : "content"}
                                    >
                                        <div className="ports_image">
                                            <div className="gallery_item3">
                                               <Modularslider/>

                                            </div>




                                        </div>



                                    </div>

                                    {/* </div> */}

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