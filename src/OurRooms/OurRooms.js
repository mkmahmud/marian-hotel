import React, { useEffect, useState } from 'react';
import './OurRooms.css'
import SingelRoom from './SingelRoom/SingelRoom';

const OurRooms = () => {

    const [hotles, setHotles] = useState([]);

    useEffect(()=>{
        fetch('https://bookhouse-server-nine.vercel.app/hotles')
        .then(res => res.json())
        .then(hotels => setHotles(hotels))
    },[])

    return (
        <div className='OurRoom m-auto'>
            <h2 className='text-4xl font-bold text-white'>Our Rooms</h2>
            <div className="rooms grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center  ">
                {
                    hotles.map(hotel => <SingelRoom hotel={hotel} key={hotel.id}></SingelRoom>)
                }
            </div>
        </div>
    );
};

export default OurRooms;