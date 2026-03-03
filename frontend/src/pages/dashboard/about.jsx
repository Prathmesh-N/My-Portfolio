import React from "react";
import "../styles/about.css";

function About() {
  return (
    <main className="about-wrap">
      <section className="about-card">
        <p className="about-eyebrow">Profile</p>
        <h1>About Me</h1>

        <div className="about-grid">
          <div className="about-identity">
            <div className="about-image-shell">
              <img src="/assets/profilemain.jpg" alt="ProfileImage" />
            </div>
            <h2>Prathmesh Prabhakar Nalawade</h2>
            <p className="about-role">
              MERN Stack Developer | B.Sc. Computer Science Graduate
            </p>
          </div>

          <div className="about-text">
            <p>
              I am a passionate and dedicated MERN Stack Developer with a strong
              academic background in Computer Science and hands-on experience in
              building full-stack web applications. I completed my schooling at
              Four's English Medium School, where I built a strong foundation in
              academics and communication skills.
            </p>
            <p>
              I pursued my Higher Secondary Education in the Science stream at
              Mhalsakant Junior College, which strengthened my analytical
              thinking and problem-solving abilities.
            </p>
            <p>
              I successfully completed my Bachelor's degree in Computer Science
              from Savitribai Phule Pune University. During my graduation, I
              developed a deep interest in web development and software
              technologies, which motivated me to pursue professional
              certification in the MERN Stack.
            </p>
            <p>
              I hold a certification in Full Stack Web Development (MERN Stack),
              where I gained practical experience in building dynamic and
              scalable web applications.
            </p>
          </div>
        </div>

        <section className="about-block">
          <h3>Curricular Activities</h3>
          <p>
            During my college years, I actively participated in various
            curricular and co-curricular activities, which enhanced my teamwork,
            communication skills, and leadership qualities.
          </p>
        </section>

        <section className="about-block">
          <h3>Personal Interests</h3>
          <p>
            I enjoy traveling and exploring new places, as it allows me to
            experience different cultures and gain new perspectives. I also like
            learning new technologies and continuously improving my development
            skills.
          </p>
        </section>
      </section>
    </main>
  );
}

export default About;
