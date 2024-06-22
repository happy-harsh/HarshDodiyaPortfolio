"use client"
import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { useState } from 'react';

const Otherhalf = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {

    console.log(activeSection)
    switch (activeSection) {
      case 'about':
        return <About />;

      case 'resume':

        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };
  
  return (
    <div class="main-content">
      <Navbar setActiveSection={setActiveSection} />

      {renderSection()}
    </div>
  );
};

export default Otherhalf;
