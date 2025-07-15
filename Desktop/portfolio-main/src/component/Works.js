import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import img1 from "../images/work1.png";
import img2 from "../images/work2.png";
import img3 from "../images/work3.png";
import img4 from "../images/work4.png";

const projectWidth = 450;

const originalProjects = [
  { title: "Project 1", img: img1, link: "https://himalaya-java.vercel.app/" },
  { title: "Project 2", img: img2, link: "https://level-rouge.vercel.app/" },
  { title: "Project 3", img: img3, link: "https://furnmaster.vercel.app/" },
  { title: "Project 4", img: img4, link: "https://furnique-six.vercel.app/" },
];

const Works = () => {
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const slideRef = useRef();
  const count = originalProjects.length;

  const projects = [
    originalProjects[originalProjects.length - 1],
    ...originalProjects,
    originalProjects[0],
  ];

  const handleNext = () => {
    if (isTransitioning) setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning) setIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (index === projects.length - 1) {
      setIndex(1);
    } else if (index === 0) {
      setIndex(projects.length - 2);
    } else {
      setIsTransitioning(true);
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "60px" }}>Works <br /> {count}</h2>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          margin: "30px auto",
          padding: "20px 80px",
        }}
      >
        <div
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: "5%",
            zIndex: 10,
            cursor: "pointer",
            transform: "translateY(-50%)",
          }}
        >
          <FaChevronLeft size={30} color="#00ffc8" />
        </div>

        <div
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: "5%",
            zIndex: 10,
            cursor: "pointer",
            transform: "translateY(-50%)",
          }}
        >
          <FaChevronRight size={30} color="#00ffc8" />
        </div>

        <div
          className="slider_box"
          ref={slideRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            display: "flex",
            width: `${projects.length * projectWidth}px`,
            transform: `translateX(-${index * projectWidth}px)`,
            transition: isTransitioning ? "transform 0.5s ease" : "none",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                width: projectWidth,
                height: "650px",
                flexShrink: 0,
                background: "#222",
                borderRadius: 10,
                padding: 16,
                color: "white",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: "50%",
                    height: "90%",
                    borderRadius: 8,
                    marginBottom: 10,
                    padding: "5px",
                    border: "3px solid #00ffc8",
                  }}
                />
                <p>{project.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;
