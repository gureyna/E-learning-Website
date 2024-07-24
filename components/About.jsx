// src/About.js
import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import siteimg from '../images/siteimg.png';
import './About.css';

const About = () => {
  const [title] = useState('About');
  const [description] = useState('Home / About');
  const [data, setData] = useState(null); // Add state for API data

  // icons
  const stats = [
    { icon: '👍', value: 290, label: 'Happy Customers' },
    { icon: '📄', value: 20, label: 'Completed Projects' },
    { icon: '✔️', value: 10, label: 'Our Services' },
    { icon: '🏅', value: 3, label: 'Years of Experience' },
  ];

  // logo brand imgs
  const brands = [
    { id: 1, imgSrc: '../images/logoimg/wtech.png' },
    { id: 2, imgSrc: '../images/logoimg/rasmi.png', alt: 'Brand 2' },
    { id: 3, imgSrc: '../images/logoimg/primo.png', alt: 'Brand 3' },
    { id: 4, imgSrc: '../images/logoimg/dunimedia.png', alt: 'Brand 4' },
    { id: 5, imgSrc: '../images/logoimg/qalim.png', alt: 'Brand 5' },
    { id: 6, imgSrc: '../images/logoimg/wtech.png', alt: 'Brand 6' },
    { id: 7, imgSrc: '../images/logoimg/rasmi.png', alt: 'Brand 7' },
  ];
  // logo brand imgs end

  // Data Feth Api Start
  useEffect(() => {
    const GetApi = () => {
      fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => {
          json.description = "We are committed to providing top-notch online learning solutions.";
          json.details = [
            'Providing top-notch online learning solutions.',
            'Focused on delivering quality content.',
            'Meeting the needs of diverse learners.',
            'Innovating in educational technology.'
          ];
          setData(json);
        })
        .catch((error) => console.error('Error fetching data:', error));
    };

    GetApi();
  }, []);

  return (
    <div className="About">
      <div className="background1">
        <div className="overlay1"></div>
        <div className="content1">
          <h1 className="title1">{title}</h1>
          <p className="description1">{description}</p>
        </div>
      </div>

      <div className="abtoutfeature">
        <div className="home-container1">
          <div className="image-section">
            <img src={siteimg} alt="Coding on laptop" className="image" />
          </div>
          <div className="text-section">
            <h1>WHO WE <span className="highlight">ARE</span>.</h1>
            {data ? (
              <div className="text-content">
                <h2>{data.title}</h2>
                <p>{data.body}</p>
                <p>{data.description}</p>
                <ul>
                  {data.details && data.details.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </div>

      <div className="container1">
        <div className="card objectives">
          <div className="icon">
            <span role="img" aria-label="anchor">⚓</span>
          </div>
          <h1 className='Bolders'>Objectives</h1>
          <p>
            To automate business processes through today's modern technology and meet business expectations in this digital era by creating sophisticated, 
          </p>
        </div>
        <div className="card mission">
          <div className="icon">
            <span role="img" aria-label="target">🎯</span>
          </div>
          <h1 className='Bolders'>Mission</h1>
          <p>
            To help companies and organizations, small and large, focus on their core activities whilst making the best use of technology to enhance productivity and improve 
          </p>
        </div>
      </div>

      <div className="growth-container">
        <div className="header1">
          <h3>Expert's growths</h3>
          <h1 className="titleAbout1">Our Company Growth</h1>
          <p>We have grown strength over the past 20 years.</p>
        </div>
        <div className="stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat">
              <div className="icon">{stat.icon}</div>
              <div className="value">
                <CountUp end={stat.value} duration={3} />+
              </div>
              <div className="label">{stat.label}</div>
            </div>
          ))}
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

export default About;
