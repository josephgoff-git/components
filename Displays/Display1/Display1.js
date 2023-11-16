import React from 'react';
import './Display1.css';

const Display1 = () => {
  return (
    <div className="image-gallery">
      <div className="image-container">
        <img src="https://images.unsplash.com/photo-1682695795931-a546abdb6733?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image 1" />
        <div className="image-overlay">
          <span className="image-text">Page 1</span>
        </div>
      </div>
      <div className="image-container">
        <img src="https://images.unsplash.com/photo-1700076823924-a87fca414724?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8" alt="Image 2" />
        <div className="image-overlay">
          <span className="image-text">Page 2</span>
        </div>
      </div>
      <div className="image-container">
        <img src="https://images.unsplash.com/photo-1682687982204-f1a77dcc3067?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8" alt="Image 3" />
        <div className="image-overlay">
          <span className="image-text">Page 3</span>
        </div>
      </div>
    </div>
  );
};

export default Display1;
