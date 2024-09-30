import React from "react";
import '../pages2/germany.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Delivery from '../Portimage/fastdelivery.png';
import Peace from '../Portimage/meditation.png';
import Promise from '../Portimage/promise.png';
import Investment from '../Portimage/Investment.png';
import Trust from '../Portimage/friendship.png';
import Experience from '../Portimage/experience.png';
import CounterUp from "../../CounterUp";
import Form from "../../Form";
import Footer from "../../Footer";
import Captcha2 from "../../captcha2";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../ArroundWorld.css';
// import GermanyVideo from '../pages2/video/germanyworld.mp4';




const Capetown = () => {

    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const onSubmit = data => console.log(data);



    return (
        <div className="section">

            <div className="germany-1 capetown-1">
                {/* <video src={GermanyVideo} autoPlay muted className="gervideo"></video> */}
                <div className="container">
                    <div className="row ">
                        <div className="col-4"></div>
                        <div className="col-4 col-m-12">
                            <div className="glassEffect">
                                <h1 className="glass_headinggermany">CAPE TOWN</h1>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>
                </div>

            </div>
            <div className="germany-2">
                <div className="container">
                    <div className="row">

                        <div className="col-12 col-m-12 col-t-12">
                            <h2 className="germany_head" data-aos="flip-left" data-aos-duration="1500">
                                Expo Stand Services – Exhibition Stand Design Company In Cape Town <i class="fas fa-globe-europe"></i></h2>
                        </div>

                    </div>
                    <div className="row ">
                        <div className="col-8 col-m-12 col-t-12">


                            <div className="flex-container">


                                <p className='intro-para3 germanpara'>

                                    Here at expo stand services, we strive to create innovative solutions to exhibit your products and increase the image of your brand. We provide stands of different styles, shapes, sizes, colors, themes, designs, like pop-up stands that are very widely used all over South Africa in Trade shows and exhibitions.

                                    We, as a leading exhibition stand design company in Cape Town, provide turnkey services from concept designing to manufacturing, installation, and project management, and all of this is available at a very convenient price. We are the first name when searching for exhibition stand designers in Cape Town, exhibition stand contractor in Johannesburg, or <a href="">exhibition stand builder </a> in South Africa.

                                    From modern to bespoke, portable and intelligent stand design solutions, we have got you covered.


                                </p>

                            </div>
                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">Creativity As Its Best</h3>

                            <p className='intro-para3 germanpara'>
                                As a foremost exhibition booth builder in Cape Town, we believe in aesthetics. Aesthetics breed innovation that is the secret ingredient that makes a stand design go further as a trade show presentation, giving visitors an extraordinary view of your brands.

                                Our creative designs generate an emotional attachment with your brand or product. With expo stand services, it will take only a second for your company to be noticed, remembered, or create an everlasting impression. Our project-specific designs speak a lot about the exhibitors. When uniquely and memorably presented, our stand designs can do wonders for your show.


                            </p>




                      
                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">Why Cape Town?</h3>

                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>
                                    Cape Town is a major port city in South Africa and a global hub for exhibitions and trade shows. Every year, hundreds of thousands of exhibitors, business tourists, visitors, companies come here to share their experiences, launch products, increase sales, communicate their business ideas and explore new business opportunities. This makes it a popular destination for companies who are looking forward to expanding their business operations to other countries. But every business needs fresh customers for expansion and Cape Town is just the place for you to make a fresh start.
                                    <br />
                                    <br />

                                    The city hosts hundreds of exhibitions and <a href=""> trade shows,</a> offering a platform for all to benefit from the industry. The competition is stiff, and chances of success are scarce. To gain a competitive edge, you need a professional approach. Crafting beautiful and effective custom trade show booth design that generates profit is our specialty.

                                    Our bespoke designs integrate consistency, contrast, innovation, thereby providing a colorful, striking display to enhance your brand visibility. As a leading exhibition stand design company in South Africa, our services are accessible to almost every major city from Johannesburg to Cape Town, Durban, Pretoria, and more.





                                </p>

                            </div>
                            <h3 className="german_para" data-aos="fade-right" data-aos-duration="1500">Exhibition Stand Contractors In Cape Town</h3>

                            <div className="flex-container">

                                <p className='intro-para3 germanpara'>
                                    As a concerned exhibition booth builder in Cape Town, we are frequently reviewing our carrier performances in order to provide you a cost-effective exhibition solution. As a dedicated exhibition booth builder in South Africa, we care for your investment and strive to deliver value for money services with a higher ROI guaranteed.

                                    Since, most of the exhibition stand contractors in Cape Town and trade show booth builders in South Africa, deliver quality products that are as good as ours, it is hard to say which one is best for you. What sets us apart is our ability to bring innovation in every project and our transparency in prices. As long as we stay loyal to our customers, nothing can beat us in terms of integrity, reliability, and work excellence.



                                </p>







                            </div>





                        </div>
                        <div className="col-4 col-m-12">
                            <div className="cities_box" data-aos="zoom-in-left" data-aos-duration="2000">
                            <div className="cities_links">
                                        <Link to='/barcelona' className="cities_item">Barcelona</Link>
                                        <Link to='/bologna' className="cities_item">Bologna</Link>
                                        <Link to='/berlin' className="cities_item">Berlin</Link>
                                        <Link to='/bermingham' className="cities_item">Birmingham</Link>
                                        <Link to='/cologne' className="cities_item">Cologne</Link>
                                        <Link to='/dusseldorf' className="cities_item">Dusseldorf</Link>
                                        <Link to='/frankfurt' className="cities_item">Frankfurt</Link>
                                        <Link to='/geneva' className="cities_item">Geneva</Link>
                                        <Link to='/hannover' className="cities_item">Hannover</Link>
                                        <Link to='/hamburg' className="cities_item">Hamburg</Link>
                                        <Link to='/milan' className="cities_item">Milan</Link>
                                        <Link to='/munich' className="cities_item">Munich</Link>
                                        <Link to='/madrid' className="cities_item">Madrid</Link>
                                        <Link to='/london' className="cities_item">london</Link>
                                        <Link to='/nurmerg' className="cities_item">Nuremberg</Link>
                                        <Link to='/stuttgart' className="cities_item">Stuttgart</Link>

                                    </div>
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
                                        <label for="file-upload" class="custom-file-upload customside">
                                            <i class="fas fa-file-import"></i> Browser..
                                        </label>


                                        <textarea name="" id="textger" cols="30" rows="4" placeholder='Description/Message'></textarea>
                                        <Captcha2/>
                                        




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








            </div>


        </div>
    )
}

export default Capetown;