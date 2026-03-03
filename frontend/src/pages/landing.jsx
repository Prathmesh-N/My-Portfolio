import { Link } from "react-router-dom";
import "./landing.css";

function Landing() {
  return (
    <>
      <main className="landing-wrap">
        <div className="landing-glow landing-glow-one" aria-hidden="true" />
        <div className="landing-glow landing-glow-two" aria-hidden="true" />

        <section className="landing">
          <p className="eyebrow">Developer Portfolio</p>
          <h1>Designing and Building Digital Experiences</h1>
          <p className="lead">
            Explore my projects, technical skills, and journey in web development.
          </p>

          <div className="actions">
            <Link to="/signup" className="btn-primary">
              Create Account
            </Link>
            <Link to="/login" className="btn-secondary">
              Login
            </Link>
          </div>
          <p className="login-text">
            New visitor? Start with a quick signup to unlock the My Portfolio.
          </p>
        </section>
      </main>
    </>
  );
}

export default Landing;
