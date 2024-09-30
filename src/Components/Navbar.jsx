
import React from 'react'

import { Link } from 'react-router-dom';
import './Navbar.css';

import '../Components/Nav-2.css';
import Drop2 from '../Components/Drop2';
// import '../Components/Responsive.css';

import Logo from '../Components/Expo.png'
import Navbar2 from '../Components/Navbar2';



import Pop2 from './cta/Pop2';

const Navbar = () => {


  return (
    <>



      <div className="background-2">
        <div className="container">
          <div className="row">
            <div className="col-4 email_col">

              <div className="email-contact" data-aos="fade-right">

                <ul className='unorder'>
                  <li className='email-contact'><a href="tel:+48-616255500"><span> <i class="fa-solid fa-phone icons"></i> +48-616255500</span></a></li>
                  <li className='email-contact'><a href="mailto:enquiry@expostandservice.com"><span> <i className="fas fa-mail-bulk icons "></i> enquiry@expostandservice.com</span></a></li>
                </ul>

              </div>

            </div>
            <div className="col-2 logo_col  ">
              <div className="company-logo" data-aos="fade-up">

                <Link to="/"><img src={Logo} alt='Logo' className='Expo-logo' /></Link>
              </div>
            </div>
            <div className="col-6">
              <div className="Delivery-btn" data-aos="fade-left" data-aos-delay='50' data-aos-anchor-easing='ease-in-out'>

                <button className='download_btn' >
                  <a href='#popup-box' className='d_btn' id='open4'>
                    Download Brouchure
                    <span class="first"></span>
                    <span class="second"></span>
                    <span class="third"></span>
                    <span class="fourth"></span>
                  </a>
                </button>

                <button className='download_btn'>
                  <Link to='https://www.expostandservice.us/' className='d_btn'>
                    USA Presence
                    <span class="first"></span>
                    <span class="second"></span>
                    <span class="third"></span>
                    <span class="fourth"></span>
                  </Link>
                </button>
                <button className='download_btn'>
                  <Link to='/delivery' className='d_btn'>
                    Design To Delivery
                    <span class="first"></span>
                    <span class="second"></span>
                    <span class="third"></span>
                    <span class="fourth"></span>
                  </Link>
                </button>
              </div>





            </div>
            <Pop2 />
          </div>
        </div>
      </div>
      <div className="background-3">
        <Navbar2 />
      </div>










    </>

  )
}

export default Navbar