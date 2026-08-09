import React from "react";
import Footer from "../footer/Footer";
import "./About.css";

export default function About() {
  return (
    <section className="about-section">
      <h2 className="about-subtitle">Our Architecture</h2>
      <h1 className="about-title">About Kinetix Digital Group</h1>
      <div className="about-copy">
        <p>
          Kinetix Digital Group is a multi-disciplinary digital enterprise built on
          the foundation of self-sufficiency, engineering mastery, and data-backed
          creative publishing. We don't just build for the web; we engineer complete
          platforms that bridge high-tier digital media with robust tech deployment.
        </p>
        <p>
          By blending software development, media broadcast platforms, and active data
          architecture, Kinetix functions as an incubator of interconnected digital
          properties. We believe that modern media requires exceptional code, and
          modern code deserves impactful distribution.
        </p>
        <div className="about-card">
          <h4 className="about-card-title">Core Philosophy</h4>
          <p className="about-card-text">
            Maintain velocity through innovation. We structurally operate under a kinetic
            loop: constantly deploying new technology, generating high-signal content,
            and translating internal infrastructure insights into actionable business
            applications.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}