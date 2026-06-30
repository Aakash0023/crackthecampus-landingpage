import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  stagger,
} from "../../animations/variants";
import DashboardCard from "./DashboardCard";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-gradient"></div>

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span className="hero-badge" variants={fadeUp}>
            AI Powered Placement Platform
          </motion.span>

          <motion.h1 className="hero-title" variants={fadeUp}>
            Prepare Smarter.
            <br />
            Interview Better.
            <br />
            Get Hired.
          </motion.h1>

          <motion.p className="hero-description" variants={fadeUp}>
            Learn DSA, aptitude, mock interviews and resume building through one
            modern platform designed to help students prepare with confidence
            and land their dream job.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <button
              className="hero-primary-btn"
              onClick={() =>
                window.open(
                  "https://crackthecampus.com/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Get Started
              <ArrowRight size={18} />
            </button>
            <button
              className="hero-secondary-btn"
              onClick={() => {
                document.getElementById("courses")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Explore Courses
            </button>
          </motion.div>

          <motion.div className="hero-metrics" variants={fadeUp}>
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
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-dashboard"
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <DashboardCard />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
