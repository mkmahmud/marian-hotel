import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';



const Login = () => {


    const handelSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="artboard phone-2 mx-auto my-5 bg-[#16003B] rounded text-white">
            <h1 className='text-4xl p-4'>Log In</h1>
            <form onSubmit={handelSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" placeholder="info@site.com" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Password</span>
                    </label>
                    <label className="input-group">
                        <span>Password</span>
                        <input type="password" placeholder="90MKide3#@)" className="input input-bordered w-full" />
                    </label>
                </div>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success m-5">Log In</button>
            </form>

            <h2 className='p-2 text-xl'>OR</h2>
            <hr className='w-52 m-auto' />

            <div className="popupLogin p-5">

                <button className="btn btn-warning btn-square m-2">
                    <i class="fa fa-google" aria-hidden="true"></i>
                </button>
                <button className="btn btn-square m-2">
                    <i class="fa fa-github" aria-hidden="true"></i>
                </button>
                <button className="btn btn-primary btn-square m-2">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </button>
                <button className="btn btn-success btn-square m-2">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </button>
            </div>
            <p>Didn't have account <Link className='font-bold' to='/signUp'>Sign Up</Link></p>
        </div>
    );
};

export default Login;