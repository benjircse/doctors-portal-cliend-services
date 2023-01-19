import React, { useState } from 'react';
import Footer from '../../Shered/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
              <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
              <AvailableAppoinment date={date} setDate={setDate}></AvailableAppoinment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;