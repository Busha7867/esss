import React from "react";
import { Link } from "react-router-dom";
import '../Aboutdroppages/team.css';
import VideoTeam from '../Aboutdroppages/team.mp4';
import team from '../Aboutdroppages/team.png';
import CounterUp from "../../CounterUp";
import Form from "../../Form";
import Footer from "../../Footer";
import Universe from "../../Universe";
import Ctabuttons from "../../../Ctabuttons";





export default function OurTeam() {


    return (
        <div className="team_section">
            <title>Best Exhibition stand contractors | Exhibition stand design company</title>
	<meta name="description" content="We are a team of best exhibition stand contractors with extensive experience in the field, frequently named as best exhibition stand company among other" />
	<link rel="canonical" href="https://www.expostandservice.com/our-team/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Our Team" />
	<meta property="og:description" content="We are a team of best exhibition stand contractors with extensive experience in the field, frequently named as best exhibition stand company among other" />
	<meta property="og:url" content="https://www.expostandservice.com/our-team/" />
	<meta property="og:site_name" content="Expo Stand Services Sp. z o.o." />
	<meta property="article:publisher" content="https://www.facebook.com/expostandservice" />
	<meta property="article:modified_time" content="2023-08-07T08:19:35+00:00" />
	<meta property="og:image" content="https://www.expostandservice.com/wp-content/uploads/2023/03/Our-Team-min.jpg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="540" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@expostandservic" />
	<meta name="twitter:label1" content="Est. reading time" />
	<meta name="twitter:data1" content="2 minutes" />



            <div className="team_1">
                <video src={VideoTeam} autoPlay muted className="teamvideo"></video>

                
            </div>

            <div className="team-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="teamheading">OUR TEAM <img src={team} alt="" /></h2>
                            <p className="team_para"><b>EXPO STAND SERVICES </b>is the best exhibition stand company. It has a highly skilled, proficient team of custom exhibition booth builders who has already executed multiple custom exhibitions stands for clients across the globe. Our highly motivated team of custom exhibition booth conceptualisers, designers have mastered their skill and art through years of experience in designing in the exhibition domain. Right from custom trade show stands to modular exhibits, hybrid exhibits, double-decker exhibits, and country pavilions. EXPO STAND SERVICES offers the right blend of dedication, qualification, and an experienced team of specialists, intending to dominate the exhibition space worldwide, making us one of the best exhibition stand contractors across Europe.</p>
                            <p className="para_expertize teamexpertize"> <span>EXPO STAND SERVICES founded in 2008 </span> is a leading exhibition stands builder company in Europe. Our own manufacturing and warehousing facility is located in Germany and Poland, with our client base spread across Germany, Netherlands, France, UK, Spain, Italy, Turkey, US, Middle East, Asia, and other European countries.</p>

                          
                        </div>
                    
                    </div>
                </div>
            </div>
            <div className="team-3">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <p className="teamparathree">We bring together a decade of experience as an <a href="https://www.exhibitionworld.co.uk/awarding-resilience-at-the-world-exhibition-stand-awards">exhibition </a>booth contractor, architect, highly skilled designers, and flawless execution to meet our client’s need for exhibition booths all across the globe. We analyze, develop, evaluate, and implement your ideas in order to reach real, efficient, and visually satisfying results. We design and build exhibition stands, pavilions, and chalets worldwide as one of the <Link href="/">best exhibition stand design companies.</Link> Our team of talented engineers, carpenters, and metal shop workers pride themselves on building something new every day. Our offices in different Continents give us the ability to offer the best prices and services.</p>
                        <p className="para_expertize">We know how to be efficient with space and budgets without compromising on the delivery mechanism. We guarantee a completely satisfying outcome – a modern exhibition booth design or customized Exhibition booth standing out from the competition.</p>
                        </div>
                    </div>
                </div>
               
            
            </div>
            <CounterUp/>
            <Form/>
            <Footer/>
            <Universe/>
           
        </div>
    )
}
