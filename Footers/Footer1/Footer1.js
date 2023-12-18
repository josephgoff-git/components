import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer1.css';

const Footer1 = () => {
  return (
    <footer className="footer1-footer-container">
      <div className="footer1-footer-section footer1-footer-left">
        <h2 className="footer1-footer-title">Company Name</h2>
        <p className="footer1-footer-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula justo nec libero hendrerit, id tincidunt tortor rhoncus.
        </p>
        <ul className="footer1-footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </div>

      <div className="footer1-footer-section footer1-footer-center">
        <h2 className="footer1-footer-title">Contact Us</h2>
        <address className="footer1-footer-address">
          123 Main Street, Cityville, State, 12345
        </address>
        <p className="footer1-footer-email">Email: info@example.com</p>
        <p className="footer1-footer-phone">Phone: +1 (123) 456-7890</p>
      </div>

      <div className="footer1-footer-section footer1-footer-right">
        <h2 className="footer1-footer-title">Follow Us</h2>
        <div className="footer1-footer-social-icons">
          <a href="#" className="footer1-social-icon"><FaFacebookF /></a>
          <a href="#" className="footer1-social-icon"><FaTwitter /></a>
          <a href="#" className="footer1-social-icon"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
