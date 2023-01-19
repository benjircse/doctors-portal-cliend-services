import React from 'react';
import Footer from '../../Shered/Footer';
import Appointment from './Appointment';
import Banner1 from './Banner1';
import ContactUs from './ContactUs';
import Information2 from './Information2';
import Services from './Services';
import TestimonialHeader from './TestimonialHeader';
import TestmonialServices from './TestmonialServices';

const Home = () => {
    return (
        <div className='mt-9 mx-8'>
            <Banner1></Banner1>
            <Information2></Information2>
            <Services></Services>
            <Appointment></Appointment>
            <TestimonialHeader></TestimonialHeader>
            <TestmonialServices></TestmonialServices>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;