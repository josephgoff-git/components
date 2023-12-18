import React from 'react';
import './Image2.css';

const Image2 = () => {
  return (
    <div className="image2">
      <div className="image2-image-container">
        <img src="https://images.unsplash.com/photo-1492950103599-127d2be251b7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZsb3dlcnN8ZW58MHwxfDB8fHww" alt="Image 1" />
      </div>
      <div className="image2-image-container">
        <img src="https://images.unsplash.com/photo-1615280825886-fa817c0a06cc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZsb3dlcnN8ZW58MHwxfDB8fHww" alt="Image 2" />
      </div>
    </div>
  );
};

export default Image2;
