"use client"
import React from 'react'
import { MdContactPhone, MdLocationCity, MdMail, MdPhone } from 'react-icons/md'

const Sidebar = () => {
  return (
    <>
            <aside class="sidebar" data-sidebar>

<div class="sidebar-info">

  <figure class="avatar-box">
    <img src="/assets/images/my-avatar.png" alt="Richard hanrick" width="80" />
  </figure>

  <div class="info-content">
    <h1 class="name" title="Richard hanrick">Harsh Dodiya</h1>

    <p class="title">Another Tech Guy</p>
  </div>

  <button class="info_more-btn" data-sidebar-btn>
    <span>Show Contacts</span>

    <ion-icon name="chevron-down"></ion-icon>
  </button>

</div>

<div class="sidebar-info_more">

  <div class="separator"></div>

  <ul class="contacts-list">

    <li class="contact-item">

      <div class="icon-box">
        {/* <ion-icon name="mail-outline"></ion-icon> */}
        <MdMail/>
      </div>

      <div class="contact-info">
        <p class="contact-title">Email</p>

        <a href="mailto:harsh.dodi@gmail.com" class="contact-link">harsh.dodi@gmail.com</a>
      </div>

    </li>

    <li class="contact-item">

      <div class="icon-box">
        {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
        <MdPhone/>
      </div>

      <div class="contact-info">
        <p class="contact-title">Phone</p>

        <a href="tel:+12133522795" class="contact-link">+91 7506549896</a>
      </div>

    </li>

    <li class="contact-item">

      <div class="icon-box">
        {/* <ion-icon name="location-outline"></ion-icon> */}
        <MdLocationCity/>
      </div>

      <div class="contact-info">
        <p class="contact-title">Location</p>

        <address>Mumbai, Maharashtra, India</address>
      </div>

    </li>

  </ul>

  <div class="separator"></div>

  <ul class="social-list">

    <li class="social-item">
      <a href="#" class="social-link">
        <ion-icon name="logo-facebook"></ion-icon>
      </a>
    </li>

    <li class="social-item">
      <a href="#" class="social-link">
        <ion-icon name="logo-twitter"></ion-icon>
      </a>
    </li>

    <li class="social-item">
      <a href="#" class="social-link">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
    </li>

  </ul>

</div>

</aside>
    </>
  )
}

export default Sidebar