import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import treatment from '../../assets/images/treatment.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Fluoride Treatment',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            logo: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filling',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            logo: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            info: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            logo: whitening
        }
    ]
    return (

        <section>
            
            {/* ----------------------------1st part------------------------- */}
            <div>
                <h2 className=' font-bold mt-10 text-center text-primary text-sm'>OUR SERVICES</h2>
                <h3 className='text-center text-2xl'>Services We Provide</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-8">
                    {
                        services.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>

            <div>


                {/* -------------------------2nd part------------------------ */}
                <div className="hero min-h-screen bg-base-400">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className='w-80 rounded ml-20' src={treatment} />
                        <div className='mr-40 ml-20 my-20'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn  bg-gradient-to-r from-cyan-500 to-blue-500 border-none">Get Started</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;