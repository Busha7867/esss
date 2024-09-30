import React from "react";
import UniverseVideo from '../Components/USA.mp4';
import '../App.css';
import Photos from "../Photos";




const Universe = () => {




    return (
        <>

            <div className="universe-1">
                <div className="universe-video">
                    <video src={UniverseVideo} autoPlay loop muted ></video>

                    <div className="overlay">
                        <ul className="universe-item">
                            <li className="universe-list">Uk <br /><a href="tel:+48-616255500"><i class="fa-solid fa-phone"></i>+48-616255500</a></li>
                            <li className="universe-list">Europe <br /> <a href="tel:+48-616255500"><i class="fa-solid fa-phone"></i>+48-616255500</a></li>
                            <li className="universe-list">USA <br /> <a href="tel:+48-616255500"><i class="fa-solid fa-phone"></i>+48-616255500</a></li>
                            <li className="universe-list">UAE <br /> <a href="tel:+48-616255500"><i class="fa-solid fa-phone"></i>+48-616255500</a></li>
                        </ul>
                    </div>
                </div>
                <div className="reserved"><span>© 2023 Expo Stand Services. All rights reserved.</span></div>
            
                

            </div>
       



        </>

    )
}

export default Universe;
