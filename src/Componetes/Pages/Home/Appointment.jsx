import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png'

const Appointment = () => {
    return (
        <section  style={{background:`url(${bg})`,backgroundSize:'cover',backgroundPosition:'center'}} className="hero my-10 bg-base-200">
            <div  className="hero-content h-96 flex-col lg:flex-row">
                <img  className='h-[485px] mt-[-100px] hidden lg:block' src={doctor}/>
                <div>
                    <h2  className='text-primary'>Appointment</h2>
                    <h1  className="text-5xl font-bold text-white">Make an appointment Today</h1>
                    <p  className="py-6  text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button  className="btn  bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
                </div>
            </div>
        </section>
    );
};

export default Appointment;