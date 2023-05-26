import React, { useState, useEffect } from 'react';
import { logo } from '../../assets';
import axios from 'axios';

import './index.css';

const NavbarDashboard = () => {
  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState('');

  const token = localStorage.getItem('token')
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }
        const response = await axios.get(`http://localhost:5000/api/user/${userId}`, config);
        const user = response.data;
        const userAvatar = user.avatar;
        const userFirstName = user.name;

        setAvatar(userAvatar);
        setFirstName(userFirstName);
      } catch (error) {
        console.log('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId, token]);

  return (
    <div>
      <header id="header" className="header fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
            <img src={logo} alt="logo" className="w-60 h-60" />
            <h1>Tours and <span>Travel</span></h1>
          </a>

          <nav id="navbar" className="navbar">
            <ul>
              <li>Hello, {firstName}!</li>
              <li><a href="#about">Search</a></li>
              <li><a href="#menu">Tours</a></li>
              <li><a href="#events">Hot Deals<i className="bx bxs-star bx-tada red-icon"></i></a></li>
            </ul>
          </nav>
          {avatar && <img 
            className='
              vertical-align: middle;
              width: 50px;
              height: 50px;
              border-radius: 50%; '
            src={avatar}
            alt="avatar" />}
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    </div>
  );
};

export default NavbarDashboard;
