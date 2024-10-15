import React from "react";

import wagglife from "@/assets/images/portfolio/waggly_life.jpg";
import aihome from "@/assets/images/portfolio/aihome.png";
import friendify from "@/assets/images/portfolio/friendify.png";
import Image from "next/image";

const ProjectsCard = () => {
  const cardData = [
    {
      img: wagglife,
      title: "Waggly Life Projects",
    },
    {
      img: aihome,
      title: "AI Homes Projects",
    },
    {
      img: friendify,
      title: "Friendify Ai Projects",
    },
  ];
  return (
    <div className="card card-projects">
      <div className="card-body">
        <h3 className="card-title">
          Recent Projects{" "}
          <a className="link-btn" href="portfolio.html">
            All Projects
            <svg
              className="icon"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16699 10H15.8337"
                stroke="#00b8d4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.833 15L15.833 10"
                stroke="#00b8d4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.833 5L15.833 10"
                stroke="#00b8d4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </h3>
        <div className="projects-main mt-24">
          <div className="row g-4 parent-container">
            {cardData.map((i, index) => (
              <div className="col-lg-12" key={index}>
                <div className="project-item">
                  <div className="image">
                    <Image
                      src={i.img}
                      alt={i.title}
                      className="img-fluid w-100"
                    />
                    <a
                      href="#"
                      className="gallery-popup full-image-preview parent-container"
                    >
                      <svg
                        className="icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <path d="M10 4.167v11.666M4.167 10h11.666" />
                      </svg>
                    </a>
                    <div className="info">
                      <span className="category">{i.title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="col-lg-12">
              <div className="project-item">
                <div className="image">
                  <img
                    src="assets/img/projects/project-1.png"
                    alt="project-1"
                    className="img-fluid w-100"
                  />
                  <a
                    href="assets/img/projects/project-1.png"
                    className="gallery-popup full-image-preview parent-container"
                  >
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M10 4.167v11.666M4.167 10h11.666" />
                    </svg>
                  </a>
                  <div className="info">
                    <span className="category">Product Design</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="project-item">
                <div className="image">
                  <img
                    src={wagglife.src}
                    alt="project-2"
                    className="img-fluid w-100"
                  />
                  <a
                    href="assets/img/projects/project-2.png"
                    className="gallery-popup full-image-preview parent-container"
                  >
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="M10 4.167v11.666M4.167 10h11.666" />
                    </svg>
                  </a>
                  <div className="info">
                    <span className="category">Product Design</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
