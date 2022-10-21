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
            <div className="bookNow flex justify-center items-end text-white ">
                <div className="form-control grow w-52">
                    <label className="label">
                        <span className="label-text">Check To Date</span>
                    </label>
                    <input type="date" placeholder="Type Date" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control grow w-52">
                    <label className="label">
                        <span className="label-text">Check Out Date</span>
                    </label>
                    <input type="date" placeholder="Type Date" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control grow w-52">
                    <label className="label">
                        <span className="label-text">Adults</span>
                    </label>
                    <select name="" id="" className="input input-bordered w-full max-w-xs">
                        <option value="">01</option>
                        <option value="">02</option>
                        <option value="">03</option>
                        <option value="">04</option>
                    </select>
                </div>
                <div className="form-control grow w-52">
                    <label className="label">
                        <span className="label-text">Children</span>
                    </label>
                    <select name="" id="" className="input input-bordered w-full max-w-xs">
                        <option value="">01</option>
                        <option value="">02</option>
                    </select>
                </div>
                <div className="form-control grow w-52">
                    <label className="label">
                        <span className="label-text">Room</span>
                    </label>
                    <select name="" id="" className="input input-bordered w-full max-w-xs">
                        <option value="">01</option>
                        <option value="">02</option>
                        <option value="">03</option>
                    </select>
                </div>
                <button className="grow btn btn-success" style={{ marginBottom: '15px' }}>Book Now</button>
            </div>
        </div>
    );
};

export default Home;