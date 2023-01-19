import React from 'react';
import TestmonialService from './TestmonialService';
import pepole1 from '../../assets/images/people1.png'
import pepole2 from '../../assets/images/people2.png'
import pepole3 from '../../assets/images/people3.png';

const TestmonialServices = () => {
    return (
        <section  className="grid grid-cols-1 lg:grid-cols-3 gap-3 mt-1">
            <TestmonialService text={'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'} img={pepole1}
            titel={'Winson Herry'}
            p={'California'}
            ></TestmonialService>

            <TestmonialService  text={'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'} img={pepole2}
             titel={'Chisten Alija'}
             p={'Lossangel'}
            ></TestmonialService>

            <TestmonialService  text={'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'} img={pepole3}
             titel={'Dr.Vinar'}
             p={'Londone'}
            ></TestmonialService>
        </section>
    );
};

export default TestmonialServices;