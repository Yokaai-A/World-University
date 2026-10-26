import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => (
  <div className="about-page">
    <section className="about-hero">
      <div className="about-hero-copy">
        <p className="about-eyebrow">ABOUT WORLDUNIVERSITY</p>
        <h1>Explore the world with a little more context.</h1>
        <p className="about-lead">
          We make country information easier to discover, compare, and understand—so students can start exploring the world beyond their campus.
        </p>
        <Link className="about-cta" to="/search">Explore countries <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="about-hero-note">
        <span className="about-note-index">01 / OUR PURPOSE</span>
        <p>Useful information is a good first step toward a wider perspective.</p>
      </div>
    </section>

    <section className="about-story" aria-labelledby="about-story-title">
      <div className="about-section-label"><span>01</span><span>WHO WE ARE</span></div>
      <div className="about-story-copy">
        <h2 id="about-story-title">A starting point for global discovery.</h2>
        <p>
          WorldUniversity is an information platform built for curious students. Browse countries, learn about their flags and places, and use simple filters to find the details that matter to you.
        </p>
      </div>
    </section>

    <section className="about-pillars" aria-label="Our vision and mission">
      <article className="about-pillar about-vision">
        <div className="about-section-label"><span>02</span><span>OUR VISION</span></div>
        <h2>Make learning about the world accessible to everyone.</h2>
        <p>We believe discovering new places can open the door to new ideas, opportunities, and connections.</p>
      </article>
      <article className="about-pillar about-mission">
        <div className="about-section-label"><span>03</span><span>OUR MISSION</span></div>
        <h2>Make exploration useful and straightforward.</h2>
        <ul>
          <li>Help students discover countries through clear search and filtering tools.</li>
          <li>Bring essential country facts together in one accessible place.</li>
          <li>Encourage a broader view of the places and people around the world.</li>
        </ul>
      </article>
    </section>

    <section className="about-team" aria-labelledby="about-team-title">
      <div className="about-section-label"><span>04</span><span>THE PEOPLE BEHIND IT</span></div>
      <div>
        <h2 id="about-team-title">Built with curiosity and care.</h2>
        <p>WorldUniversity is developed by a team of students and makers who want useful information to feel easier to reach. We keep improving the experience so every visit can lead to a new discovery.</p>
      </div>
    </section>
  </div>
);

export default About;
