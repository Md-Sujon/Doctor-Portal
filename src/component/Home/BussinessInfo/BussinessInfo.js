import React from 'react';
import BussinessInfoCard from './BussinessInfoCard';
import { faClock, faMapMarker, faPhone} from '@fortawesome/free-solid-svg-icons'

const bussnissInfo=[
    {
        title: 'Opening Hours',
        description: 'Lorem ipsum dolor sit',
        backGround: 'primary',
        icon: faClock
    },
    {
        title: 'Visit Our Location',
        description: 'Brokelayn ny, 15565 USA',
        backGround: 'Dark',
        icon: faMapMarker
    },
    {
        title: 'Contact Us NOw',
        description:' +6561242115',
        backGround: 'primary',
        icon: faPhone
    }
]



const BussinessInfo = () => {
    return (
        <section className=" d-flex justify-content-center">
               <div className="w-75 row">
               {
                 bussnissInfo.map(bussInfo=> <BussinessInfoCard  bussInfo={bussInfo}></BussinessInfoCard>)  
               }
               </div>
        </section>
    );
};

export default BussinessInfo;