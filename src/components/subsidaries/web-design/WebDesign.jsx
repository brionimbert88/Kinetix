import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../footer/Footer";
import "./WebDesign.css";
import WebDesignLogo from "../../../assets/servicelogo.png";

export default function WebDesign() {
  const services = [
    {
      id: "design",
      title: "Custom UI/UX Web Design",
      tagline: "Visually striking layouts tailored to your brand identity.",
      description:
        "Stand out from competitors with clean, tailored designs. We focus on modern typography, intuitive layouts, vibrant visual hierarchy, and polished user journeys to build a strong digital presence.",
      features: [
        "Brand-Aligned Design",
        "UX Strategy",
        "Interactive Wireframes",
        "Visual Consistency",
      ],
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      id: "dev",
      title: "Responsive Web Development",
      tagline: "Fast, modern code built for seamless performance.",
      description:
        "Engineered for speed and reliability, your site will perform beautifully across desktop, tablet, and mobile without sacrificing functionality.",
      features: [
        "Fast Load Times",
        "Modular Code",
        "Cross-Browser Ready",
        "Responsive Layouts",
      ],
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      id: "redesign",
      title: "Conversion-Focused Redesigns",
      tagline: "Turn outdated websites into growth engines.",
      description:
        "We restructure content, improve UX flow, and remove speed bottlenecks so visitors move naturally through your sales journey and convert more often.",
      features: [
        "UX & Speed Audits",
        "Navigation Restructuring",
        "Mobile Optimization",
        "Lead Generation Focus",
      ],
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      id: "maintenance",
      title: "Website Maintenance & Speed Optimization",
      tagline: "Reliable support for long-term growth.",
      description:
        "Keep your digital storefront fast, secure, and current with ongoing maintenance, technical updates, and optimization support.",
      features: [
        "Performance Tuning",
        "Security Updates",
        "Content Refinement",
        "Technical Support",
      ],
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const pillars = [
    {
      title: "Speed-Optimized",
      description:
        "Fast-loading pages built to reduce drop-off and improve engagement.",
      icon: "⚡",
    },
    {
      title: "Mobile-First Design",
      description:
        "Layouts built to perform seamlessly across all screen sizes.",
      icon: "📱",
    },
    {
      title: "Search-Engine Ready",
      description:
        "Clean structure and semantic build quality for improved discoverability.",
      icon: "🔍",
    },
    {
      title: "Secure & Scalable",
      description:
        "Modern standards designed to grow with your business over time.",
      icon: "🔒",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      desc: "We define goals, audience needs, and the structure that supports growth.",
    },
    {
      step: "02",
      title: "Design & Prototyping",
      desc: "We shape a refined visual system and user journey for your brand.",
    },
    {
      step: "03",
      title: "Development & Testing",
      desc: "We build high-performing, responsive experiences with clean code and QA checks.",
    },
    {
      step: "04",
      title: "Launch & Growth",
      desc: "We deploy and support your site with a focus on performance and conversion.",
    },
  ];

  return (
    <div className="webdesign-page">
      <main className="webdesign-main">
        <section className="webdesign-logo">
          <img
            src={WebDesignLogo}
            alt="Web Design Logo"
            className="webdesign-logo"
          />
          <h1 className="webdesign-title">
            Digital experiences built to move your business forward.
          </h1>
          <p className="webdesign-intro">
            We design and build polished, high-performance websites that elevate
            your brand, engage your audience, and convert interest into action.
          </p>

          <div className="webdesign-actions">
            <Link to="/contact" className="btn btn-primary">
              Get Started
            </Link>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
        </section>

        <section className="webdesign-problem">
          <div className="problem-panel">
            <div className="problem-block">
              <span className="problem-label">The Problem</span>
              <h3>Why most websites fail</h3>
              <p>
                Most digital experiences are slow, outdated, and confusing on
                mobile, which causes businesses to lose leads before they ever
                begin a conversation.
              </p>
            </div>

            <div className="problem-block">
              <span className="problem-label alt">Our Solution</span>
              <h3>Built to perform & convert</h3>
              <p>
                We create responsive, strategic, and conversion-ready websites
                that load quickly, feel intuitive, and guide users toward the
                next step.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="webdesign-section">
          <div className="section-header">
            <p className="section-kicker">Services</p>
            <h2>Full-service digital solutions</h2>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-tag">{service.tagline}</p>
                <p className="service-copy">{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="pillars" className="webdesign-section alt-section">
          <div className="section-header">
            <p className="section-kicker">Why Us</p>
            <h2>Built on modern performance pillars</h2>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <article key={index} className="pillar-card">
                <div className="pillar-icon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="webdesign-section">
          <div className="section-header">
            <p className="section-kicker">Process</p>
            <h2>Our development workflow</h2>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article key={step.step} className="process-card">
                <span className="process-step">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="webdesign-cta">
          <div className="cta-inner">
            <p className="section-kicker light">Ready to grow?</p>
            <h2>Upgrade your digital presence with a site built to convert.</h2>
            <Link to="/contact" className="btn btn-primary">
              Request a Free Quote
            </Link>
          </div>
        </section>
        <Link to="/" className="btn btn-secondary back-home-link">
          ← Back to Homepage
        </Link>
      </main>

      <Footer />
    </div>
  );
}
