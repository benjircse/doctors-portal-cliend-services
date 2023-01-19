import React from 'react';
import bg from '../../assets/images/appointment.png'
 
const ContactUs = () => {
    return (
        <section style={{background:`url(${bg})`,backgroundSize:'cover',backgroundPosition:'center'}}  className='mt-10 mb-0'>
            <h3  className='w-20 mx-auto text-primary pt-20 '>Contact Us</h3>
            <h2  className='w-64 text-2xl mx-auto text-white pb-1'>Stay connected with us</h2>
            <div  className=''>
                <div  className="hero-content flex-col lg:flex-row-reverse">
                    <div  className="card flex-shrink-0 w-full max-w-sm">
                        <div  className="card-body">                           
                                <input type="text" placeholder="email addess" className="input input-bordered"/>                 
                              
                                <input type="text" placeholder="Subject" className="input input-bordered"/>
                            
                                <textarea  placeholder="Your message"  id="" cols="30" rows="10"  className="input input-bordered"/>
                          
                            <div  className="form-control w-40 mx-auto mt-6">
                                <button  className="btn   bg-gradient-to-r from-cyan-500 to-blue-500">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;