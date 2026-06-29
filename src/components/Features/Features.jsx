import FeatureCard from "./FeatureCard";
import "./Features.css";

function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <span className="section-tag">FEATURES</span>

        <h2 className="section-title">
          Built Around
          <br />
          Your Preparation.
        </h2>

        <p className="section-description">
          A modern learning platform built to help students prepare, practice
          and perform better in placement interviews.
        </p>

        <div className="features-grid">
          <FeatureCard
            className="large"
            title="AI Resume Review"
            description="Improve your resume with detailed feedback and practical suggestions."
          >
            <div className="resume-preview">
              <div className="resume-header"></div>

              <div className="resume-line long"></div>

              <div className="resume-line"></div>

              <div className="resume-line short"></div>

              <div className="resume-score">94</div>
            </div>
          </FeatureCard>

          <FeatureCard
            className="small"
            title="Coding Practice"
            description="Practice coding problems curated for placements."
          >
            <div className="code-preview">
              <span>Two Sum</span>

              <strong>Medium</strong>
            </div>
          </FeatureCard>

          <FeatureCard
            className="small"
            title="Progress Analytics"
            description="Track your preparation every week."
          >
            <div className="chart-preview">
              <div style={{ height: "35%" }}></div>
              <div style={{ height: "55%" }}></div>
              <div style={{ height: "75%" }}></div>
              <div style={{ height: "60%" }}></div>
              <div style={{ height: "90%" }}></div>
            </div>
          </FeatureCard>

          <FeatureCard
            className="medium"
            title="Mock Interviews"
            description="Prepare with structured interview sessions."
          >
            <div className="interview-preview">
              <div className="avatar"></div>

              <div>
                <h5>Technical Round</h5>

                <span>Tuesday • 10:30 AM</span>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
            className="medium"
            title="Personalized Roadmap"
            description="Follow a structured learning path."
          >
            <div className="roadmap-preview">
              <span>✓ Arrays</span>

              <span>✓ Strings</span>

              <span>○ Trees</span>

              <span>○ Graphs</span>
            </div>
          </FeatureCard>

          <FeatureCard
            className="wide"
            title="Placement Resources"
            description="Interview experiences, aptitude sheets, resume templates and preparation guides."
          >
            <div className="resources-preview">
              <span>DSA</span>

              <span>SQL</span>

              <span>OS</span>

              <span>DBMS</span>

              <span>CN</span>

              <span>HR</span>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

export default Features;
