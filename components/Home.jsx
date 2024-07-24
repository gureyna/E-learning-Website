import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
import siteimg from '../images/siteimg.png';
import './Home.css';
import './About.css';


const Home = () => {
  const [message, setMessage] = useState("Learn Your Way With Educate Your Web Design");
  const changeMessage = () => {
    setMessage("Welcome to Waraxma Web Design!");
  };
  
  const [courses] = useState([
    {
      image: '../images/coursesimg/adobephotoshop.png',
      title: 'Adobe Photoshop Master Class',
      rating: 5,
      reviews: 1,
      lessons: 56,
      price: 50.00,
    },
    {
      image: '../images/coursesimg/adobeillustrator.png',
      title: 'Adobe Illustrator Master Class',
      rating: 5,
      reviews: 0,
      lessons: 54,
      price: 60.00,
    },
    {
      image: '../images/coursesimg/phpcourse.png',
      title: 'Php CC Masterclass - Beginner to Advanced',
      rating: 5,
      reviews: 0,
      lessons: 77,
      price: 60.00,
    },
  ]);

  const services = [
    {
        title: 'Software Development',
        description: 'Sophisticated Demand-driven Solutions.',
        icon: '🖥️',
    },
    {
        title: 'Website Development',
        description: 'Lightning-fast, interactive and engaging websites.',
        icon: '🌐',
    },
    {
        title: 'Web Hosting & Domains',
        description: 'Powerful and versatile hosting servers.',
        icon: '🖧',
    },
    {
        title: 'Mobile Applications Development',
        description: 'User-friendly & Engaging Android & iOS Apps.',
        icon: '📱',
    },
    {
        title: 'Branding & Digital Marketing',
        description: 'Let\'s make your brand alive & see the magic!',
        icon: '💼',
    },
    {
        title: 'Professional ICT Trainings & Internships',
        description: 'We offer project-based courses & Intern Opportunities.',
        icon: '🎓',
    },
];
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
    <div className="home">
      <div className="background">
        <div className="overlay"></div>
        <div className="content">
          <h1 className="title">
          Educate New Skills. </h1>
          <p className="subtitle">{message}</p>
          <p className="description">
          </p>
          <div className="buttons">
            <button className="get-started" onClick={changeMessage}>Get Started</button>
          </div>
        </div>
      </div>

     {/* about txt start  */}
     <div className="abtoutfeature">
       <div className="site-img">
         <img src={siteimg} alt="Description of the image" />
       </div>
       <div className="text-content">
         <h1 className='titleAbout'>Online Learning Solutions <br /> That Meet <span className="highlight">Your Needs.</span></h1>
         <p>Online Learning Solutions That Meet Your Needs.</p>
         <div className="info-section">
           <div className="info-item">
             <div className="icon globe-icon"></div>
             <div>
               <strong>Learn Your Way With</strong>
               <p>Online Learning Solutions That Meet Your Needs.</p>
             </div>
           </div>
           <div className="info-item">
             <div className="icon gear-icon"></div>
             <div>
               <strong>Learn Your Way With</strong>
               <p>Online Learning SolutionsThat Meet Your Needs.</p>
             </div>
           </div>
           <div className="info-item">
             <div className="icon brush-icon"></div>
             <div>
               <strong>Learn Your Way With</strong>
               <p>Online Learning Solutions That Meet Your Needs.</p>
             </div>
           </div>
         </div>
         <div className="auth-buttons">
           <Link to="/about">
             <button className="sign-up">About Us</button>
           </Link>
         </div>
       </div>
     </div>
     {/* about txt end  */}
     
     {/* Courses start  */}
     <div className="app">
       <div className="course-list">
         <h2>Available Courses</h2>
         <p>Dhammaan kooraskani waad bilaabi kartaa hada</p>
         <div className="courses-container">
           {courses.map((course, index) => (
             <CourseCard key={index} course={course} />
           ))}
         </div>
       </div>
     </div>
     {/* Courses end  */}

     {/* Services start  */}
     <div className="services">
       <h2>We can help you succeed.</h2>
       <p>Online Learning Solutions That Meet Your Needs.</p>
       <div className="services-list">
         {services.map((service, index) => (
           <div key={index} className="service-item">
             <div className="service-icon">{service.icon}</div>
             <h3>{service.title}</h3>
             <p>{service.description}</p>
           </div>
         ))}
       </div>
     </div>
     {/* Services end  */}

     {/* Latest News start  */}
     <div className="latest-news">
       <p className="updates">Explore our updates</p>
       <h2>Latest News</h2>
       <p className="description">Find and read up-to-the-minute and in-depth coverage of our events & technology trends.</p>
       <button className="see-more">SEE MORE</button>
     </div>
     {/* Latest News end  */}

     {/* Brands start  */}
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
     {/* Brands end  */}

     {/* Footer start */}
    
   </div>
  );
};

export default Home;
