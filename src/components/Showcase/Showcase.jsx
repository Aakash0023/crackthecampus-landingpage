import "./Showcase.css";

function Showcase() {
  return (
    <section id="showcase" className="showcase">
      <div className="showcase-container">
        <span className="showcase-tag">PRODUCT</span>

        <h2 className="showcase-title">
          One Platform.
          <br />
          Everything You Need.
        </h2>

        <p className="showcase-description">
          CrackTheCampus combines resume building, coding practice, interview
          preparation and analytics into one modern platform.
        </p>

        <div className="showcase-block">
          <div className="showcase-content">
            <span className="showcase-label">AI Resume Review</span>

            <h3>Improve your resume before recruiters see it.</h3>

            <p>
              Get AI-powered feedback, identify weak sections and improve your
              chances with detailed recommendations.
            </p>
          </div>

          <div className="resume-ui">
            <div className="resume-header">
              <span>Resume.pdf</span>

              <strong>94</strong>
            </div>

            <div className="resume-score">
              <p>Skills</p>

              <div className="progress">
                <div style={{ width: "92%" }}></div>
              </div>
            </div>

            <div className="resume-score">
              <p>Projects</p>

              <div className="progress">
                <div style={{ width: "84%" }}></div>
              </div>
            </div>

            <div className="resume-score">
              <p>Experience</p>

              <div className="progress">
                <div style={{ width: "76%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="showcase-block reverse">
          <div className="code-ui">
            <span>Today's Challenge</span>

            <h3>Two Sum</h3>

            <div className="code-meta">
              <strong>Medium</strong>

              <strong>45 min</strong>
            </div>
          </div>

          <div className="showcase-content">
            <span className="showcase-label">Coding Practice</span>

            <h3>Practice company specific questions.</h3>

            <p>
              Solve curated coding questions with structured difficulty and
              track your consistency.
            </p>
          </div>
        </div>

        <div className="showcase-block">
          <div className="showcase-content">
            <span className="showcase-label">Mock Interviews</span>

            <h3>Interview with confidence.</h3>

            <p>
              Prepare with technical and HR interview simulations designed
              around placement rounds.
            </p>
          </div>

          <div className="meeting-ui">
            <div className="meeting-top">
              <div className="avatar"></div>

              <div>
                <h4>Technical Interview</h4>

                <span>Interviewer Connected</span>
              </div>
            </div>

            <button>Join Session</button>
          </div>
        </div>

        <div className="showcase-block reverse">
          <div className="analytics-ui">
            <div className="analytics-top">
              <div>
                <span>Weekly Progress</span>

                <h3>94%</h3>
              </div>

              <strong>+12%</strong>
            </div>

            <div className="analytics-chart">
              <div style={{ height: "35%" }}></div>
              <div style={{ height: "48%" }}></div>
              <div style={{ height: "62%" }}></div>
              <div style={{ height: "80%" }}></div>
              <div style={{ height: "100%" }}></div>
            </div>
          </div>

          <div className="showcase-content">
            <span className="showcase-label">Progress Analytics</span>

            <h3>Understand your preparation.</h3>

            <p>
              Track your strengths, identify weak areas and monitor your
              consistency every week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
