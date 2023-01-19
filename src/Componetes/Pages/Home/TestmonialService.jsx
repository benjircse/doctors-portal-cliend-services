import React from 'react';

const TestmonialService = ({text,img,titel,p}) => {
    return (
        <section  className='m-5 shadow-xl p-5'>
            <h2>{text}</h2>
            <div  className='grid grid-cols-1 lg:grid-cols-2'>
                <div  className='mt-2 w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img src={img} alt="" />
                </div>
                <div  className='mt-6'>
                    <h2  className='font-bold'>{titel}</h2>
                    <h3>{p}</h3>
                </div>
            </div>
        </section>
    );
};

export default TestmonialService;