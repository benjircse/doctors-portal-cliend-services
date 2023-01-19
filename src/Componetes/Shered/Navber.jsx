import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const Navber = () => {
    const naviget=useNavigate()
    const [user] = useAuthState(auth);
    const [signOut, loading, error] = useSignOut(auth);
     
    return (
        <section  className="navbar bg-base-400">
            <div  className="navbar-start">
                <div  className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><Link>Home</Link></li>
                    <li><Link>Appointment</Link></li>
                    <li><Link>Reviws</Link></li>
                    <li><Link>About</Link></li>
                    <li><Link>Contact Us</Link></li>
                    <li><Link to='/login'  className='btn mr-5 text-white'>Login</Link></li>
                    </ul>
                </div>
                <a  className="btn btn-ghost normal-case text-primary text-4xl">Doctors Protel</a>
            </div>
            <div  className=" hidden  lg:flex navbar-end">
                <ul  className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/appointment'>Appointment</Link></li>
                    <li><Link to='/reviws'>Reviws</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li>{user? <button onClick={()=>signOut(auth)} className="btn btn-ghost">Sing Out</button>: <Link to='/login'>Login</Link>}</li>

                </ul>
            </div>

        </section>
    )
};

export default Navber;