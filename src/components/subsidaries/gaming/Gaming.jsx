import { Link } from "react-router-dom";
import gamingLogo from "../../../assets/Kinetix Gaming Logo.png";
import "./Gaming.css";

/*
export default function Gaming() {
  const services = [
    {
      id: "strategy",
      title: "Gaming Strategy & Positioning",
      tagline: "Build a competitive identity with traction.",
      description:
        "We design gaming experiences, brand narratives, and digital ecosystems that help your audience connect with your platform and keep coming back.",
      features: [
        "Brand Positioning",
        "Audience Targeting",
        "Campaign Strategy",
        "Product Framing",
      ],
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 8h10a4 4 0 014 4v2a4 4 0 01-4 4H7a4 4 0 01-4-4v-2a4 4 0 014-4zm0 0V6m10 2V6m-8 8h2m-1-1v2M6 2h2m8 0h2" />
        </svg>
      ),
    },
    {
      id: "community",
      title: "Community Platforms",
      tagline: "Create a gaming ecosystem that feels alive.",
      description:
        "We build interactive digital spaces with better engagement, sharper onboarding, and stronger retention across tournaments, communities, and player experiences.",
      features: [
        "Community UX",
        "Member Journey",
        "Retention Design",
        "Engagement Systems",
      ],
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M9 7a4 4 0 108 0 4 4 0 00-8 0zm10 14v-2a4 4 0 00-3-3.87M15 3.13a4 4 0 010 7.75" />
        </svg>
      ),
    },
    {
      id: "analytics",
      title: "Analytics & Growth Systems",
      tagline: "Make data work for player engagement.",
      description:
        "We use behavioral insight to fine-tune performance, retention, and conversion so each touchpoint strengthens your gaming audience and monetization strategy.",
      features: [
        "User Insights",
        "Retention Tracking",
        "Performance Audits",
        "Player Journey Mapping",
      ],
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 19V9m7 10V5m7 14v-8" />
        </svg>
      ),
    },
    {
      id: "launch",
      title: "Launch & Campaign Support",
      tagline: "Take your launch from hype to sustained momentum.",
      description:
        "From product reveal to community activation, we create launch systems that boost visibility, engagement, and long-term player loyalty.",
      features: [
        "Launch Planning",
        "Teaser Campaigns",
        "Content Rollout",
        "Player Activation",
      ],
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 3l7 7-7 7M3 14l7 7 7-7M3 10l7-7 7 7" />
        </svg>
      ),
    },
  ];

  const pillars = [
    {
      title: "Player-First UX",
      description:
        "Digital experiences built around clarity, momentum, and engagement.",
      icon: "🎮",
    },
    {
      title: "Community Growth",
      description:
        "Structures that deepen loyalty, participation, and retention.",
      icon: "👥",
    },
    {
      title: "Data-Driven Strategy",
      description:
        "Insights that sharpen performance and improve decision-making.",
      icon: "📊",
    },
    {
      title: "Competitive Edge",
      description:
        "Positioning and systems designed to stand out in crowded markets.",
      icon: "🏆",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Vision",
      desc: "We clarify audience, positioning, and the goals behind the gaming experience.",
    },
    {
      step: "02",
      title: "Experience Design",
      desc: "We map player journeys, communities, and the mechanics that support engagement.",
    },
    {
      step: "03",
      title: "Build & Optimize",
      desc: "We create, test, and optimize the experience for performance and retention.",
    },
    {
      step: "04",
      title: "Launch & Grow",
      desc: "We roll out the experience and refine the journey as adoption accelerates.",
    },
  ];

  return (
    <div className="gaming-page">
      <main className="gaming-main">
        <section className="gaming-hero">
          <img
            className="gaming-logo"
            src={gamingLogo}
            alt="Kinetix Gaming Magazine"
          />
          <p className="section-kicker">Kinetix Gaming</p>
          <h1 className="gaming-title">
            Competitive digital experiences built for communities that want
            momentum.
          </h1>
          <p className="gaming-intro">
            We design gaming ecosystems and digital growth systems that help
            brands, platforms, and communities connect with players in
            meaningful ways.
          </p>

          <div className="gaming-actions">
            <Link to="/contact" className="btn btn-primary">
              Start a Project
            </Link>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
        </section>

        <section className="gaming-problem">
          <div className="problem-panel">
            <div className="problem-block">
              <span className="problem-label">The Challenge</span>
              <h3>Disengaged audiences</h3>
              <p>
                Many gaming brands struggle with weak retention, unclear
                positioning, and digital experiences that fail to create
                long-term community momentum.
              </p>
            </div>

            <div className="problem-block">
              <span className="problem-label alt">Our Solution</span>
              <h3>Built around the player journey</h3>
              <p>
                We turn gameplay, branding, and community strategy into a
                cohesive digital system that keeps players engaged and invested.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="gaming-section">
          <div className="section-header">
            <p className="section-kicker">Services</p>
            <h2>Gaming solutions for growth and engagement</h2>
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

        <section id="pillars" className="gaming-section alt-section">
          <div className="section-header">
            <p className="section-kicker">Why Us</p>
            <h2>Built for competitive relevance</h2>
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

        <section id="process" className="gaming-section">
          <div className="section-header">
            <p className="section-kicker">Process</p>
            <h2>How we build the gaming experience</h2>
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

        <section id="contact" className="gaming-cta">
          <div className="cta-inner">
            <p className="section-kicker light">Ready to launch?</p>
            <h2>
              Build a gaming presence that players remember and return to.
            </h2>
            <Link to="/contact" className="btn btn-primary">
              Request a Quote
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
*/

export default function Gaming() {
  return (
    <main className="gaming-page gaming-coming-soon">
      <div className="gaming-coming-soon-content">
        <img
          className="gaming-logo"
          src={gamingLogo}
          alt="Kinetix Gaming Magazine"
        />
        <h1>Kinetix Gaming Magazine coming soon</h1>
        <Link to="/" className="btn btn-secondary gaming-home-link">
          Back to Home Page
        </Link>
      </div>
    </main>
  );
}
