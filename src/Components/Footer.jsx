import React from 'react'
import '../Components/ArroundWorld.css';
import '../Components/footer.css';
import Expo from '../Components/Expo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faTwitter, faLinkedinIn, faTumblr, faPinterest } from "@fortawesome/free-brands-svg-icons";



import { Link } from 'react-router-dom';
import Footerimg from '../Components/3dback.webp';



const Footer = () => {
    return (
        <div className="footer-1">
            <div className="container">
                <div className="expo-foot">
                    <div className="row expo-row">

                        <div className="col-3 col-m-7 ">
                            <img src={Expo} alt="" className='footer-logo' />

                        </div>
                        <div className="col-9 col-m-12 col-l-12 col-p-12 col-imp-12">
                            <p className="footer-para">
                                Expo Stand Services is one of the top exhibition stand builders in Germany, serving showcasing services across the globe. We work with exhibitors to break through the marketing clutter and ensure their exhibition stand meets all their requirements
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2"> </div>
                    <div className="col-8 col-m-12 col-t-12 col-d-12">

                        <ul className='social_iconslist'>
                            <li>
                                <a href="https://www.youtube.com/@expostandservices9586">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" className='sicons y'/>
                                    
                                    </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/expostandservice">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" className='sicons f'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/expostandservices/">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" className='sicons ins'/>
                                </a></li>
                            <li>
                                <a href="https://twitter.com/expostandservice/">        <FontAwesomeIcon icon={faTwitter} size="2x" className='sicons twit' />

                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/expo-stand-service">         <FontAwesomeIcon icon={faLinkedinIn} size="2x" className='sicons lin' />

                                </a>
                            </li>
                            <li>
                                <a href="https://in.pinterest.com/expostandservice/">       <FontAwesomeIcon icon={faPinterest} size="2x" className='sicons pint'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://exhibitionsstandbuilder.tumblr.com/">        <FontAwesomeIcon icon={faTumblr} size="2x" className='sicons tumb'/>   
                                </a>
                            </li>
                        </ul>

                    </div>
                    {/* <div className="col-8 col-m-12 col-t-12 col-d-12 ">
                        <div className="social_media">
                            <div class="social-container">

                                <a href="https://www.youtube.com/@expostandservices9586"
                                    className="youtube social">
                                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                                </a>
                                <p className='hide'>YouTube</p>
                            </div>
                            <div class="social-container">

                                <a href="https://www.facebook.com/expostandservice"
                                    className="facebook social">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                                <p className='hide'>Facebook</p>
                            </div>
                            <div class="social-container">

                                <a href="https://www.instagram.com/expostandservices/"
                                    className="instagram social">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                                <p className='hide'>Instagram</p>
                            </div>
                            <div class="social-container">

                                <a href="https://twitter.com/expostandservice/"
                                    className="twitter social">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                                <p className='hide'>Twitter</p>
                            </div>
                            <div class="social-container">

                                <a href="https://www.linkedin.com/company/expo-stand-service"
                                    className="linkedin social">
                                    <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                                </a>
                                <p className='hide'>Linkedin</p>
                            </div>
                            <div class="social-container">

                                <a href="https://in.pinterest.com/expostandservice/"
                                    className="pinterest social">
                                    <FontAwesomeIcon icon={faPinterest} size="2x" />
                                </a>
                                <p className='hide'>Pinterest</p>
                            </div>
                            <div class="social-container">

                                <a href="https://exhibitionsstandbuilder.tumblr.com/"
                                    className="tumblr social">
                                    <FontAwesomeIcon icon={faTumblr} size="2x" />
                                </a>
                                <p className='hide'>Tumblr</p>
                            </div>


                        </div>



                    </div> */}
                    <div className="col-2"> </div>

                </div>
                <div className="row">

                    <div className="col-3 col-m-12 col-t-6 col-d-6">
                        <div className="footer-box">
                            <h4 className='footer-heading'>Expo Stand Service</h4>
                            <div className="footer-links">
                                <ul className='footer_link'>
                                    <li className='footer-lists'><Link to="/">Home</Link></li>
                                    <li className='footer-lists'><Link to="/company">About Us</Link></li>
                                    <li className='footer-lists'><Link to="/portfolio">OurWork</Link></li>
                                    <li className='footer-lists'><Link to="/majorExhibitingCities">Trade Show Cities</Link></li>
                                    <li className='footer-lists'><Link to="/tradeShowCalendar">Upcoming trade show</Link></li>
                                    <li className='footer-lists'><Link to="/globalprint">Global FootPrint</Link></li>
                                    <li className='footer-lists'><Link to="/design">Design to Delivery</Link></li>
                                    <li className='footer-lists'><Link to="/blog">Blog</Link></li>
                                    {/* <li className='footer-lists'><Link to="/privacy">Privacy & cookies</Link></li>
                                    <li className='footer-lists'><Link to="/disclaimer">Disclaimer</Link></li> */}
                                    <li className='footer-lists'><Link to="/contactus">Contact Us</Link></li>

                                </ul>
                            </div>
                        </div>


                    </div>
                    <div className="col-3 col-m-12 col-t-6 col-d-6">
                        <div className="footer-box mobilehide">
                            <h4 className='footer-heading'> Service</h4>
                            <div className="footer-links">
                                <ul className='footer_link'>
                                    <li className='footer-lists'><Link to="/consulting">Consulting</Link></li>
                                    <li className='footer-lists'><Link to="/standdesign">Exhibition Stand Design</Link></li>
                                    <li className='footer-lists'><Link to="/standbuilder">Exhibition Stand Builder</Link></li>

                                    <li className='footer-lists'><Link to="/construction">Stand Construction</Link></li>
                                    <li className='footer-lists'><Link to="/graphic">Graphic Production</Link></li>
                                    <li className='footer-lists'><Link to="/managment">Exhibition Management</Link></li>
                                    <li className='footer-lists'><Link to="/audiovisual">Audio & Visual</Link></li>
                                    <li className='footer-lists'><Link to="/installing">Installing & Dismantling</Link></li>



                                </ul>
                            </div>
                        </div>


                    </div>

                    <div className="col-3  col-m-12 col-t-6 col-d-6">
                        <div className="footer-box mobilehide">
                            <h4 className='footer-heading'> Solution</h4>
                            <div className="footer-links">
                                <ul className='footer_link'>
                                    <li className='footer-lists'><Link to="/customstand">Custom Booth Design and Build</Link></li>
                                    <li className='footer-lists'><Link to="/doubledecker">Double Decker Booth Design </Link></li>
                                    <li className='footer-lists'><Link to="/standbuilder">Exhibition Stand Builder</Link></li>

                                    <li className='footer-lists'><Link to="/pavilion">Pavilion Booth Design and Build</Link></li>
                                    <li className='footer-lists'><Link to="/modular">Modular Booth Design </Link></li>
                                    <li className='footer-lists'><Link to="/global">Exhibition Management</Link></li>
                                    <li className='footer-lists'><Link to="/managment">Audio & Visual</Link></li>
                                    <li className='footer-lists'><Link to="/installing">Installing & Dismantling</Link></li>



                                </ul>
                            </div>
                        </div>


                    </div>


                    <div className="col-3  col-m-12 col-t-6 col-d-6">
                        <div className="footer-box">
                            <h4 className='footer-heading'> Contact Us</h4>
                            <div className="footer-links">
                                <ul className='footer_link'>
                                    <li className='footer-lists'><i class="fa-solid fa-phone footer_icon"></i><a href="tel:+48-616255500">+48-616255500</a></li>
                                    <li className='footer-lists'><i class="fab fa-whatsapp footer_icon"></i><a href=""> +48-532499316</a></li>
                                    <li className='footer-lists'><i class="fas fa-envelope footer_icon"></i><a href="mailto: enquiry@expostandservice.com ">enquiry@expostandservice.com</a></li>
                                    <li className='footer-lists'><i class="fab fa-skype footer_icon"></i><a href="">expo stand</a></li>




                                </ul>
                            </div>

                        </div>
                        <img src={Footerimg} alt="" />


                    </div>



                </div>
            </div>
        </div>
    )
}

export default Footer;