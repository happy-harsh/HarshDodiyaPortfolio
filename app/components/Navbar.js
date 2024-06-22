"use client"
import { useState } from 'react';

const Navbar = ({ setActiveSection }) => {
  const [activeSection, setActiveSectionState] = useState('about');

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
    setActiveSectionState(section);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button 
            className={`navbar-link ${activeSection === 'about' ? 'active' : ''}`} 
            onClick={() => handleSetActiveSection('about')}
          >
            About
          </button>
        </li>
        <li className="navbar-item">
          <button 
            className={`navbar-link ${activeSection === 'resume' ? 'active' : ''}`} 
            onClick={() => handleSetActiveSection('resume')}
          >
            Resume
          </button>
        </li>
        <li className="navbar-item">
          <button 
            className={`navbar-link ${activeSection === 'portfolio' ? 'active' : ''}`} 
            onClick={() => handleSetActiveSection('portfolio')}
          >
            Portfolio
          </button>
        </li>
        <li className="navbar-item">
          <button 
            className={`navbar-link ${activeSection === 'contact' ? 'active' : ''}`} 
            onClick={() => handleSetActiveSection('contact')}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
