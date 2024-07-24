// src/components/CourseCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const CourseCard = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`} className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-content">
        <span className="course-category">All Courses</span>
        <h3 className="course-title">{course.title}</h3>
        <div className="course-rating">
          {Array.from({ length: course.rating }).map((_, index) => (
            <span key={index}>&#9733;</span>
          ))}
          <span> ({course.reviews})</span>
        </div>
        <div className="course-details">
          <span>{course.lessons} Lessons</span>
          <span>${course.price}</span>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
