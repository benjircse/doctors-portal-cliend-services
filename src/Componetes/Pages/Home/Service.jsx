import React from 'react';

const Service = ({service}) => {
    const{name,logo,info}=service;
    return (
        <section  className="card bg-base-100 shadow-xl">
            <figure><img src={logo}alt="Shoes" /></figure>
            <div  className="card-body">
                <h2  className="card-title ml-20"> {name}</h2>
                <p>{info}</p>
                
            </div>
        </section>

        
    );
};

export default Service;