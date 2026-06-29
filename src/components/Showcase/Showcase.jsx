import { useState } from "react";
import "./Showcase.css";

function Showcase() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const menu = ["Dashboard", "Resume", "Coding", "Interview", "Analytics"];

  return (
    <section className="showcase" id="showcase">
      <div className="showcase-container">
        <span className="showcase-tag">PRODUCT</span>

        <h2 className="showcase-title">
          One Platform.
          <br />
          Everything You Need.
        </h2>

        <p className="showcase-description">
          CrackTheCampus brings coding practice, resume building, interview
          preparation and analytics together inside one modern workspace.
        </p>

        <div className="workspace-window">
          <div className="workspace-header">
            <div className="workspace-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <h4>CrackTheCampus Workspace</h4>

            <div className="workspace-user">A</div>
          </div>

          <div className="workspace-body">
            <aside className="workspace-sidebar">
              <div className="sidebar-logo">
                <h3>CTC</h3>
                <span>Workspace</span>
              </div>

              <nav className="sidebar-menu">
                {menu.map((item) => (
                  <button
                    key={item}
                    className={activeTab === item ? "active" : ""}
                    onClick={() => setActiveTab(item)}
                  >
                    {item}
                  </button>
                ))}
              </nav>

              <div className="sidebar-footer">
                <span>Today's Goal</span>

                <h2>3 / 5</h2>

                <p>Tasks Completed</p>

                <div className="goal-progress">
                  <div></div>
                </div>
              </div>
            </aside>

            <main className="workspace-content">
              {activeTab === "Dashboard" && (
                <div className="dashboard-screen">
                  <div className="screen-header">
                    <div>
                      <span>Welcome Back</span>

                      <h2>Keep your streak alive.</h2>
                    </div>

                    <button>Continue</button>
                  </div>

                  <div className="stats-grid">
                    <div className="stat-card">
                      <h3>482</h3>

                      <span>Problems Solved</span>
                    </div>

                    <div className="stat-card">
                      <h3>94%</h3>

                      <span>Accuracy</span>
                    </div>

                    <div className="stat-card">
                      <h3>12</h3>

                      <span>Day Streak</span>
                    </div>

                    <div className="stat-card">
                      <h3>18</h3>

                      <span>Mock Interviews</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Resume" && (
                <div className="resume-screen">
                  <div className="screen-header">
                    <div>
                      <span>Resume Review</span>

                      <h2>ATS Score Analysis</h2>
                    </div>

                    <button>Reanalyze</button>
                  </div>

                  <div className="resume-layout">
                    <div className="resume-card">
                      <div className="resume-top">
                        <span>Resume.pdf</span>

                        <strong>94</strong>
                      </div>

                      <div className="resume-item">
                        <p>Skills</p>

                        <div className="progress">
                          <div style={{ width: "92%" }}></div>
                        </div>
                      </div>

                      <div className="resume-item">
                        <p>Projects</p>

                        <div className="progress">
                          <div style={{ width: "84%" }}></div>
                        </div>
                      </div>

                      <div className="resume-item">
                        <p>Experience</p>

                        <div className="progress">
                          <div style={{ width: "76%" }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="insights-card">
                      <h3>Suggestions</h3>

                      <ul>
                        <li>Improve project descriptions</li>

                        <li>Add measurable achievements</li>

                        <li>Increase keyword density</li>

                        <li>Strengthen professional summary</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Coding" && (
                <div className="coding-screen">
                  <div className="screen-header">
                    <div>
                      <span>Today's Challenge</span>

                      <h2>Two Sum</h2>
                    </div>

                    <button>Start</button>
                  </div>

                  <div className="editor-window">
                    <div className="editor-header">
                      <span>solution.py</span>
                    </div>

                    <pre>
                      {`def twoSum(nums, target):
    seen = {}

    for i, num in enumerate(nums):

        diff = target - num

        if diff in seen:
            return [seen[diff], i]

        seen[num] = i`}
                    </pre>
                  </div>
                </div>
              )}

              {activeTab === "Interview" && (
                <div className="interview-screen">
                  <div className="screen-header">
                    <div>
                      <span>Upcoming Session</span>

                      <h2>Technical Interview</h2>
                    </div>

                    <button>Join</button>
                  </div>

                  <div className="meeting-card">
                    <div className="meeting-avatar"></div>

                    <div>
                      <h3>Interviewer Connected</h3>

                      <p>Starts in 12 minutes</p>
                    </div>
                  </div>

                  <div className="meeting-stats">
                    <div>
                      <h3>91%</h3>

                      <span>Readiness</span>
                    </div>

                    <div>
                      <h3>18</h3>

                      <span>Completed</span>
                    </div>

                    <div>
                      <h3>4.9</h3>

                      <span>Rating</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Analytics" && (
                <div className="analytics-screen">
                  <div className="screen-header">
                    <div>
                      <span>Weekly Report</span>

                      <h2>Performance Overview</h2>
                    </div>
                  </div>

                  <div className="analytics-layout">
                    <div className="chart-card">
                      <div className="analytics-chart">
                        <div style={{ height: "35%" }}></div>
                        <div style={{ height: "50%" }}></div>
                        <div style={{ height: "68%" }}></div>
                        <div style={{ height: "60%" }}></div>
                        <div style={{ height: "82%" }}></div>
                        <div style={{ height: "100%" }}></div>
                      </div>
                    </div>

                    <div className="analytics-stats">
                      <div>
                        <h3>482</h3>

                        <span>Problems Solved</span>
                      </div>

                      <div>
                        <h3>94%</h3>

                        <span>Accuracy</span>
                      </div>

                      <div>
                        <h3>12</h3>

                        <span>Day Streak</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
