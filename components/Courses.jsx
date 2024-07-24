// src/components/Courses.js
import React, { useState } from 'react';
import CourseCard from './CourseCard';
import './About.css';

const Courses = () => {
  const [title] = useState('Courses');
  const [description] = useState('Home / Courses');
  
  // Define the courses array with id for each course
  const [courses] = useState([
    {
      id: 1,  // Add an id
      image: '../images/coursesimg/adobephotoshop.png',
      title: 'Adobe Photoshop Master Class',
      rating: 5,
      reviews: 1,
      lessons: 56,
      price: 50.00,
    },
    {
      id: 2,  // Add an id
      image: '../images/coursesimg/adobeillustrator.png',
      title: 'Adobe Illustrator Master Class',
      rating: 5,
      reviews: 0,
      lessons: 54,
      price: 60.00,
    },
    {
      id: 3,  // Add an id
      image: '../images/coursesimg/phpcourse.png',
      title: 'Php CC Masterclass - Beginner to Advanced',
      rating: 5,
      reviews: 0,
      lessons: 77,
      price: 60.00,
    },
  ]);

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

      <div className="app">
        <div className="course-list">
          <h2>Available Courses</h2>
          <p>Dhammaan kooraskani waad bilaabi kartaa hada</p>
          <div className="courses-container">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
