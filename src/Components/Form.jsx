import React from 'react'
import { Link } from 'react-router-dom'; 
import '../Components/ArroundWorld.css';
import '../Components/Form.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import { useForm } from 'react-hook-form';
import Captcha from './Captcha';




export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ym04e1q', 'template_vg9yw1v', form.current, 'O2ew_QbdJLHqm2xVa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm()


  const onSubmit = data => console.log(data);

  // console.log(watch('contactname'));


  return (
    <div className="form-1">
      <div className="container form-box">
        <div className="row">
          <div className="col-6 contact_col col-m-12 col-t-12 ">
            <div className="form-para">

              <p className='formContact_para'>Contact Us For Free</p>
              <p className='threeD_para'>3D DESIGN AND QUOTE</p>


              <ul className='form-item'>
                <li className='form-lists'><a href="tel:+48-616255500"><i class="fa-solid fa-phone form_icon"></i>+48-616255500</a></li>

                <li className='form-lists'><a href="mailto: enquiry@expostandservice.com "><i class="fas fa-envelope form_icon "></i>enquiry@expostandservice.com</a></li>
                <li className='form-lists'><Link to="/contactus"><i class="fab fa-wpforms form_icon"></i>Submit Enquiry Form</Link> </li>

              </ul>
            </div>

            {/* <img src={Img1} alt=""className='form-img' />  */}
          </div>
          <div className="col-6 col-m-12 col-t-12">

            <div className="register">
              <form  id='form' className='flex flex-col' ref={form} onSubmit={sendEmail}>


                <div className="user-details">
                  <label>
                    <div className="input-box">
                      <i className='fa fa-user  icon'></i>
                      <input type="text" {...register("contactname")} placeholder='Contact Name' name='user_contactname' />
                      {errors.mobilephone?.type === "required" && "Contact Name is Required"}
                    </div>
                  </label>
                  <label >
                    <div className="input-box">
                      <i class="far fa-building icon"></i>
                      <input type="text" {...register("companyname")} placeholder='Company Name'  name='user_name'  />
                      {errors.mobilephone?.type === "required" && "Company Name is Required"}
                    </div>
                  </label>
                  <label >
                    <div className="input-box">
                      <i className="fas fa-envelope-open-text icon"></i>
                      <input type="email" placeholder='Email' name='user_email'  />
                      {errors.mobilephone?.type === "required" && "Email is Required"}
                    </div>
                  </label>
                  <label>
                    <div className="input-box">
                      <i class="fas fa-mobile-alt icon"></i>
                      <input type="text" {...register("mobilephone", { required: true, maxLength: 10 })} placeholder='Mobile' name='user_number'/>
                      {errors.mobilephone?.type === "required" && "Mobile Number is Required"}
                      {errors.mobilephone?.type === "maxLength" && "Max Length Exceeds"}
                    </div>
                  </label>
                  <label>
                    <div className="input-box">
                      <i class="fas fa-store-alt icon"></i>
                      <input type="text" placeholder='Exhibition ' name='user_exhibitionname' />
                      {errors.mobilephone?.type === "required" && "Exhibition Name is Required"}
                    </div>
                  </label>
                  <label>
                    <div className="input-box">
                      <i class="fas fa-city icon  "></i>
                      <input type="text"  placeholder='Event City' name='user_city' />
                      {errors.mobilephone?.type === "required" && "Event City Name is Required"}
                    </div>
                  </label>
                  <label>
                    <div className="input-box">
                      <i class="fas fa-share-alt icon"></i>
                      <input type="text"  placeholder='Stand Dimension & Area' name='user_location' />
                      {errors.mobilephone?.type === "required" && "Stand Dimension Name is Required"}
                    </div>
                  </label>
                  <label>
                    <div className="input-box">
                      <i class="fas fa-hand-holding-usd icon"></i>
                      <input type="text"  placeholder='Stand Budget'  name='user_amount'/>
                      {errors.mobilephone?.type === "required" && "Stand Budget is Required"}

                    </div>
                  </label>
                  <textarea   id="" cols="30" rows="4" placeholder='Description/Message' name='user_message' ></textarea>
              
            

                  <label for="file-upload" class="custom-file-upload">
                    <i class="fas fa-file-import"></i> Browser..
                  </label>
                  
                  <input id="file-upload" type="file" />
                  
             


                  <button type='submit' className='from_sendbtn'>Send</button>
                  
              



                </div>
              </form>
            </div>
          </div>
        </div>
      </div>





    </div>

  )
}
