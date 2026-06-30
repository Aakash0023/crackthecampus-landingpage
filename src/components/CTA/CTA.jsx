import { ArrowRight, Play } from "lucide-react";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta" id="cta">
      <div className="cta-container">
        <div className="cta-glow"></div>

        <span className="cta-tag">START YOUR JOURNEY</span>

        <h2 className="cta-title">
          Ready to Crack
          <br />
          Your Dream Placement?
        </h2>

        <p className="cta-description">
          Join thousands of students preparing smarter with AI-powered resume
          reviews, coding practice, mock interviews and detailed analytics.
        </p>

        <div className="cta-buttons">
          <button
            className="primary-btn"
            onClick={() =>
              window.open(
                "https://crackthecampus.com/",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Get Started
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              window.open(
                "https://www.youtube.com/watch?v=v409dnE62IU",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Watch Demo
          </button>
        </div>

        <div className="cta-stats">
          <div>
            <h3>15K+</h3>

            <span>Students</span>
          </div>

          <div>
            <h3>320+</h3>

            <span>Companies</span>
          </div>

          <div>
            <h3>94%</h3>

            <span>Placement Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
