import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import emailjs from 'emailjs-com';

import { useForm } from 'react-hook-form';

import VideoBg from '../assests/Video.mp4';
import '../Components/ArroundWorld.css';
import '../Components/Navbar.css';


import '../Components/Nav-2.css';
import TreeLogo from '../Components/Expo.png';
import { Link } from 'react-router-dom';
import '../Components/Responsive.css';
import Img1 from '../Components/Pages/Portimage/Custom/Custom1.jpg';
import Img2 from '../Components/pages/Portimage/Moular/Modular1.jpg';
import Img3 from '../Components/Pages/Portimage/Decker/Decker1.jpg';
import Img4 from '../Components/Pages/Portimage/Pavilon/Pavilion1.jpg';
import Germany from '../images/germany.jpg';
import France from '../images/france.jpg';
import Italy from '../images/italy.jpg';
import India from '../images/india.jpg';
import USA from '../images/USA.jpg';
import Uk from '../images/Uk.jpg';
import UAE from '../images/UAE.jpg';
import China from '../images/china.jpg';
import Netherland from '../images/netherland.jpg';
import Thailand from '../images/thailand.jpg';
import Spain from '../images/spain.jpg';
import Switzerland from '../images/switzerland.jpg';
import ArroundWorld from './ArroundWorld';
import WorkFlow from './WorkFlow';
import AOS from 'aos';
import 'aos/dist/aos.css';










const Main = () => {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])



  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_35twsni', 'template_rrnl8xf', form.current, 'O2ew_QbdJLHqm2xVa')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm()


  const onSubmit = data => console.log(data);






  return (
    <div className="main">
      <div className="video-1">






        <div className="expo-video">
          <video src={VideoBg} autoPlay loop muted className='home_video' />

          <div className="quote">

            <div className="button-quote">

              <button type='submit' id='submit-btn' className='get-free btn-quote'>Get A Free Quote</button>

              <div className="sidebar-form">

                <div className="call-action">
                  <button type='submit' id='closeside' className='get-free btn-quote'> <i className="fas fa-times "></i></button>

                </div>
                <h3>Get A Quote</h3>

                <form action="" ref={form} onSubmit={sendEmail} >
                  <div className="user_details">
                    <div className="form-group">
                      <label htmlFor=""></label>
                      <i className='fa fa-user '></i>
                      <input type="text" className='form-control' placeholder='Contact Name' name='user_contactname' />
                    </div>
                    <div className="form-group">
                      <label htmlFor=""></label>
                      <i class="far fa-building "></i>
                      <input type="text" className='form-control' placeholder='Company Name' name='user_companyname' />
                    </div>
                    <div className="form-group">
                      <label htmlFor=""></label>
                      <i className="fas fa-envelope-open-text "></i>
                      <input type="text" className='form-control' placeholder='Email' name='user_email' required />
                    </div>
                    <div className="form-group">
                      <label htmlFor=""></label>
                      <i class="fas fa-mobile-alt "></i>

                      <input type="text" className='form-control' placeholder='mobile' name='user_number' />
                    </div>
                    <div className="form-group">
                      <label htmlFor=""></label>
                      <i class="fas fa-store-alt "></i>

                      <input type="text" className='form-control' placeholder='Exhibiton' name='user_exhiname' />
                    </div>
                    <div className="form-group">
                      <label htmlFor=""></label>
                      <i class="fas fa-share-alt "></i>
                      <input type="text" className='form-control' placeholder='Dimension & Area ' name='user_location' />
                    </div>
                    <textarea id="" cols="30" rows="4" placeholder='Description/Message' name='user_message' required></textarea>
                    <label for="file-upload" class="custom-file-upload">
                      <i class="fas fa-file-import"></i> Browser..</label>

                    <input type="submit" value="Send Message" id="submit-btn" />
                  </div>
                </form>



              </div>


            </div>
          </div>

          <div class="marquee">
            <div>
              <span>Transforming Great Design Into World-Class Exhibits</span>
              <span>We Don't Make It Possible-We Make It Happen</span>
              <span>Individually We Are unique, Together-We Are ExtraOrdinary</span>
              <span>Transforming Great Design Ideas InTo World-Class Exhibits</span>
              <span>A Team Of Specialists, With a Goal To Dominate The Exhibition Space Worldwide</span>
              <span>Ambitious Leaders Connected By The Power of Infectious Creativity</span>

            </div>
          </div>




        </div>




      </div>
      <div className="wrap-1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-m-12 col-t-12 col-d-12">
              <div className="introduction-page">
                <p className='intro-para2' >Meet The Best Exhibition Stand Builders in Europe | GLOBAL EXHIBITION Experts
                </p>
                <p className='intro-para1'>Ensures of be the best exhibition stand builder in Europe for you </p>
              </div>
            </div>

          </div>
          <div className="row germany">

            <div className="col-8 col-m-12 col-t-12 ">
              <div className="flex-container">

                <p className='intro-para3'>As a professional <span>exhibition stand builder,</span> we take care of your showcase appearance from A to Z. Visiting exhibitions in Germany, where one of the largest and most visited exhibitions in Europe takes place, requires specialist knowledge. In addition, we are the leading  <span> exhibition stand builder in Germany </span>with an innovative and competent production staff that meets all the requirements of our customers.</p>
                <div className="exhibition-hand">
                  <p className='intro-para4'>We are the king of <span> exhibition stand design & construction </span> as a true <span>exhibition stand builder in Germany </span>; we love designing and building exhibition stands. ESS began its journey as a total solution for the design and creation of:</p>
                  <ul className='intro-lists'>
                    <li className='intro-links'><i className="far fa-hand-point-right"></i> Exhibition stands, </li>
                    <li className='intro-links'> <i className="far fa-hand-point-right"></i> German hangar tents, </li>
                    <li className='intro-links'> <i className="far fa-hand-point-right"></i> Metal fabrication, </li>
                    <li className='intro-links'> <i className="far fa-hand-point-right"></i> Corporate facilities and other similar mega companies. </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-4 col-m-12 col-t-8">


              <div className="double_image">


                <img src={Img2} alt="" className='big-img' />
                <div className="white-back">
                  <img src={Img3} alt="" className='whiteback-img' />

                </div>
              </div>




            </div>

          </div>

        </div>
      </div>

      <div className="wrap-2">
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-10 col-m-12 col-t-12">
              <div className="wrk-excel">

                <h2 className='excel-workhead'>
                  How do we excel at our work?</h2>
                <p className='excel-para'>Depending on your business goal, we create a project that fits your needs and budget. We successfully deliver the highest quality services globally with our manufacturing facilities and the vast experience of our experienced engineers, managers, and technicians. We produce the highest quality <span> exhibition stand design & construction </span> in our manufacturing facility.</p>
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
          <div className="row excelgridrow">

            <div className="excel_gridbox">
              <div className="service-1">
                <img src={Img1} alt="" />
                <div className="service-head">
                  <h4>CUSTOM STANDS</h4>
                </div>
              </div>
              <div className="service-1">
                <img src={Img1} alt="" />
                <div className="service-head">
                  <h4>MODULAR STANDS</h4>
                </div>
              </div>
              <div className="service-1">
                <img src={Img1} alt="" />
                <div className="service-head">
                  <h4>COUNTRY PAVILION</h4>
                </div>
              </div>
              <div className="service-1">
                <img src={Img1} alt="" />
                <div className="service-head">
                  <h4>DOUBLE DECKERS</h4>
                </div>
              </div>


            </div>
          </div>









        </div>


      </div>
      <div className="wrap-3">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10 col-m-12 col-ml-12 col-ip-12 col-l-12 col-p-12 col-t-12">
              <h3 className='experience-head'>Get The Best With Our Years Of Experience And Showcase Expertise</h3>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10 col-m-12 col-ip-12  col-l-12 col-p-12 col-t-12">
              <div className="expe-standpara">
                <p className='intro-para3'>
                  We realize our exhibition stand designs are exclusively based on your requirements. We have built exhibition stands and positive customer relationships for years. We have an experienced in-house team of <b> exhibition stands builders </b> and designers in Germany and a local production unit in Germany to build your stand. Our comprehensive service solutions distributed worldwide in UAE (our manufacturing facility), Europe, USA, and across the globe enable us to become the most trusted and leading brand in this highly competitive industry.
                </p>
                <span className='arrow_stand'></span>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>





      <div className="wrap-4">
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 col-m-12 col-ml-12 col-l-12 col-p-12 col-t-12">
              <h2 className='expo-world'>Expo Stand Services Around The World</h2>
            </div>
            <div className="col-2 "></div>
          </div>
          <div className="row">
            <div className="box">
              <Link to="/exhibition-stand-contractor-in-uk" className='box-link'>
                <div className="world-img">
                  <img src={Uk} alt="ulflag" className='indianflag' />
                </div>

                <p className='world-para'>Uk</p>
              </Link>
            </div>

            <div className="box">
              <Link to="/exhibition-stand-designs-in-germany" className='box-link'>
                <div className="world-img">
                  <img src={Germany} alt="GermanyFlag" className='indianflag' />
                </div>

                <p className='world-para'>Germany</p>
              </Link>
            </div>
            <div className="box">
              <Link to="/exhibition-stand-design-in-netherlands" className='box-link'>
                <div className="world-img">
                  <img src={Netherland} alt="netherlandflag" className='indianflag' />
                </div>

                <p className='world-para'>Netherland</p>
              </Link>
            </div>

            <div className="box">
              <Link to="/https://www.expostandservice.us/trade-show-booth-design/" className='box-link'>
                <div className="world-img">
                  <img src={USA} alt="usaflag" className='indianflag' />
                </div>

                <p className='world-para'>USA</p>
              </Link>
            </div>

            <div className="box">
              <Link to="/exhibition-stand-contractor-in-dubai" className='box-link'>
                <div className="world-img">
                  <img src={UAE} alt="uaeflag" className='indianflag' />
                </div>

                <p className='world-para'>UAE</p>
              </Link>
            </div>
            <div className="box">
              <Link to="/exhibition-design-company-in-switzerland" className='box-link'>
                <div className="world-img">
                  <img src={Switzerland} alt="switzerland" className='indianflag' />
                </div>

                <p className='world-para'>Switzerland</p>
              </Link>
            </div>
            <div className="box">
              <Link to="/exhibition-design-company-in-spain" className='box-link'>
                <div className="world-img">
                  <img src={Spain} alt="spainflag" className='indianflag' />
                </div>

                <p className='world-para'>Spain</p>
              </Link>
            </div>
            <div className="box">
              <Link to="/exhibition-stall-design-company-in-india" className='box-link'>
                <div className="world-img">
                  <img src={India} alt="indianflag" className='indianflag' />
                </div>

                <p className='world-para'>India</p>
              </Link>
            </div>
            <div className="box">
              <Link to="/exhibition-stand-design-in-china" className='box-link'>
                <div className="world-img">
                  <img src={China} alt="chinaflag" className='indianflag' />
                </div>

                <p className='world-para'>China</p>
              </Link>
            </div>


            <div className="box">
              <Link to="/booth-stand-design-company-in-france" className='box-link'>
                <div className="world-img">

                  <img src={France} alt="franceflag" className='indianflag' />
                </div>

                <p className='world-para'>France</p>
              </Link>
            </div>


            <div className="box">
              <Link to="/exhibition-stand-design-in-thailand" className='box-link'>
                <div className="world-img">
                  <img src={Thailand} alt="thailand" className='indianflag' />
                </div>

                <p className='world-para'>Thailand</p>
              </Link>
            </div>


            <div className="box">
              <Link to="/exhibition-stand-design-company-in-italy" className='box-link'>
                <div className="world-img">
                  <img src={Italy} alt="italyflag" className='indianflag' />
                </div>

                <p className='world-para'>Italy</p>
              </Link>
            </div>


          </div>
        </div>
      </div>
      <div className="wrap-5 ">
        <div className="container contain">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 col-m-12 col-p-12">
              <h2 className='expo-world'>Client Satisfaction Is What We Work For!</h2>
            </div>
            <div className="col-2"></div>
          </div>
          <div className="row sketch-back">
            <div className="col-2"></div>
            <div className="col-8 col-m-12 col-l-12 col-p-12 col-t-12">
              <div className="years-experience">
                <p className='yearexp-para'>Client Satisfaction Is What We Work For!
                  We give our customers a 100% credit guarantee a few weeks before the show. Expo Stand Services creates a range of unique exhibition stands for you to choose from in Germany. You can connect with us for an exclusive offer for an exhibition stand builder and contractor in Germany. In addition, we take care of everything from the 3D design of exhibition stands to graphic printing to the assembly and disassembly of individual stands.</p>

                <p className='yearexp-para paraexp para'>With each project, we push the boundaries of innovation, delivering the best and most unique display designs to help clients promote their brands as widely as possible.</p>


              </div>
            </div>
            <div className="col-2"></div>

          </div>


        </div>
      </div>
      <div className="wrap-6">
        <div className="container">
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 col-m-12 col-p-12">
              <h2 className='expo-world'>Join Hands With Us For The Best ROI</h2>
            </div>
            <div className="col-2"></div>

          </div>
          <div className="contain_2 left-container" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">

            <div className="text-box">
              <img src={TreeLogo} alt="" className='tree_logo' />
              <h3 className="tree-heading">Who We Are</h3>
              <p>We are your reliable exhibition stand builder in Germany, working and successfully serving a variety of brands and clients worldwide. We understand your special needs & wishes and deliver the entire stand and exhibition services without problems.</p>
              <span className='left-container-arrow'></span>
            </div>
          </div>
          <div className="contain_2 right-container" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="text-box">
              <img src={TreeLogo} alt="" className='tree_logo' />

              <h3 className="tree-heading">What Matters To Us The Most?</h3>
              <p>You and your showcasing needs are our priority!
                <br />
                <br />

                We know how important a well-built exhibition stand is! So, as a pioneer <b>exhibition stand builder in Germany,</b> we build and deliver stands of international quality with the highest precision and technical specifications. Our hardworking craftsmen carry out each exhibition stand construction and build a unique stand by paying attention to every detail customer’s mention.</p>
              <span className='right-container-arrow'></span>
            </div>
          </div>
          <div className="contain_2 left-container" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="text-box">
              <img src={TreeLogo} alt="" className='tree_logo' />
              <h3 className="tree-heading">What Do We Do For You?</h3>
              <p>We offer <b>exhibition stand design & construction </b> services in Germany per your requirements, including custom, modular, double-storey, and pavilion stands. With us, all questions about exhibition stand services get solved and served in one place. Be it a local or an international exhibition, we are experts in designing exhibition stands that work best in your favour when exhibiting in Germany or anywhere in Europe.</p>
              <span className='left-container-arrow'></span>
            </div>
          </div>
          <div className="contain_2 right-container" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <div className="text-box">
              <img src={TreeLogo} alt="" className='tree_logo' />
              <h3 className="tree-heading">How Do We Work For You?</h3>
              <p>Assessing your needs, goals, and vision is the first step of our procedure. We involve our clients at every stage of developing the perfect plan. We carry out the entire project taking into account the client’s assessment, design, and the smallest details, with our in-house production facility and warehouse across the globe.</p>
              <span className='right-container-arrow'></span>
            </div>
          </div>


        </div>
      </div>
      <ArroundWorld />
      {/* <JQuery /> */}
      <WorkFlow />




    </div>









  )
}

export default Main;