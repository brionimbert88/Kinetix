import { Link } from "react-router-dom";
import podcastLogo from "../../../assets/Podcasting Logo.png";
import Footer from "../../footer/Footer";
import "./Podcast.css";

export default function Podcast() {
  const services = [
    {
      id: "production",
      title: "Podcast Production",
      tagline: "Studio-quality recordings designed for impact.",
      description:
        "From concept to final master, we produce polished podcast experiences with strong audio clarity, sharp storytelling, and consistent brand voice.",
      features: [
        "Audio Engineering",
        "Show Structure",
        "Studio Recording",
        "Brand Voice Alignment",
      ],
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 1a4 4 0 014 4v7a4 4 0 11-8 0V5a4 4 0 014-4zm-7 9a1 1 0 011 1v1a6 6 0 0012 0v-1a1 1 0 112 0v1a8 8 0 01-7 7.93V21h3a1 1 0 110 2H8a1 1 0 110-2h3v-1.07A8 8 0 015 12v-1a1 1 0 011-1z" />
        </svg>
      ),
    },
    {
      id: "strategy",
      title: "Content Strategy",
      tagline: "Program design built to grow loyal audiences.",
      description:
        "We shape episodes, themes, and messaging that create a consistent content engine and connect with the right listeners across every touchpoint.",
      features: [
        "Audience Research",
        "Episode Planning",
        "Messaging Frameworks",
        "Growth Positioning",
      ],
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 18h16M7 15l3-3 2 2 5-6 3 3M6 6h12a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2z" />
        </svg>
      ),
    },
    {
      id: "brand",
      title: "Branded Podcast Content",
      tagline: "Turn your voice into a recognizable media asset.",
      description:
        "We build branded podcast experiences that build authority, capture attention, and make your organization feel more relevant and credible in its industry.",
      features: [
        "Thought Leadership",
        "Campaign Integration",
        "Audience Trust Building",
        "Narrative Positioning",
      ],
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17 8a5 5 0 10-10 0v5a5 5 0 0010 0V8zm-5 11v2m-4 0h8M7 13h10" />
        </svg>
      ),
    },
    {
      id: "distribution",
      title: "Distribution & Growth",
      tagline: "Reach listeners where they already spend time.",
      description:
        "We optimize publication, syndication, and delivery so your content reaches broader listening audiences and remains sustainable over time.",
      features: [
        "Platform Distribution",
        "Audience Insights",
        "Campaign Support",
        "Retention Strategy",
      ],
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2v8m0 0l3-3m-3 3l-3-3M4 14a8 8 0 0016 0" />
        </svg>
      ),
    },
  ];

  const pillars = [
    {
      title: "Audience-Centric",
      description:
        "Content shaped around meaningful listener experiences and retention.",
      icon: "🎧",
    },
    {
      title: "Brand Authority",
      description:
        "Positioning that elevates expertise, trust, and thought leadership.",
      icon: "📣",
    },
    {
      title: "Cross-Platform Reach",
      description:
        "Distribution built to connect across social, streaming, and web channels.",
      icon: "🌐",
    },
    {
      title: "Measured Growth",
      description:
        "Strategies informed by engagement, reach, and listener behavior.",
      icon: "📈",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Positioning",
      desc: "We define audience goals, subject matter, brand voice, and your podcast strategy.",
    },
    {
      step: "02",
      title: "Production Planning",
      desc: "We build a format, episode roadmap, and creative direction for sustainable output.",
    },
    {
      step: "03",
      title: "Recording & Editing",
      desc: "We produce polished episodes with strategic pacing, clean audio, and strong storytelling.",
    },
    {
      step: "04",
      title: "Launch & Distribution",
      desc: "We release your content, optimize reach, and support growth with analytics and promotion.",
    },
  ];

  return (
    <div className="podcast-page">
      <main className="podcast-main">
        <section className="podcast-hero">
          <img
            className="podcast-logo"
            src={podcastLogo}
            alt="Kinetix Podcasting"
          />
          <p className="section-kicker">Podcast Network</p>
          <h1 className="podcast-title">
            Audio experiences designed to inform, engage, and grow your
            audience.
          </h1>
          <p className="podcast-intro">
            We create podcast systems that connect story, strategy, and
            distribution so your brand builds trust and stays memorable.
          </p>

          <div className="podcast-actions">
            <Link to="/contact" className="btn btn-primary">
              Book a Podcast Session
            </Link>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
        </section>

        <section className="podcast-problem">
          <div className="problem-panel">
            <div className="problem-block">
              <span className="problem-label">The Challenge</span>
              <h3>Content without traction</h3>
              <p>
                Too many podcasts struggle to break through because they lack
                structure, strategic positioning, and a consistent distribution
                model.
              </p>
            </div>

            <div className="problem-block">
              <span className="problem-label alt">Our Approach</span>
              <h3>Built for listener growth</h3>
              <p>
                We design podcasts around clear audiences, consistent
                publishing, and premium production that turns attention into
                lasting brand value.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="podcast-section">
          <div className="section-header">
            <p className="section-kicker">Services</p>
            <h2>Full-spectrum podcast solutions</h2>
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

        <section id="pillars" className="podcast-section alt-section">
          <div className="section-header">
            <p className="section-kicker">Why Us</p>
            <h2>Built around audience momentum</h2>
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

        <section id="process" className="podcast-section">
          <div className="section-header">
            <p className="section-kicker">Process</p>
            <h2>How we build your show</h2>
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

        <section className="podcast-shows" aria-labelledby="podcast-shows-title">
          <p className="section-kicker">Coming Soon</p>
          <h2 id="podcast-shows-title">Podcast Shows</h2>
          <p>Our shows are in development. Check back soon for updates.</p>
        </section>

        <section id="contact" className="podcast-cta">
          <div className="cta-inner">
            <p className="section-kicker light">Ready to launch?</p>
            <h2>Turn your voice into a platform that people want to hear.</h2>
            <Link to="/contact" className="btn btn-primary">
              Request a Podcast Quote
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
