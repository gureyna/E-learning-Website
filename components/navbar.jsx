import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoweb from '../images/weblogo1.png';
import './nav.css'; // Assuming you have a CSS file for Navbar styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };
  const handleSignInClick = () => {
    navigate('/signin');
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logoweb} alt="Description of the image" />
        </div>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="auth-buttons">
          <button className="sign-in" onClick={handleSignInClick}>Sign in</button>
          <button className="sign-up" onClick={handleSignUpClick}>Sign up</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isOpen ? 'change' : ''}`}></div>
          <div className={`bar ${isOpen ? 'change' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
