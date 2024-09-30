import React from 'react';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

import { useForm } from 'react-hook-form';



import './App.css';

const Ctabuttons = () => {
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
   



    return (
        <div className='Cta_section'>
            <div className="cta_flex">
                <button id="open"><span data-attr="Submit">Submit </span><span data-attr="Design">Design</span></button>

                <button id="open2"><span data-attr="Call">Call</span><span data-attr="Back">Back</span></button>

                <button id="open3"> <span data-attr="Request">Request</span><span data-attr="Quote">Quote</span></button>


            </div>
            <div className="modal-container">
                <div className="model">


                    <div className=" ctaformback">
                        <h2 className='ctaheadings'>SUBMIT YOUR DESIGN</h2>
                        <form action="" id='form' className='flex flex-col' ref={form} onSubmit={sendEmail}>


                            <div className="user-details">

                                <div className="input-box">
                                    <label htmlFor="name"></label>
                                    <i className='fa fa-user ctaicons'></i>
                                    <input type="text" placeholder='Contact Name'  name='user_contactname' id='name' required />

                                </div>


                                <div className="input-box">
                                    <label htmlFor="company"></label>
                                    <i class="far fa-building ctaicons "></i>
                                    <input type="text" placeholder='Company Name'  name='user_name'  id='company' required />

                                </div>

                                <div className="input-box">
                                    <label htmlFor="email"></label>
                                    <i className="fas fa-envelope-open-text ctaicons "></i>
                                    <input type="text" placeholder='Email Address'  name='user_email'  id='email' required />

                                </div>



                                <label for="file-upload" class="design-file-upload">
                                    <i class="fas fa-file-import"></i> Choose Your File
                                </label>

                                <input id="file-upload" type="file" required />




                                <textarea   name="" id="message" cols="30" rows="4" placeholder='Message' required></textarea>










                            </div>
                            <button type='submit' className='from_sendbtn'>Submit Your Design</button>
                    
                          


                        </form>
                    </div>

                    <i className="fas fa-times modalicons close"></i>
                </div>
            </div>
            <div className="modal-container2">
                <div className="models">

                    <div className=" ctaformback">
                        <h2 className='ctaheadings'>Call Back</h2>
                        <form action="" id='form' className='flex flex-col'>


                            <div className="user-details ctadetails">

                                <div className="input-box">
                                    <label htmlFor="name"></label>
                                    <i className='fa fa-user ctaicons2'></i>
                                    <input type="text" placeholder='Contact Name' required name='name' id='name' />

                                </div>


                                <div className="input-box">
                                    <label htmlFor="company"></label>
                                    <i class="far fa-building ctaicons2 "></i>
                                    <input type="text" placeholder='Company Name' required name='company' id='company' />

                                </div>

                                <div className="input-box">
                                    <label htmlFor="email"></label>
                                    <i className="fas fa-envelope-open-text ctaicons2 "></i>
                                    <input type="text" placeholder='Email Address' name='email' id='email' required />

                                </div>





                                <input id="file-upload" type="file" required />




                                <textarea cols="30" rows="4" placeholder='Message' required></textarea>










                            </div>
                            <button type='submit' className=' designsub'>Submit Your Design</button>


                        </form>
                    </div>


                    <i className="fas fa-times modalicons close2" ></i>
                </div>
            </div>
            <div className="modal-container3">
                <div className="modelss">

                    <p>
                        <div className=" ctaformback">
                            <h2 className='ctaheadings'>REQUEST A QUOTE</h2>
                            <form action="" id='form' className='flex flex-col' >


                                <div className="user-details ctadetails">

                                    <div className="input-box">
                                        <label htmlFor="name"></label>
                                        <i className='fa fa-user ctaicons2'></i>
                                        <input type="text" placeholder='Contact Name' required name='name' id='name' />

                                    </div>


                                    <div className="input-box">
                                        <label htmlFor="company"></label>
                                        <i class="far fa-building ctaicons2 "></i>
                                        <input type="text" placeholder='Company Name' required name='company' id='company' />

                                    </div>

                                    <div className="input-box">
                                        <label htmlFor="email"></label>
                                        <i className="fas fa-envelope-open-text ctaicons2 "></i>
                                        <input type="text" placeholder='Email Address' name='email' id='email' required />

                                    </div>





                                    <input id="file-upload" type="file" required />




                                    <textarea   cols="30" rows="4" placeholder='Message' required></textarea>










                                </div>
                                <button type='submit' className=' designsub'>Submit Your Design</button>


                            </form>
                        </div>

                    </p>
                    <i className="fas fa-times modalicons close3" ></i>
                </div>
            </div>
         
            <div className="modal-container4">
                <div className="modelsb">

                    <p>
                        <div className=" ctaformback">
                            <h2 className='ctaheadings'>REQUEST A QUOTE</h2>
                            <form action="" id='form' className='flex flex-col' >


                                <div className="user-details ctadetails">

                                    <div className="input-box">
                                        <label htmlFor="name"></label>
                                        <i className='fa fa-user ctaicons2'></i>
                                        <input type="text" placeholder='Contact Name' required name='name' id='name' />

                                    </div>


                                    <div className="input-box">
                                        <label htmlFor="company"></label>
                                        <i class="far fa-building ctaicons2 "></i>
                                        <input type="text" placeholder='Company Name' required name='company' id='company' />

                                    </div>

                                    <div className="input-box">
                                        <label htmlFor="email"></label>
                                        <i className="fas fa-envelope-open-text ctaicons2 "></i>
                                        <input type="text" placeholder='Email Address' name='email' id='email' required />

                                    </div>





                                    <input id="file-upload" type="file" required />




                                    <textarea   cols="30" rows="4" placeholder='Message' required></textarea>










                                </div>
                                <button type='submit' className=' designsub'>Submit Your Design</button>


                            </form>
                        </div>

                    </p>
                    <i className="fas fa-times modalicons close4" ></i>
                </div>
            </div>
         
        </div>
    )
}

export default Ctabuttons;