"use client";
import React from "react";
import "../styles/Portfolio.css";
import { BsEye } from "react-icons/bs";

const data = [
  {
    projectTitle: "Shopezy",
    projectLink: "https://shopezy-mern-frontend.vercel.app/",
    projectCategory: "WebApp",
    projectImage: "/assets/images/portfolio-image/Shopezy.png",
    projectTechStack: "MERN",
  },
  {
    projectTitle: "Tic Tac Toe",
    projectLink: "https://tictacgame.surge.sh/",
    projectCategory: "WebApp",
    projectImage: "/assets/images/portfolio-image/tic.png",
    projectTechStack: "React js",
  },
  {
    projectTitle: "HappyFood",
    projectLink: "https://cerulean-gecko-a9fb30.netlify.app/",
    projectCategory: "WebApp",
    projectImage: "/assets/images/portfolio-image/happyFood.png",
    projectTechStack: "MERN",
  },
  {
    projectTitle: "Old Portfolio",
    projectLink:
      "https://65716fb65522774d7435dc16--newportfolio003.netlify.app/",
    projectCategory: "WebApp",
    projectImage: "/assets/images/portfolio-image/portfolio.png",
    projectTechStack: "HTML CSS",
  },
  {
    projectTitle: "Expense Tracker ",
    projectLink:
      "https://65716fb65522774d7435dc16--newportfolio003.netlify.app/",
    projectCategory: "WebApp",
    projectImage: "https://user-images.githubusercontent.com/70851344/124381802-0801fe00-dce2-11eb-8978-dfea53055368.png",
    projectTechStack: "Python Tkinter, sqlite3",
  },
];

const Portfolio = () => {
  return (
    <>
      <div class="portfolio article" data-page="portfolio">
        <header>
          <h2 class="h2 article-title">Portfolio</h2>
        </header>

        <section class="projects">
          {/* <ul class="filter-list">
            <li class="filter-item">
              <button class="active" data-filter-btn>
                All
              </button>
            </li>

            <li class="filter-item">
              <button data-filter-btn>Web design</button>
            </li>

            <li class="filter-item">
              <button data-filter-btn>Applications</button>
            </li>

            <li class="filter-item">
              <button data-filter-btn>Web development</button>
            </li>
          </ul> */}
          {/* 
          <div class="filter-select-box">
            <button class="filter-select" data-select>
              <div class="select-value" data-selecct-value>
                Select category
              </div>

              <div class="select-icon">
                <ion-icon name="chevron-down"></ion-icon>
              </div>
            </button>

            <ul class="select-list">
              <li class="select-item">
                <button data-select-item>All</button>
              </li>

              <li class="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li class="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li class="select-item">
                <button data-select-item>Web development</button>
              </li>
            </ul>
          </div> */}

          <ul class="project-list">
            {data.map((info, index) => {
              return (
                <li
                  class="project-item  active"
                  data-filter-item
                  data-category="web development"
                  key={index}
                >
                  <a href={info.projectLink} target="_blank">
                    <figure class="project-img">
                      <div class="project-item-icon-box">
                        {/* <ion-icon name="eye-outline"></ion-icon> */}
                        <BsEye />
                      </div>

                      <img
                        src={info.projectImage}
                        alt={info.projectTitle}
                        loading="lazy"
                      />
                    </figure>

                    <h3 class="project-title">{info.projectTitle}</h3>

                    {/* <p class="project-category">{info.projectCategory}</p> */}
                    <p class="project-category">{info.projectTechStack}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
