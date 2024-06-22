"use client"
import React from "react";
import { MdCastForEducation, MdSchool, MdWork } from "react-icons/md";

const Resume = () => {
  return (
    <>
      <div class="" data-page="">
        <header>
          <h2 class="h2 article-title">Resume</h2>
        </header>
        <section class="timeline">
          <div class="title-wrapper">
            <div class="icon-box">
              {/* <ion-icon name="book-outline"></ion-icon> */}
              <MdWork/>
            </div>

            <h3 class="h3">Experience</h3>
          </div>

          <ol class="timeline-list">
            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">Jr. Web Developer</h4>

              <span>2024 — Present</span>

              <p class="timeline-text">
                Nemo enim ipsam voluptatem blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et qvuas molestias
                exceptur.
              </p>
            </li>

          </ol>
        </section>

        <section class="timeline">
          <div class="title-wrapper">
            <div class="icon-box">
              {/* <ion-icon name="book-outline"></ion-icon> */}
              <MdSchool/>
            </div>

            <h3 class="h3">Education</h3>
          </div>

          <ol class="timeline-list">
            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">
               Vidyavardhini College of Engineering & Technology
              </h4>

              <span>2019-2023</span>

              <p class="timeline-text">
                Nemo enims ipsam voluptatem, blanditiis praesentium voluptum
                delenit atque corrupti, quos dolores et quas molestias exceptur.
              </p>
            </li>

            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">Royal College of Arts, Science & Commerce</h4>

              <span>2019</span>

              <p class="timeline-text">
                Ratione voluptatem sequi nesciunt, facere quisquams facere menda
                ossimus, omnis voluptas assumenda est omnis..
              </p>
            </li>

            <li class="timeline-item">
              <h4 class="h4 timeline-item-title">
                Christ High School
              </h4>

              <span>2017</span>

              <p class="timeline-text">
                Duis aute irure dolor in reprehenderit in voluptate, quila
                voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
              </p>
            </li>
          </ol>
        </section>


{/* 
        <section class="skill">
          <h3 class="h3 skills-title">My skills</h3>

          <ul class="skills-list content-card">
            <li class="skills-item">
              <div class="title-wrapper">
                <h5 class="h5">Web design</h5>
                <data value="80">80%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style={{ width: "80%" }}></div>
              </div>
            </li>

            <li class="skills-item">
              <div class="title-wrapper">
                <h5 class="h5">Graphic design</h5>
                <data value="70">70%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style={{ width: "70%" }}></div>
              </div>
            </li>

            <li class="skills-item">
              <div class="title-wrapper">
                <h5 class="h5">Branding</h5>
                <data value="90">90%</data>
              </div>

              <div class="skill-progress-bg">
                <div class="skill-progress-fill" style={{ width: "90%" }}></div>
              </div>
            </li>
          </ul>
        </section> */}
      </div>
    </>
  );
};

export default Resume;
