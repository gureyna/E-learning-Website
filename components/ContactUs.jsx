import React, { useState } from 'react';
import './Contact.css';
import './About.css';

const ContactUs = () => {
  const [title] = useState('Contact Us');
  const [description] = useState('Home / Contact Us');
  const brands = [
    { id: 1, imgSrc: '../images/logoimg/wtech.png' },
    { id: 2, imgSrc: '../images/logoimg/rasmi.png', alt: 'Brand 2' },
    { id: 3, imgSrc: '../images/logoimg/primo.png', alt: 'Brand 3' },
    { id: 4, imgSrc: '../images/logoimg/dunimedia.png', alt: 'Brand 4' },
    { id: 5, imgSrc: '../images/logoimg/qalim.png', alt: 'Brand 5' },
    { id: 6, imgSrc: '../images/logoimg/wtech.png', alt: 'Brand 6' },
    { id: 7, imgSrc: '../images/logoimg/rasmi.png', alt: 'Brand 7' },
  ];


  return (
    <div className="About">
      <div className="background1">
        <div className="overlay1"></div>
        <div className="content1">
          <h1 className="title1">{title}</h1>
          <p className="description1">
            {description}
          </p>
        </div>
      </div>

      <div className="contact-container">
      <h2>Quick Contact Address</h2>
      <p>welcome you to our company, <span role="img" aria-label="smile">😊</span></p>
      <div className="contact-details">
        <div className="contact-card">
          <i className="fas fa-phone"></i>
          <h3>Contact Phone</h3>
          <p>+252 613 834891</p>
          <p>+252 616 077738</p>
        </div>
        <div className="contact-card">
          <i className="fas fa-envelope"></i>
          <h3>Our Email</h3>
          <p>info@wtech.com</p>
          <p>support@wtech.com</p>
        </div>
        <div className="contact-card">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Our Location</h3>
          <p>Baar-Ayaan, Mogadishu, Somalia</p>
        </div>
      </div>
    </div>

    <div className="contact-form-container">
      <div className="contact-form-content">
        <h3>Let's Say Hi <span role="img" aria-label="wave">👋</span></h3>
        <h1 className='Bolders'>Get in touch</h1>
        <p>Call us directly: <strong>+252 613 834891</strong></p>
        <p>Contact Email: <strong>support@wtech.com</strong></p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">SUBMIT NOW</button>
        </form>
      </div>
      <div className="contact-form-image">
        <img src="../images/siteimg.png" alt="Building" />
        <div className="overlay"></div>
      </div>
    </div>


    <div className="brands-container">
        <h2>Some of the Brands</h2>
        <h1>we worked with <span role="img" aria-label="smile">😊</span></h1>
        <div className="brands-grid">
          {brands.map(brand => (
            <div key={brand.id} className="brand-item">
              <img src={brand.imgSrc} alt={brand.alt} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ContactUs;
