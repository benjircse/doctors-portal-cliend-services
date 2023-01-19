import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';

const MyAppointment = () => {
    const [appointment ,setAppointment]=useState([]);
    const [user] = useAuthState(auth);

    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res=>res.json())
        .then(data=>setAppointment(data))
        }
    },[user])
    return (
        <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
      </tr>
    </thead>
    <tbody>
        {
            appointment.map((appointment,index)=>  <tr>
                 <th>{index+1}</th>
                <td>{appointment.patientName}</td>
                <td> {appointment.date}</td>
                <td>{appointment.slot}</td>
                <td>{appointment.treatment}</td>
              </tr>)
        }
    
    </tbody>
  </table>
</div>
    );
};

export default MyAppointment;