import React from "react";
import "../styles/home.css";

function Home() {
  const displayname = localStorage.getItem("name") || "User";

  return (
    <main className="home-wrap">
      <div className="home-glow home-glow-one" aria-hidden="true" />
      <div className="home-glow home-glow-two" aria-hidden="true" />

      <section className="home-left">
        <h2 className="welcome-chip">Welcome, <span style={{ color: "#2563eb" }}>{displayname}</span></h2>
        <h1>Hello, I'm <span style={{color: "#875C74"}}>Prathmesh Nalawade</span></h1>
        <p className="home-subtitle">MERN Stack Developer (Fresher) | BCS Graduate</p>
        <p className="home-lead">
          I’m a BCS graduate and certified MERN Stack Developer with hands-on experience in React.js, Node.js, Express.js, and MongoDB. I build responsive, scalable web applications and develop REST APIs, working across both frontend and backend. Skilled in Git, GitHub, Bootstrap, and Tailwind CSS, and currently enhancing my knowledge in Docker, deployment, and system design.
        </p>
        <a
          href="/Prathmesh_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="home-btn"
        >
          Resume
        </a>
      </section>

      <section className="home-right">
        <div className="home-portrait-shell">
          <div className="home-portrait">
            <img src="/assets/profilephoto.png" alt="Profile" />
          </div>
          <div className="home-chip chip-top">React + Node.js</div>
          <div className="home-chip chip-bottom">Mongodb + Express.js</div>
        </div>
      </section>
    </main>
  );
}

export default Home;
