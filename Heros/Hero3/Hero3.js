import React from 'react';
import './Hero3.css';

const Hero3 = () => {
  return (
    <div className="hero3-container">
      <img className="hero3-image" src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2h8ZW58MHx8MHx8fDA%3D" alt="Hero Image" />

      <div className="hero3-content">
        <h1 className="hero3-title">Discover a World of Elegance</h1>
        <p className="hero3-description">Experience luxury and sophistication in every detail.</p>
        <button className="hero3-button">Explore Now</button>
      </div>
    </div>
  );
};

export default Hero3;
