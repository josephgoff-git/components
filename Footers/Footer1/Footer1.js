import React from 'react';
import './Footer1.css';

const Footer1 = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section footer-left">
        <h2 className="footer-title">Company Name</h2>
        <p className="footer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula justo nec libero hendrerit, id tincidunt tortor rhoncus.
        </p>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </div>

      <div className="footer-section footer-center">
        <h2 className="footer-title">Contact Us</h2>
        <address className="footer-address">
          123 Main Street, Cityville, State, 12345
        </address>
        <p className="footer-email">Email: info@example.com</p>
        <p className="footer-phone">Phone: +1 (123) 456-7890</p>
      </div>

      <div className="footer-section footer-right">
        <h2 className="footer-title">Follow Us</h2>
        <div className="footer-social-icons">
          <a href="#" className="social-icon">Facebook</a>
          <a href="#" className="social-icon">Twitter</a>
          <a href="#" className="social-icon">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
