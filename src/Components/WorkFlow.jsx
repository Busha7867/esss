import React from 'react'
import { useState } from 'react';
import './ArroundWorld.css';
import { Link } from 'react-router-dom';
import Datagathering from '../Components/icons/data-gathering.png';
import Creative from '../Components/icons/graphic-tablet.png';
import Feedback from '../Components/icons/feed.png';
import Supervision from '../Components/icons/supervised.png';
import Production from '../Components/icons/production.png';
import Warehouse from '../Components/icons/warehouse.png';
import Seeds from '../images/cnseeds.jpg';
import Maxbil from '../images/maxbill.jpg';
import Paula from '../images/paula.webp';
import LSV from '../images/paula.webp';
import FreshPerch from '../Components/Fresh.jpg';
import Denis from '../images/Denis.webp';
// import LogoSlider from './LogoSlider';
import CounterUp from './CounterUp';
import Form from './Form';
import Footer from './Footer';
import App2 from '../../App2';
import Img1 from '../Components/Pages/Contenthubpages/images/one.jpg';
import Img2 from '../Components/Pages/Contenthubpages/images/two.jpg';
import Img3 from '../Components/Pages/Contenthubpages/images/three.jpg';
import Universe from './Universe';









const WorkFlow = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };







  return (
    <div className="wrapap">

      <div className="work-1">
        <div className="container">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10 col-m-12 col-t-12">

              <h2 className='work-heading'>OUR WORKFLOW</h2>
              <p className='work_para'>
                Being the leader in exhibition stand services, we start the work only after understanding your company’s vision, and objective. Our goal is to provide a remarkable experience throughout the entire process of stand designing and fabrication across the globe.
              </p>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
      <div className="work-2">
        <div className="container">
          <div className="row ">
            <div className="col-4 col-m-12">
              <div className="work-box feed_1">
                <img src={Datagathering} alt="icon" className='data_icon' />
                <h3 className='workexp-heading'>Brief Form</h3>
                <p className='work-para'>We discuss and gather information from the client to provide design concepts.</p>
              </div>
            </div>
            <div className="col-4 col-m-12">
              <div className="work-box feed_2">
                <img src={Creative} alt="icon" className='data_icon' />
                <h3 className='workexp-heading'>Creative Design Options</h3>
                <p className='work-para'>We create multiple 3D design concepts according to your brief requirements.</p>
              </div>
            </div>
            <div className="col-4 col-m-12">
              <div className="work-box feed_3">
                <img src={Feedback} alt="icon" className='data_icon' />
                <h3 className='workexp-heading'>Client Feedback</h3>
                <p className='work-para'>We involve our clients throughout the process, take feedback and optimize the design to .</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="work-3">
        <div className="container">
          <div className="row">
            <div className="col-4 col-m-12">
              <div className="work-box-2 feed_4 ">
                <img src={Supervision} alt="icon" className='data_icon' />
                <h3 className='workexp-heading'>Showsite Supervision</h3>
                <p className='work-para'>Our project manager will manage any unforeseen circumstances to  .</p>

              </div>
            </div>
            <div className="col-4 col-m-12">
              <div className="work-box-2  feed_5">
                <img src={Warehouse} alt="icon" className='data_icon' />
                <h3 className='workexp-heading'>Install, Dismantle & Warehouse</h3>
                <p className='work-para'>Our project manager will manage any unforeseen circumstances to </p>

              </div>
            </div>
            <div className="col-4 col-m-12">
              <div className="work-box-2  feed_6">
                <img src={Production} alt="icon" className='data_icon' />
                <h3 className='workexp-heading'>In-House Production</h3>
                <p className='work-para'>Our project manager will manage any unforeseen circumstances to </p>

              </div>
            </div>

          </div>
        </div>


      </div>





      <div className="work-4">
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 col-m-12 col-t-12 col-d-12"><h2 className='client_say'>What Our Client Says</h2></div>
            <div className="col-3"></div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-8 col-m-12 col-t-12 col-d-12 ">

              <div className="bloc-tabs">
                <button
                  className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(1)}
                >
                  <div className="clients_img">
                    Perch <img src={FreshPerch} alt="" className='client_pic' />
                  </div>
                </button>
                <button
                  className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(2)}
                >
                  <div className="clients_img">
                    CN Seeds <img src={Seeds} alt="" className='client_pic' />
                  </div>
                </button>
                <button
                  className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(3)}
                >
                  <div className="clients_img">
                    Maxbill <img src={Maxbil} alt="" className='client_pic' />
                  </div>
                </button>
                <button
                  className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(4)}
                >
                  <div className="clients_img">
                    Paula <img src={Paula} alt="" className='client_pic' />
                  </div>
                </button>
                <button
                  className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
                  onClick={() => toggleTab(5)}
                >
                  <div className="clients_img">
                    Denis <img src={Denis} alt="" className='client_pic' />
                  </div>
                </button>
              </div>
            </div>
            <div className="col-1"></div>
          </div>
          <div className="row">
            <div className="col-2"></div>
            <div className="col-12 col-m-12 col-t-12">

              <div className="content-tabs">
                <div className="row">
                  <div className="col-6 col-m-12 col-t-12 ">





                    <div
                      className={toggleState === 1 ? "content  active-content" : "content"}
                    >
                      <img src={FreshPerch} alt="" className='content-images' />
                      <p className='seeds'>Nelson</p>
                      <span className='seeds-span'>Fresh Perch</span>
                      <p className='seeds-para'>
                        Hello, on behalf of Fresh Perch, we want to appreciate Expo Stand Services for constructing our stand for Barcelona Expo 2023. We gave them the contract very late, but they finished the job within a week and handed over the stand to us. The quality of the stand was up to our expectations, and next year we also look forward to giving them a contract.
                      </p>
                    </div>

                    <div
                      className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                      <img src={Seeds} alt="" className='content-images' />
                      <p className='seeds'>CN Seeds</p>
                      <span className='seeds-span'>Fruit Logistics</span>
                      <p className='seeds-para'>

                        Hi today is the last day of the show and we are happy with booth built by Expo Stand Services. They really listen to what we wanted and adapted the design to how we would like it. Thank You!!
                      </p>
                    </div>

                    <div
                      className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                      <img src={Maxbil} alt="" className='content-images' />
                      <p className='seeds'>Maxbill</p>
                      <span className='seeds-span'>Marketing Director
                      </span>
                      <p className='seeds-para'>
                        We are very happy with how everything went. We came on the first day of the exhibition, and everything was set up. We are very happy with the quality of the furniture. We were actually worried that the sets would not be put together in the best way, but it’s pretty flawless. Thank you, guys.
                      </p>
                    </div>
                    <div
                      className={toggleState === 4 ? "content  active-content" : "content"}
                    >
                      <img src={Paula} alt="" className='content-images' />
                      <p className='seeds'>Paula Canto
                      </p>
                      <span className='seeds-span'>Green Eagle Solutions</span>
                      <p className='seeds-para'>
                        I wanted to tell all of you how happy we are about the booth that Expo Stand Service has done for us. They have done an amazing job. They were very-very fast in terms of their responsiveness, so that’s why we are very happy. So definitely, we will collaborate with them again in the future.

                      </p>

                    </div>
                    <div
                      className={toggleState === 5 ? "content  active-content" : "content"}
                    >
                      <img src={Denis} alt="" className='content-images' />
                      <p className='seeds'>Denis</p>
                      <span className='seeds-span'>Energomera</span>
                      <p className='seeds-para'>
                        I would like to express my gratitude to the company Expo Stand Services, which has done a very good job. They created such a nice exhibition stand. The job is done very well, and I will be happy to work with Expo Stand Services again in the future.

                      </p>

                    </div>
                  </div>
                  <div className="col-6 col-m-12  col-t-12">

                    <div
                      className={toggleState === 1 ? "content  active-content" : "content"}
                    >

                      <div className="iframe-video">
                      <iframe width={560} height={315} src="https://www.youtube.com/embed/9HVj4-mjfDM?si=LUqUoxPxSfFLzbJS" title="YouTube video player"></iframe>
                      </div>
                    </div>
                    <div
                      className={toggleState === 2 ? "content  active-content" : "content"}
                    >
                      <div className="iframe-video">
                        <iframe width={560} height={315} src="https://www.youtube.com/embed/OY5e1cQrA6s" title="YouTube video player" ></iframe>
                      </div>
                    </div>
                    <div
                      className={toggleState === 3 ? "content  active-content" : "content"}
                    >
                      <div className="iframe-video">
                      <iframe width={560} height={315} src="https://www.youtube.com/embed/OY5e1cQrA6s?si=30UZpI4cxZT07FYf" title="YouTube video player"></iframe>
                      </div>
                    </div>
                    <div
                      className={toggleState === 4 ? "content  active-content" : "content"}
                    >
                      <div className="iframe-video">
                      <iframe width={560} height={315} src="https://www.youtube.com/embed/Yk-8lJj2wyI?si=oDqUIQQSDAlUihpa" title="YouTube video player"></iframe>
                      
                      </div>
                    </div>
                    <div
                      className={toggleState === 5 ? "content  active-content" : "content"}
                    >
                      <div className="iframe-video">
                      <iframe width={560} height={315} src="https://www.youtube.com/embed/VGkOjxlM0Wc" title="YouTube video player" ></iframe>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="work-5">
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              <h2 className='work-heading'>Article_Blog</h2>
            </div>
            <div className="col-3"></div>
          </div>
         
          <div className="row">
            <div className="article_grid">
              <div className="article-box">
                <div></div>
                <img src={Img1} alt="" className='article-img' />
                <div className="article-blog">
                  <h5 className='article-head'>What makes us the best exhibition stand design company in Basel? <i class="fas fa-blog"></i></h5>
                  {/* <span>September 21, 2023 / Exhibition</span> */}
                  {/* <p className='article-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, sit.</p> */}
                  <Link to='read-more' className='readmore'>ReadMore</Link>

                </div>
              </div>
              <div className="article-box">
                <div></div>
                <img src={Img2} alt="" className='article-img' />
                <div className="article-blog">
                  <h5 className='article-head'>ESS: Excels in exhibiting with the industry understanding <i class="fas fa-blog"></i></h5>
                  {/* <p className='article-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, sit.</p> */}
                  <Link to='read-more' className='readmore'>ReadMore</Link>

                </div>
              </div>
              <div className="article-box">
                <div></div>
                <img src={Img3} alt="" className='article-img' />
                <div className="article-blog">
                  <h5 className='article-head'>The Only Exhibition Stand Builder in Berlin You’ll Ever Need <i class="fas fa-blog"></i></h5>
                  {/* <p className='article-para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, sit.</p> */}
                  <Link to='read-more' className='readmore'>ReadMore</Link>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* <LogoSlider /> */}
      <CounterUp />
      <Form />

      <Footer />
      <Universe />




    </div>



  )
}

export default WorkFlow;