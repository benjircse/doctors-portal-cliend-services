import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ErrorMessiges from '../../Shered/ErrorMessiges';
import BookAppointment from './BookAppointment';
import BookingModal from './BookingModal';

const AvailableAppoinment = ({date}) => {
    
    const [treatment, setTreatment] = useState(null)
    const fromatedDate= format(date,'PP')

    const { isLoading, error, data:services ,refetch } = useQuery(['availabel',fromatedDate], () =>
    fetch(`http://localhost:5000/availabel?date=${fromatedDate}`)
    .then(res =>res.json()
    )
  )
  if(isLoading){
   return <ErrorMessiges></ErrorMessiges>
  }
 
    return (
        <div>
            <h2  className='text-primary text-lg text-center my-10'>Available Appoinment on {format(date, 'PP')}.</h2>
            <div  className=" grid grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    services?.map(service => <BookAppointment
                        key={service._id}


                        service={service}
                        setTreatment={setTreatment}
                    ></BookAppointment>)
                }
                {
                    treatment && <BookingModal 
                     setTreatment={ setTreatment} 
                     date={date}
                     refetch={refetch}
                      treatment={treatment}>
                      </BookingModal>
                }
            </div>

        </div>
    );
};

export default AvailableAppoinment;