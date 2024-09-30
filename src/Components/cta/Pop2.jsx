import React, { useEffect } from 'react';
import '../cta/cta.css';



import { useForm } from 'react-hook-form';
import Captcha from '../Captcha';

const Pop2 = () => {



    const { register, handleSubmit, watch, formState: { errors } } = useForm()


    const onSubmit = data => console.log(data);

    return (
        <div>



            <div className="pop1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">


                            <div id="popup-box" className="modal" data-aos="flip-left" data-aos-duration="1500">
                                <div className="modalcontent">


                                    <div className=" modal_form" >
                                        <form action="" id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

                                            <h2 className='download_h'>Download Brochure</h2>

                                            <div className="user-details">
                                                <label>
                                                    <div className="input-box">
                                                        <i className='fa fa-user  icon'></i>
                                                        <input type="text" {...register("contactname")} placeholder=' Name' required />
                                                        {errors.mobilephone?.type === "required" && "Contact Name is Required"}
                                                    </div>
                                                </label>
                                                <label>
                                                    <div className="input-box">
                                                        <i class="fas fa-mobile-alt icon"></i>
                                                        <input type="text" {...register("mobilephone", { required: true, maxLength: 10 })} placeholder='Mobile / Phone  ' required />
                                                        {errors.mobilephone?.type === "required" && "Mobile Number is Required"}
                                                        {errors.mobilephone?.type === "maxLength" && "Max Length Exceeds"}
                                                    </div>
                                                </label>

                                                <label >
                                                    <div className="input-box">
                                                        <i className="fas fa-envelope-open-text icon"></i>
                                                        <input type="text" {...register("emailaddress")} placeholder='Email Address' required />
                                                        {errors.mobilephone?.type === "required" && "Email is Required"}
                                                    </div>
                                                </label>
                                                <label >
                                                    <div className="input-box">
                                                        <i class="far fa-building icon"></i>
                                                        <input type="text" {...register("companyname")} placeholder='Company Name' required />
                                                        {errors.mobilephone?.type === "required" && "Company Name is Required"}
                                                    </div>
                                                </label>






                                            </div>

                                            <div className="donload_btn">

                                                <a href="https://www.expostandservice.com/ESS-Corporate-Profile.pdf" className='Down_btn' >Download Brochure<i class="fa-solid fa-download"></i></a>
                                            </div>

                                        </form>
                                    </div>
                                    <a href="#"><i className="fas fa-times modalclose box-close"></i></a>
                                     

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pop2;