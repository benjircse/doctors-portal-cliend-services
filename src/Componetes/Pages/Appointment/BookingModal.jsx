import { format } from 'date-fns/esm';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../Firebase.init';

const BookingModal = ({ treatment, date, setTreatment,refetch }) => {
    const [user, loading] = useAuthState(auth);
    const { _id, name, slots } = treatment;

    const hendelBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const formatDate = format(date, 'PP')
        const bookings = {
            treatmentId: _id,
            treatment: name,
            slot,
            phone: event.target.number.value,
            date: formatDate,
            patientName: user.displayName,
            patient: user.email,

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)

        })
            .then(res => res.json())
            .then(data => {
                 if(data.success){
                    toast(`Appoiment is set ,${formatDate} at ${slot}`)
                 }
                 else{
                    toast.error(`Appoiment already set,${data.booking?.date} at ${data.booking?.slot}`)
                 }
                 refetch()
                setTreatment(null)
            })

    }


    return (
        <section>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
                    <h2 className='text-2xl text-primary text-center '>Booking For : {name}</h2>
                    <div className="hero-content  flex-col lg:flex-row-reverse">
                        <form onSubmit={hendelBooking} className="card-body">
                            <input type="text" disabled value={format(date, 'PP')} className="input input-bordered" />

                            <select name="slot" className="select select-bordered px-20 w-1/1">
                                {
                                    slots.map(slot => <option key={slot._id} value={slot}>{slot}</option>)
                                }
                            </select>

                            <input type="text" disabled value={user?.displayName || ''} className="input input-bordered" />

                            <input type="text" disabled value={user?.email || ''} className="input input-bordered" />

                            <input type="number" placeholder="phone number" name='number' className="input input-bordered" />

                            <input  type="submit" className="input input-bordered cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-500" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingModal;