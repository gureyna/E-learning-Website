// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navbar';
import Home from '../components/Home';
import About from '../components/About';
import Courses from '../components/Courses';
import ContactUs from '../components/ContactUs';
import CourseDetails from '../components/CourseDetails';
import Footer from '../components/footer';

const App = () => {
  const courses = [
    { id: 1, title: "Course 1", image: "course1.jpg", rating: 4, reviews: 10, lessons: 12, price: 100 },
    { id: 2, title: "Course 2", image: "course2.jpg", rating: 5, reviews: 20, lessons: 15, price: 150 },
    // Add more courses
  ];

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses courses={courses} />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/course/:id" element={<CourseDetails courses={courses} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
