import React, { useState } from 'react';
import './SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    twitterPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="signup-form-container">
      <h2>Welcome to Aceternity</h2>
      <p>Login to aceternity if you can because we don't have a login flow yet</p>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="twitterPassword"
            placeholder="Your twitter password"
            value={formData.twitterPassword}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signup-button">Sign up ➔</button>
      </form>
      <div className="social-login">
        <button className="social-button github">GitHub</button>
        <button className="social-button google">Google</button>
        <button className="social-button onlyfans">OnlyFans</button>
      </div>
    </div>
  );
};

export default SignUpForm;
