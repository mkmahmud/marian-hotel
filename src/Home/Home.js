import React from 'react';
import HomeImg from '../assets/Home/wp8103002.jpg';
import './Home.css'

const Home = () => {
    return (
        <div className='Home'>
            <img src={HomeImg} alt="" />
            <div className="HomeContext">
                <h2 className='text-5xl text-white'>TOP HOTEL IN THE CITY</h2>
                <h5 className='text-white text-xl p-4'>Hotel & Resourt</h5>
            </div>
        </div>
    );
};

export default Home;