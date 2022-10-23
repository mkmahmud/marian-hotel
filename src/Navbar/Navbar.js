import React, { createRef, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';
import { AuthContext } from '../UserContext/UserContext';


const Navbar = () => {
    
    const [user, setUser] = useState(false)

    const {CurrUser} = useContext(AuthContext);

   
    useEffect( ()=>{
        if(CurrUser){
            setUser(true)
        }else{
            setUser(false)
        }
    },[])

    // console.log(CurrUser.name)
    // console.log(user)

    return (
        <div className="navbar bg-[#16003B] text-white">
            <div className="flex-1">
                <img src={logo} className='w-10 rounded-full' alt="" />
                <h2 className='font-extrabold text-2xl'>Marian</h2>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <a>
                                Pages
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-[#16003B]" style={{zIndex:'1'}}>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>About</a></li>
                        <li><a>Service</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact</a></li>
                        <li><a><button className="btn btn-info">Book Online</button></a></li>
                    </ul>
                </div>
                {
                    !user ?

                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/login'><button className="btn btn-success">Log In</button></Link></li>
                            <li><Link to='/signUp'><button className="btn btn-warning">Sign Up</button></Link></li>
                        </ul>
                        :
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-[#16003B] rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {
                                            CurrUser.name
                                        }
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;