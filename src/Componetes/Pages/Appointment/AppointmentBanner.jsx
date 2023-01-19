import React from 'react';
import chare from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
const AppointmentBanner = ({ date, setDate }) => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2  mb-10' style={{
            background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'

        }}>
            <div className='w-[300px] my-20 ml-60 shadow-xl '>
                <DayPicker
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
            </div>
            <div className='w-[500px] my-20 ml-10'>
                <img src={chare} alt="" />
            </div>
        </section>
    );
};

export default AppointmentBanner;