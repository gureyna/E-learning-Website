// src/components/Courses.js
import React, { useState } from 'react';
import './CourseDetails.css';
import './About.css';

const CourseDetails = () => {
  const [title] = useState('Courses');
  const [description] = useState('Home / Courses-Details');
  
  const curriculum = [
    {
      day: "Day 0: Introduction",
      content: []
    },
    {
      day: "Day 1: Basic Adobe Photoshop",
      content: [
        "2.1 Open and create new document",
        "2.2 User Interface",
        "2.3 Zoom and Hand Tool",
        "2.4 Crop Tool",
        "2.5 Layers and Fields",
        "2.6 Save images",
        "Exercise: Basic Adobe Photoshop"
      ]
    },
    {
      day: "Day 2: Layers",
      content: []
    },
    {
      day: "Day 3: Color Adjustment",
      content: []
    },
    {
      day: "Day 4: Selection and Masking",
      content: []
    },
    {
      day: "Day 5: Shapes",
      content: []
    },
    {
      day: "Day 6: Types",
      content: []
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='now'>
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

      <div className="course-curriculum">
        <h1 className="course-title1">Course curriculum</h1>
        <ul>
          {curriculum.map((day, index) => (
            <li key={index}>
              <div className="day" onClick={() => handleToggle(index)}>
                <span>{index}</span>
                <span>{day.day}</span>
                <span>{activeIndex === index ? "▾" : "▸"}</span>
              </div>
              {activeIndex === index && day.content.length > 0 && (
                <ul className="content">
                  {day.content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="buttons">
        <button className="cart">ADD TO CART</button>
        </div>
      </div>
    </div>
    </div>

  );
};

export default CourseDetails;
