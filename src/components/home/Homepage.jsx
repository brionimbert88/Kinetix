import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Homepage.css";
import Footer from "../footer/Footer";
import Contact from "../contact/Contact";
import About from "../about/About";
import Logo from "../../assets/logo.png"; // Import the logo image

export default function Homepage() {
  const [currentPage, setCurrentPage] = useState("home");
  const navigate = useNavigate();

  return (
    <div className="homepage-shell">
      <main className="homepage-main">
        
          <div className="homepage-home">
            <section className="hero-section">
              <img
                src={Logo}
                alt="Kinetix Digital Group Logo"
                className="hero-logo"
              />
              {/* <div className="hero-badge">Operational Framework v1.0</div> */}
              <h1 className="hero-title">
                Bridging Next-Gen Technology and Innovation
              </h1>
              <p className="hero-description">
                An interconnected multimedia ecosystem driving forward digital
                architecture, design, and engaging media experiences.
              </p>

              <div className="hero-actions">
                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="btn btn-primary"
                >
                  Work With Us
                </button>
                <button
                  type="button"
                  onClick={() => navigate("/about")}
                  className="btn btn-secondary"
                >
                  About Us
                </button>
              </div>
            </section>

            <section className="subsidiaries-section">
              <div className="section-heading">
                <h2>Core Subsidiaries</h2>
                <p>Specialized Operational Networks</p>
              </div>

              <div className="subsidiary-grid">
                <article className="subsidiary-card card-web">
                  <div>
                    <div className="subsidiary-icon">&lt;/&gt;</div>
                    <h3>Kinetix Web Design & Development</h3>
                    <p>
                      Engineering high-performance web applications, secure
                      cloud architecture, and sleek, custom modern user
                      experiences.
                    </p>
                  </div>
                  <Link to="/webdesign" className="subsidiary-link">
                    Visit Network <span aria-hidden="true">→</span>
                  </Link>
                </article>

                <article className="subsidiary-card card-podcast">
                  <div>
                    <div className="subsidiary-icon">🎙️</div>
                    <h3>Kinetix Podcasting Network</h3>
                    <p>
                      Publishing next-generation audio networks, custom media
                      infrastructure, and high-impact digital talk programming.
                    </p>
                  </div>
                  <Link to="/podcast" className="subsidiary-link">
                    Listen Now <span aria-hidden="true">→</span>
                  </Link>
                </article>

                <article className="subsidiary-card card-gaming">
                  <div>
                    <div className="subsidiary-icon">🎮</div>
                    <h3>Kinetix Gaming Magazine</h3>
                    <p>
                      Developing real-time data analytical solutions, custom
                      community hubs, and optimized strategies for competitive
                      web platforms.
                    </p>
                  </div>
                  <Link to="/gaming" className="subsidiary-link">
                    Enter Arena <span aria-hidden="true">→</span>
                  </Link>
                </article>
              </div>
            </section>
          </div>
        
      </main>

      <Footer />
    </div>
  );
}
