import React from "react";
import "../styles/skills.css";

const skillItems1 = [
  { name: "HTML", image: "/assets/htmllogo.jpg" },
  { name: "CSS", image: "/assets/csslogo.jpg" },
  { name: "JavaScript", image: "/assets/javascriptlogo.jpg" },
  { name: "React", image: "/assets/reactlogo.jpg" },
  { name: "Node.js", image: "/assets/nodejslogo.jpg" },
  { name: "Express", image: "/assets/expresslogo.jpg" },
  { name: "MongoDB", image: "/assets/mongodblogo.jpg" },
  { name: "Bootstrap", image: "/assets/bootstraplogo.jpg" },
  { name: "Tailwind CSS", image: "/assets/tailwindlogo.jpg" },
  { name: "Git", image: "/assets/githublogo.jpg" },
  { name: "MySQL", image: "/assets/mysqllogo.jpg" },
];

const skillItems2 = [
  { name: "Visual Studio Code", image: "/assets/vscodelogo.jpg" },
  { name: "Render", image: "/assets/renderlogo.jpg" },
];

const skillItems3 = [{ name: "Docker", image: "/assets/dockerlogo.jpg" }];

function Skills() {
  return (
    <main className="skills-wrap">
      <section className="skills-card">
        <p className="skills-eyebrow">Expertise</p>
        <h1>Skills</h1>
        <p className="skills-subtitle">
          I have knowledge of the following technologies.
        </p>

        <div className="skills-grid">
          {skillItems1.map((skill) => (
            <article className="skill-item" key={skill.name}>
              <div className="skill-logo-shell">
                <img src={skill.image} alt={`${skill.name} logo`} />
              </div>
              <h2>{skill.name}</h2>
            </article>
          ))}
        </div>

        <p className="skills-subtitle">Tools that I use in my projects.</p>

        <div className="skills-grid">
          {skillItems2.map((skill) => (
            <article className="skill-item" key={skill.name}>
              <div className="skill-logo-shell">
                <img src={skill.image} alt={`${skill.name} logo`} />
              </div>
              <h2>{skill.name}</h2>
            </article>
          ))}
        </div>

        <p className="skills-subtitle">Still learning new skills.</p>

        <div className="skills-grid">
          {skillItems3.map((skill) => (
            <article className="skill-item" key={skill.name}>
              <div className="skill-logo-shell">
                <img src={skill.image} alt={`${skill.name} logo`} />
              </div>
              <h2>{skill.name}</h2>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Skills;
