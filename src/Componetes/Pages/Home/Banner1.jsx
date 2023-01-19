import React from 'react';
import chare from '../../assets/images/chair.png'
import  bg from '../../assets/images/bg.png'

const Banner1 = () => {
    return (
        <section style={{background:`url(${bg})`,backgroundSize:'cover',backgroundPosition:'center'}} className="hero min-h-screen bg-base-400">
        <div  className="hero-content flex-col lg:flex-row-reverse">
          <img  className='w-1/2' src= {chare} />
          <div>
            <h1  className="text-5xl font-bold">Your New Smile Starts Here!</h1>
            <p  className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button  className="btn border-none  bg-gradient-to-r from-cyan-500 to-blue-500">Get Started</button>
          </div>
        </div>
      </section>
    );
};

export default Banner1;