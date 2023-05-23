import React from 'react';
import { useNavigate } from 'react-router-dom';
import {logo} from '../../assets';
import { 
  Login
} from '..';

  


const Navbar = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/Login');
  }

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
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">Search</a></li>
              <li><a href="#menu">Tours</a></li>
              <li><a href="#events">Hot Deals
              <i class='bx bxs-star bx-tada red-icon'></i>
              </a></li>
            </ul>
          </nav>
          <a className="btn-book" href={ Login } onClick={handleButton}>Join the Adventure</a>
          <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
          <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        </div>
      </header>
    </div>
  )
}

export default Navbar;