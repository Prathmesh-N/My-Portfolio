import React from "react";
import "../styles/contact.css";

function Contact() {
  return (
    <main className="contact-wrap">
      <section className="contact-card">
        <p className="contact-eyebrow">Connect</p>
        <h1>Contact Me</h1>
        <p className="contact-subtitle">This is where you can find me.</p>

        <div className="contact-grid">
          <article className="contact-item">
            <div className="contact-icon-shell" aria-hidden="true">
              E
            </div>
            <div className="contact-item-text">
              <h2>Email</h2>
              <a href="mailto:prathmeshn789@gmail.com">
                prathmeshn789@gmail.com
              </a>
            </div>
          </article>

          <article className="contact-item">
            <div className="contact-icon-shell" aria-hidden="true">
              P
            </div>
            <div className="contact-item-text">
              <h2>Phone</h2>
              <a href="tel:+919921823443">+91 9921823443</a>
            </div>
          </article>
        </div>

        <h2 className="contact-social-title">Link</h2>

        <div className="contact-social-grid">
          <a
            className="contact-social-link"
            href="https://www.linkedin.com/in/prathmesh-nalawade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-social-badge" aria-hidden="true">
              IN
            </span>
            <span>LinkedIn</span>
          </a>

          <a
            className="contact-social-link"
            href="https://github.com/Prathmesh-N"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-social-badge" aria-hidden="true">
              GH
            </span>
            <span>GitHub</span>
          </a>

          <a
            className="contact-social-link"
            href="https://www.instagram.com/prathmeshhh12/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="contact-social-badge" aria-hidden="true">
                IG
            </span>
            <span>Instagram</span>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;
