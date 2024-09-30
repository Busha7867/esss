import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';
import { useState } from 'react'


const Navbar = () => {

  const [click, setClick] = useState(false);


  const handleClick = () => {
    setClick(!click)
  }

  const closeMobileMenu = () => {
    setClick(false)

  }


  return (
    <div className="container">
      <nav>
        <div className="menu-icon" onClick={handleClick}>

          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>


        </div>


        <ul class="menu" className={click ? 'nav-menu active' : 'nav-menu'} >

          <li>
            <Link to="/" onClick={closeMobileMenu}><i className="fas fa-house-user home" ></i></Link>

          </li>
          <li>

            <label for="drop-1" class="toggle">About Ess <i className="fa-solid fa-angle-down"></i></label>
            <Link>About Ess <i className="fa-solid fa-angle-down"></i></Link>
            <input type="checkbox" id="drop-1" />
            <ul className='unorder_sublinks'>
              <li><Link to="/company-profile" onClick={closeMobileMenu}>Company Profile</Link></li>
              <li><Link to="/global-presence" onClick={closeMobileMenu}>Global FootPrint</Link></li>
              <li ><Link to="/our-team" onClick={closeMobileMenu}>Our Team</Link></li>
              <li ><Link to="/client-testimonial" onClick={closeMobileMenu}>Client TestiMonial</Link></li>
            </ul>

          </li>
          <li>

            <label for="drop-2" class="toggle">Exhibtion Stand <i className="fa-solid fa-angle-down"></i></label>
            <Link>Exhibition Stand <i className="fa-solid fa-angle-down"></i></Link>
            <input type="checkbox" id="drop-2" />
            <ul className="unorder_sublinks">
              <li className='exhbdrop_links'><Link to="/custom-exhibition-stand" onClick={closeMobileMenu}>Custom Exhibition Stand</Link></li>
              <li className='exhbdrop_links'><Link to="/double-decker-exhibition-stands" onClick={closeMobileMenu}>Double Decker Exhibition Stands</Link></li>
              <li className='exhbdrop_links'><Link to="/country-pavilion-exhibition-design" onClick={closeMobileMenu}>Country Pavilion Exhibition Design</Link></li>
              <li className='exhbdrop_links'><Link to="/portable-modular-exhibition-stand" onClick={closeMobileMenu}>Modular Portbal Exhibition Stand</Link></li>

            </ul>
          </li>
          <li  >
            <Link to="/portfolios" onClick={closeMobileMenu}>Portfolio</Link>
          </li>
          <li  >
            <Link to="/trade-shows-calender" onClick={closeMobileMenu}>Show Calendar</Link>
          </li>
          <li  >
            <Link to="/major-exhibiting-cities" onClick={closeMobileMenu}> Exhibition Cities</Link>
          </li>
          <li></li>
          <li>

            <label for="drop-3" class="toggle">Global Presence <i className="fa-solid fa-angle-down"></i></label>
            <Link>Global Presence <i className="fa-solid fa-angle-down"></i></Link>
            <input type="checkbox" id="drop-3" />
            <ul className='unorder_sublinks'>
            <li className='global_links'><Link to='/exhibition-stand-contractor-in-uk' onClick={closeMobileMenu}>UK Exhibition</Link></li>
              <li className='global_links'><Link to='/exhibition-stand-designs-in-germany' onClick={closeMobileMenu}>Germany Exhibition</Link></li>
              <li className='global_links'><Link to='/exhibition-stand-design-in-netherlands' onClick={closeMobileMenu} >Netherlands Exhibition</Link></li>
              <li className='global_links'><Link to='https://www.expostandservice.us/trade-show-booth-design/' onClick={closeMobileMenu} >USA Trade Show</Link></li>
              <li className='global_links'><Link to='/exhibition-stand-contractor-in-dubai' onClick={closeMobileMenu} >UAE Exhibition</Link></li>
           
              <li className='global_links'><Link to='/exhibition-design-company-in-switzerland' onClick={closeMobileMenu}>Switzerland Exhibition</Link></li>
              <li className='global_links'><Link to='/exhibition-design-company-in-spain' onClick={closeMobileMenu}>Spain Exhibition</Link></li>
              <li className='global_links'><Link to='/exhibition-stall-design-company-in-india' onClick={closeMobileMenu}>India Exhibition</Link></li>
              <li className='global_links'><Link to='/exhibition-stand-design-in-china' onClick={closeMobileMenu}>China Exhibition</Link></li>
              <li className='global_links'><Link to='/exhibition-stand-design-company-in-italy' onClick={closeMobileMenu}>Italy Exhibition</Link></li>
              <li className='global_links'><Link to='/booth-stand-design-company-in-france' onClick={closeMobileMenu} >France Exhibition</Link></li>
             
       
             
           
              <li className='global_links'><Link to='/exhibition-stand-design-in-thailand' onClick={closeMobileMenu}>Thailand Exhibition</Link></li>
             
            </ul>

          </li>
          <li>

            <label for="drop-4" class="toggle">Content Hub <i class="fa-solid fa-angle-down"></i>
            </label>
            <Link>Content Hub <i className="fa-solid fa-angle-down"></i></Link>
            <input type="checkbox" id="drop-4" />
            <ul className='unorder_sublinks'>
              <li className='content_links'><Link to='/blog' onClick={closeMobileMenu}>Blog</Link></li>
              <li className='content_links'><Link to='/exhibition-stand-builder' onClick={closeMobileMenu}>Exhibition Stand Builder</Link></li>
              <li className='content_links'><Link to='/exhibition-stand-design' onClick={closeMobileMenu}>Exhibition Stand Design</Link></li>
              <li className='content_links'><Link to='/exhibition-stand-construction' onClick={closeMobileMenu}>Exhibition Stand Construction</Link></li>
              <li className='content_links'><Link to='/exhibition-graphic-designing-and-production' onClick={closeMobileMenu}>Graphic Production</Link></li>
              <li className='content_links'><Link to='/exhibition-stand-management' onClick={closeMobileMenu}>Exhibition Managment</Link></li>
              <li className='content_links'><Link to='/exhibition-stand-audio-visual' onClick={closeMobileMenu}>Audio Visual</Link></li>
              <li className='content_links'><Link to='/exhibition-stand-installation-dismantling' onClick={closeMobileMenu}>Installing & Dismantling</Link></li>

            </ul>

          </li>
          <li><Link to="/contact-us" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar