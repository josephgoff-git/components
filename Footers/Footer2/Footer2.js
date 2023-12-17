import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer2.css';

const Footer2 = () => {
  return (
    <footer className="footer2-container">
      <div className="footer2-section footer2-left">
        <h2 className="footer2-title">Connect with Us</h2>
        <div className="footer2-social-icons">
          <FaTwitter className="footer2-social-icon" />
          <FaFacebook className="footer2-social-icon" />
          <FaLinkedin className="footer2-social-icon" />
          <FaInstagram className="footer2-social-icon" />
        </div>
      </div>

      <div className="footer2-section footer2-right">
        <h2 className="footer2-title">Subscribe to Our Newsletter</h2>
        <form className="footer2-form">
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer2;
