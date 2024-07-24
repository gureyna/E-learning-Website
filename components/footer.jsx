import React from 'react';
import './footer.css'; // Assuming you have a CSS file for Navbar styles

const footer = () => {
  return (
    <footer className="Footer">
       <footer className="footer">
       <div className="footer-content">
         <div className="footersite">
           <p className='footer-logo'>
             <img src="../images/weblogo1.png" alt="Waraxama tech Logo" />
           </p>
           <p>
             We believe that the prospect presented<br /> by technology has never been more <br />
             spacious, and because of that opportunity,
           </p>
         </div>

         <div className="quick-links">
           <h1 className='Bolders'>Quick Links</h1>
           <ul>
             <li>About Us</li>
             <li>Courses</li>
             <li>Get Help</li>
           </ul>
         </div>
     
         <div className="contact-info">
           <h1 className='Bolders'>Say Hello 👋</h1>
           <ul>
             <li><a href="mailto:hello@wtech.com">hello@Wtech.com</a></li>
             <li><a href="mailto:support@wtech.com">support@Wtech.com</a></li>
             <li><a href="tel:+250 686 401285">+250 686 401285</a></li>
           </ul>
           <div className="social-media">
             <a href="#"><i className="fa fa-facebook"></i></a>
             <a href="#"><i className="fa fa-twitter"></i></a>
             <a href="#"><i className="fa fa-linkedin"></i></a>
             <a href="#"><i className="fa fa-instagram"></i></a>
           </div>
         </div>
       </div>
     </footer>

     <div className="footer-bottom">
       <p>&copy; 2024 Waraxma Technology Solutions | Wtech</p>
     </div>
    </footer>
  );
};

export default footer;
