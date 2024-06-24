"use client";
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <>
      <div class="about  article" data-page="about">
        <header>
          <h2 class="h2 article-title">About me</h2>
        </header>

        <section class="about-text">
          <p>
            Hey there, I'm Harsh, a passionate and results-driven Full Stack Web
            App Developer Who is constantly exploring and implementing new
            technologies to stay at the forefront of the tech landscape.
          </p>
        </section>

        <section class="service">
          <h3 class="h3 service-title">What i'm doing</h3>

          <ul class="service-list">
            <li class="service-item">
              <div class="service-icon-box">
                <img
                  src="/assets/images/icon-dev.svg"
                  alt="Web development icon"
                  width="40"
                />
              </div>

              <div class="service-content-box">
                <h4 class="h4 service-item-title">
                  Full Stack Web development
                </h4>

                <p class="service-item-text">
                  Neat & Clean Frontend & Backend Programming
                </p>
              </div>
            </li>

            <li class="service-item">
              <div class="service-icon-box">
                <img
                  src="/assets/images/icons8-guitar-50.png"
                  alt="camera icon"
                  width="40"
                />
              </div>

              <div class="service-content-box">
                <h4 class="h4 service-item-title">Guitar</h4>

                <p class="service-item-text">Professional level guitarist</p>
              </div>
            </li>
          </ul>
        </section>

        <section class="clients">
          <h3 class="h3 clients-title">Clients</h3>

          <ul class="clients-list has-scrollbar">
            <li class="clients-item">
              <a href="https://www.webeelanguages.com/">
                <img
                  src="/assets/images/fav.png"
                  alt="client logo"
                  width="40px"
                  target="_blank"
                />
              </a>
            </li>

            <li class="clients-item">
              <a href="https://www.cinevenger.in/">
                <img
                  src="/assets/images/3.png"
                  alt="client logo"
                  width="40px"
                  target="_blank"
                />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default About;
