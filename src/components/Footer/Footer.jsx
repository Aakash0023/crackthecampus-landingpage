import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { HiArrowUpRight } from "react-icons/hi2";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img
              src="/logo.webp"
              alt="CrackTheCampus"
              className="footer-logo"
            />

            <p>
              Preparing students for placements through AI-powered resume
              reviews, coding practice, mock interviews and analytics.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <h4>Navigation</h4>

              <a href="#hero">Home</a>

              <a href="#showcase">Showcase</a>

              <a href="#testimonials">Testimonials</a>

              <a href="#cta">Get Started</a>
            </div>

            <div>
              <h4>Connect</h4>

              <a
                href="https://www.instagram.com/crackthecampus_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/crackthecampus"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>

              <a href="mailto:info@crackthecampus.com">
                <FaEnvelope size={18} />
                Contact
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <span>© 2026 CrackTheCampus. All rights reserved.</span>

          <a href="#hero">
            Back to Top
            <HiArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
