import React from 'react';
import icone from '../../assets/icons/quote.svg'
const TestimonialHeader = () => {
    return (
        <section>
            <footer  className="footer items-center p-4  ">
                <div  className="items-center grid-flow-col">
                <div>
                <h2  className='text-primary'>Testimonial</h2>
                <h3  className="text-3xl  ">What Our Patients Says</h3>
                </div>
                </div>
                <div  className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <img  className='h-24 ' src={icone} alt="" />
                </div>
            </footer>
        </section>
    );
};

export default TestimonialHeader;