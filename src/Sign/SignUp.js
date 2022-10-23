import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const SignUp = () => {

    const {CurrUser} = useContext(AuthContext);
   
    const handelSubmit = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const pass = e.target.password.value;

        CurrUser.signIn(email,pass)
        .then((userCredintial) => {
            const user = userCredintial
        })
        .catch((err) => {
            console.log(err)
        })
        
    }
    return (
        <div className="artboard phone-5 mx-auto bg-[#16003B] rounded text-white my-5">
            <h1 className='text-4xl p-4'>Sign Up</h1>
            <form onSubmit={handelSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" placeholder="Mahmudul Hasan " name='name' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" placeholder="info@site.com" name='email' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Password</span>
                    </label>
                    <label className="input-group">
                        <span>Password</span>
                        <input type="password" placeholder="Password" name='password' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Phone</span>
                    </label>
                    <label className="input-group">
                        <span>Phone</span>
                        <input type="number" placeholder="-128390091" name='phone' className="input input-bordered w-full" />
                    </label>
                </div>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success m-5">Sign In</button>
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
            <p>Already have an  account <Link className='font-bold' to='/login'>Log In</Link></p>
        </div>
    );
};

export default SignUp;