import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import ProjectCard from "./projectCard";

import "./App.css";

function App() {
  const [currentRole, setCurrentRole] = useState("");
  const roles = [
    "FrontEnd Developer",
    "Fullstack Developer",
    "Backend Developer",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectDetails = [
    {
      projectName: "Jobby App",
      description:
        "Jobby app is a job portal application where  you can find about jobs and job information. It has features like filtering, serching and login option these features are created by using technilogies like React js, js, CSS, Bootstrap, REST api Calls, Local Storage and JWT authentication",
      imgUrl: [
        "https://res.cloudinary.com/dh46cfc1b/image/upload/v1725019130/Screenshot_2024-08-30_172329_k1vgog.png",
        "https://res.cloudinary.com/dh46cfc1b/image/upload/v1725019129/Screenshot_2024-08-30_172501_ajcieh.png",
      ],
    },
    {
      projectName: "Nxt Trends",
      description:
        "Developed a cutting-edge e-commerce platform inspired by Amazon and Flipkart. Built pages for Login, Products, and Product details with React Router, React components, form inputs, and event handlers.Enabled secure authentication and authorization with JWT tokens and REST API calls.",
      imgUrl: [
        "https://res.cloudinary.com/dh46cfc1b/image/upload/v1725019132/Screenshot_2024-08-30_172549_wivedr.png",
        "https://res.cloudinary.com/dh46cfc1b/image/upload/v1725019129/Screenshot_2024-08-30_172623_hf3ac3.png",
      ],
    },
    {
      projectName: "IPL Dashboard",
      description:
        "Created a comprehensive dashboard for IPL teams and matches. Used React Router for smooth navigation, displaying team information and matches with REST API calls and Implemented a 404 page for invalid routes.",
      imgUrl: [
        "https://res.cloudinary.com/dh46cfc1b/image/upload/v1725019132/Screenshot_2024-08-30_172801_za4d5t.png",
        "https://res.cloudinary.com/dh46cfc1b/image/upload/v1725019130/Screenshot_2024-08-30_172737_zji3c7.png",
      ],
    },
  ];

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      setCurrentRole(roles[currentIndex]);
      currentIndex = (currentIndex + 1) % roles.length;
    }, 2000);
  }, []);

  const previousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectDetails.length - 1 : prevIndex - 1
    );
  };
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectDetails.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-container">
      <div className="home" id="homePage">
        <nav>
          <h1>$</h1>
          <ul className="list-container">
            <li className="list-item">
              <a href="#homePage" className="list-item-text">
                Home
              </a>
            </li>
            <li className="list-item">
              <a href="#aboutPage" className="list-item-text">
                About
              </a>
            </li>
            <li className="list-item">
              <a href="#Projects" className="list-item-text">
                Projets
              </a>
            </li>
            <li className="list-item">
              <a href="#Contact" className="list-item-text">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="name-container">
          <h1 className="name">Sivadinesh</h1>
          <h2 className="role">{currentRole}</h2>
        </div>
        <a href="#aboutPage" className="icon ">
          <FontAwesomeIcon icon={faCircleDown} className="icon" />
        </a>
      </div>
      <div className="about-page" id="aboutPage">
        <h1 className="about-heading">About</h1>
        <p className="about-page-description">
          Hi, I'm <strong>Sivadinesh</strong>, a passionate full-stack web
          developer specializing in the MERN stack. I have a solid foundation in
          both FrontEnd and Backend technologies.
          <br />
          <br />
          My journey into web development has been driven by my enthusiasm for
          solving complex problems and building dynamic applications. Though I'm
          a fresher in the MERN stack, I have already developed a variety of
          projects, from creating real-time applications to building APIs for
          seamless data management.
          <br />
          <br />
        </p>
        <a href="#Projects">
          check out my <strong>projects</strong>
        </a>
      </div>
      <div className="projects-page" id="Projects">
        <h1 className="projects-heading">Projects</h1>
        <div className="project-container">
          <div className="slider">
            <button onClick={previousSlide}>{"<"}</button>
            <ProjectCard
              key={currentIndex}
              eachItem={projectDetails[currentIndex]}
            />
            <button onClick={nextSlide}>{">"}</button>
          </div>
        </div>
      </div>
      <div className="Contact" id="Contact">
        <div className="social">
          <h1>Social</h1>
          <a
            href="https://www.linkedin.com/in/sivadinesh-k-v?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="__blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/sivadinesh12" target="__blank">
            GitHub
          </a>
        </div>
        <div className="project-links">
          <h1>Project Links</h1>
          <a href="https://ipldashboard69.ccbp.tech/" target="__blank">
            Ipl Dashboard
          </a>
          <a href="https://nxttrendz69.ccbp.tech/" target="__blank">
            Nxt Trendz
          </a>
          <a href="https://jobby69.ccbp.tech/" target="__blank">
            Jobby
          </a>
        </div>
        <div className="contact-info">
          <h1>Get in Touch</h1>
          <p>Email: dsiva7199@gmail.com</p>
          <p>MObile no: 7868041691</p>
          <a
            href="https://www.linkedin.com/in/sivadinesh-k-v?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="__blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
