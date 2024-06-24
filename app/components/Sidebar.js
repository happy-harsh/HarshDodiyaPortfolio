"use client";
import React, { useState } from "react";
import { BsArrow90DegDown, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { MdMail, MdPhone, MdLocationCity } from "react-icons/md";
// import "../styles/Sidebar.css"

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <aside className={`sidebar ${toggle ? "active" : ""}`}>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
            src="/assets/images/avatar-myy.png"
              alt="Harsh Dodiya"
            />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Harsh Dodiya">
              Harsh Dodiya
            </h1>

            <p className="title">Tech Guy</p>
          </div>

          <button className="info_more-btn" onClick={handleToggle}>
            <BsArrow90DegDown />
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <MdMail />
              </div>
              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:harsh.dodi@gmail.com" className="contact-link">
                  harsh.dodi@gmail.com
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <MdPhone />
              </div>
              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+917506549896" className="contact-link">
                  +91 7506549896
                </a>
              </div>
            </li>
            <li className="contact-item">
              <div className="icon-box">
                <MdLocationCity />
              </div>
              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Mumbai, Maharashtra, India</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            {/* <li className="social-item">
              <a href="#" className="social-link">
                <BsInstagram />
              </a>
            </li> */}
            <li className="social-item">
              <a href="https://www.linkedin.com/in/harsh-dodiya-76882b196/" className="social-link">
                <BsLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
