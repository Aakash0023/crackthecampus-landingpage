import { ArrowRight } from "lucide-react";
import DashboardCard from "./DashboardCard";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero">
      <div className="hero-gradient"></div>

      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-badge">AI Powered Placement Platform</span>

          <h1 className="hero-title">
            Prepare Smarter.
            <br />
            Interview Better.
            <br />
            Get Hired.
          </h1>

          <p className="hero-description">
            Learn DSA, aptitude, mock interviews and resume building through one
            modern platform designed to help students prepare with confidence
            and land their dream job.
          </p>

          <div className="hero-actions">
            <button className="hero-primary-btn">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="hero-secondary-btn">Explore Courses</button>
          </div>

          <div className="hero-metrics">
            <div>
              <h3>15,000+</h3>
              <span>Students</span>
            </div>

            <div>
              <h3>320+</h3>
              <span>Hiring Companies</span>
            </div>

            <div>
              <h3>4.9★</h3>
              <span>Student Rating</span>
            </div>
          </div>
        </div>

        <div className="hero-dashboard">
          <DashboardCard />
        </div>
      </div>
    </section>
  );
}

export default Hero;
