import React, { useState } from 'react';
import './Navbar.css'
import logo from '../../Assets/logo 1 (1).png'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, uLoading, uError] = useAuthState(auth);
    console.log(user?.email);
    const navigate=useNavigate()
    const logOut = () => {
        signOut(auth);
        navigate('/')
      };

    return (
        <div>
             <nav class="navbar">
        <div class="navbar-container container">
            <input type="checkbox" name="" id=""/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div>
            <ul class="menu-items">
                <li><a href="#">Category</a></li>
                <li><a href="#">FAQS</a></li>
                <li><a href="#">My Cart</a></li>
                {
                    user?.email=="admin@admin.com" && <li><Link to='/dashboard'>Dashboard</Link></li> 
                }
               
               
                {
      user? <button onClick={logOut} class="ms-5  btn-login text-white text-center">Log Out</button> :<Link to='/login' className='ms-5  btn-login text-white text-center'>Log In</Link>
                }
           
            </ul>
            <img className='logo' src={logo} alt="" />
        </div>
    </nav>
        </div>
    );
};

export default Navbar;