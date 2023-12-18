import React, { useState } from 'react';
import { FaBars, FaHome, FaUser, FaEnvelope } from 'react-icons/fa';
import { GrTechnology } from "react-icons/gr";
import { MdSpaceDashboard } from "react-icons/md";
import './Navbar1.css';

const Navbar1 = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="navbar1">
      <div className="navbar1-container">
        <div className="navbar1-left">
          <div className="navbar1-logo">
            <FaHome size={24}/>
          </div>
          <div className="navbar1-title">Company</div>
        </div>
        <div className="navbar1-menu-button" onClick={handleToggleMenu}>
          <FaBars size={24} />
        </div>
        <div className={`navbar1-links ${showMenu ? 'show-menu' : ''}`}>
          <div className="navbar1-link">
            <FaUser size={16} />
            About
          </div>
          <div className="navbar1-link">
            <GrTechnology size={16} />
            Products
          </div>
          <div className="navbar1-link">
            <MdSpaceDashboard size={16} />
            Dashboard
          </div>
          <div className="navbar1-link">
            <FaEnvelope size={16} />
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
