import React from 'react';

const InfoCard2 = ({ img,name,titel,bgColour }) => {
    return (
        <section  className={`card card-side ${bgColour}`}>
            <figure  className='pl-5'><img src={img} alt="Movie" /></figure>
            <div  className="card-body text-white">
                <h2  className="card-title">{name}</h2>
                <p> {titel} </p>

            </div>
        </section>
    );
};

export default InfoCard2;