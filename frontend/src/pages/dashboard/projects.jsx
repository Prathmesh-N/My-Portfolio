import React from "react";
import "../styles/projects.css";

function Projects() {
  const projectItems = [
    {
      title: "Zerodha Clone",
      image: "/assets/zerodhaclone.png",
      description:
        "Built a full-stack Zerodha-inspired trading platform with separate user and admin experiences Implemented key modules like authentication, watchlist, holdings, orders, and portfolio dashboard with responsive UI and secure API integration.Focused on clean architecture, scalable code structure, and real-world fintech workflow simulation.",
      link: "https://zerodha-clone-c2zu.onrender.com/",
    },
    {
      title: "Portfolio Dashboard",
      image: "/assets/zoomclone.png",
      description:
        "A real-time video conferencing application that allows users to create and join meetings with secure authentication. Built using MERN stack, WebRTC, and Socket.io, focusing on real-time communication and scalable backend architecture.",
      link: "https://zoom-clone-asmm.onrender.com/",
    },
  ];

  return (
    <main className="projects-wrap">
      <section className="projects-card">
        <p className="projects-eyebrow">Work</p>
        <h1>Projects</h1>
        <p className="projects-subtitle">
          Selected projects showcasing my Full MERN stack development skills.
        </p>

        <div className="projects-grid">
          {projectItems.map((project) => (
            <article className="project-item" key={project.title}>
              <div className="project-image-shell">
                <img src={project.image} alt={project.title} />
              </div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                className="project-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </article>
          ))}
        </div>

        <div className="projects-actions">
          <a
            href="https://github.com/Prathmesh-N"
            className="projects-all-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects
          </a>
        </div>
      </section>

    </main>
  );
}

export default Projects;


