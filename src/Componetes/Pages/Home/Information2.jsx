import React from 'react';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import InfoCard2 from './InfoCard2';

const Information2 = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            <InfoCard2 bgColour=' bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl' titel='Brooklyn, NY 10036, United States' name='Opening Hours' img={clock}></InfoCard2>
            {/* -------------------------------------------------------------------- */}
            <InfoCard2 bgColour='bg-accent' titel='Brooklyn, NY 10036, United States' name='Visite Our Location' img={location}></InfoCard2>
            {/*--------------------------------------------------------------------------------  */}
            <InfoCard2 bgColour=' bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl' titel='Brooklyn, NY 10036, United States' name='Contact Us' img={phone}></InfoCard2>
        </div>
    );
};

export default Information2;