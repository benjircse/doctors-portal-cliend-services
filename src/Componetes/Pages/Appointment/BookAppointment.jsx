import React from 'react';

const BookAppointment = ({service,setTreatment}) => {
    const {name, slots}=service;
    return (
        <section>
            <div>
                <div  className="card-body items-center ml-5 my-5 shadow-xl text-center">
                    <h2  className="card-title text-primary">{name}</h2>
                    <p>
                        {slots.length 
                        ? <span>{slots[0]}</span>:<span  className='text-error'>No Slots Avaiable</span>
                        }
                    </p>
                   <p>{slots.length} {slots.length >1 ? 'Spaces':'Space'} Available</p>
                    <div  className="card-actions">
                        <label htmlFor="booking-modal"  
                        onClick={()=>setTreatment(service)} 
                        disabled={slots.length===0}                      
                         className="btn bg-gradient-to-r from-cyan-500 to-blue-500 border-none  ">Book Appointment</label>
                    </div>
                </div>            
            </div>
        </section>
    );
};

export default BookAppointment;