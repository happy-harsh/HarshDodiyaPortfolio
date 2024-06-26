"use client";
import React from "react";
import "../styles/Portfolio.css"

const data = [{
    projectTitle:"Shopezy",
    projectLink:"",
    projectCategory:"WebApp"
}]

const Portfolio = () => {
  return (
    <>
      <div class="portfolio" data-page="portfolio">
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
    {
        data.map((info)=>{
            return(
                <li
                class="project-item  active"
                data-filter-item
                data-category="web development"
              >
                <a href="#">
                  <figure class="project-img">
                    <div class="project-item-icon-box">
                      <ion-icon name="eye-outline"></ion-icon>
                    </div>
  
                    <img
                      src="/assets/images/Shopezy.png"
                      alt="finance"
                      loading="lazy"
                    />
                  </figure>
  
                  <h3 class="project-title">{info.projectTitle}</h3>
  
                  <p class="project-category">{info.projectCategory}</p>
                </a>
              </li>
            )
        })
    }


          </ul>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
