"use client"
import React from "react";
import "../styles/Contact.css"

const Contact = () => {
  return (
    <>
      <div class="contact article" data-page="contact">
        <header>
          <h2 class="h2 article-title">Contact</h2>
        </header>

        <section class="mapbox" data-mapbox>
          <figure>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1461584157!2d72.71603077779974!3d19.082177207920626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719249033037!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </figure>
        </section>

        <section class="contact-form">
          <h3 class="h3 form-title">Contact Form</h3>

          <form action="#" class="form" data-form>
            <div class="input-wrapper">
              <input
                type="text"
                name="fullname"
                class="form-input"
                placeholder="Full name"
                required
                data-form-input
              />

              <input
                type="email"
                name="email"
                class="form-input"
                placeholder="Email address"
                required
                data-form-input
              />
            </div>

            <textarea
              name="message"
              class="form-input"
              placeholder="Your Message"
              required
              data-form-input
            ></textarea>

            <button class="form-btn" type="submit" disabled data-form-btn>
              <ion-icon name="paper-plane"></ion-icon>
              <span>Send Message</span>
            </button>
          </form>
        </section>
      </div>
    </>
  );
};

export default Contact;
