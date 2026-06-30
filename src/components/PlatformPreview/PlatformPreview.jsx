import "./PlatformPreview.css";

function PlatformPreview() {
  return (
    <section id="platform" className="platform-section">
      <div className="platform-container">
        <span className="platform-tag">PLATFORM</span>

        <h2 className="platform-title">Everything In One Workspace.</h2>

        <p className="platform-description">
          Manage coding practice, interviews, resume preparation and learning
          progress from a single intelligent dashboard.
        </p>

        <div className="workspace">
          <div className="workspace-header">
            <div className="workspace-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>CrackTheCampus Workspace</p>

            <div className="workspace-profile">A</div>
          </div>

          <div className="workspace-body">
            <aside className="workspace-sidebar">
              <h4>Workspace</h4>

              <ul>
                <li className="active">Dashboard</li>

                <li>DSA Practice</li>

                <li>Resume</li>

                <li>Mock Interviews</li>

                <li>Resources</li>
              </ul>

              <div className="sidebar-progress">
                <span>Today's Goal</span>

                <h3>3 / 5</h3>

                <p>Tasks Completed</p>

                <div className="progress-bar">
                  <div></div>
                </div>
              </div>
            </aside>

            <main className="workspace-main">
              <div className="workspace-top">
                <div>
                  <span>Today's Progress</span>

                  <h3>Keep Your Streak Alive.</h3>
                </div>

                <button>Continue</button>
              </div>
              <div className="workspace-overview">
                <div className="task-list">
                  <div className="task-item done">
                    <span></span>
                    Solve Arrays
                  </div>

                  <div className="task-item done">
                    <span></span>
                    Binary Search
                  </div>

                  <div className="task-item">
                    <span></span>
                    Dynamic Programming
                  </div>

                  <div className="task-item">
                    <span></span>
                    Graph Algorithms
                  </div>
                </div>

                <div className="quick-stats">
                  <div className="quick-card">
                    <h3>482</h3>

                    <span>Problems Solved</span>
                  </div>

                  <div className="quick-card">
                    <h3>94%</h3>

                    <span>Accuracy</span>
                  </div>

                  <div className="quick-card">
                    <h3>12</h3>

                    <span>Day Streak</span>
                  </div>

                  <div className="quick-card">
                    <h3>18</h3>

                    <span>Mock Interviews</span>
                  </div>
                </div>
              </div>{" "}
              <div className="workspace-bottom">
                <div className="chart-section">
                  <div className="chart-header">
                    <h4>Weekly Progress</h4>

                    <span>+18% This Week</span>
                  </div>

                  <div className="progress-chart">
                    <div style={{ height: "40%" }}></div>
                    <div style={{ height: "55%" }}></div>
                    <div style={{ height: "72%" }}></div>
                    <div style={{ height: "65%" }}></div>
                    <div style={{ height: "88%" }}></div>
                    <div style={{ height: "100%" }}></div>
                  </div>

                  <div className="chart-days">
                    <span>Mon</span>

                    <span>Tue</span>

                    <span>Wed</span>

                    <span>Thu</span>

                    <span>Fri</span>

                    <span>Sat</span>
                  </div>
                </div>

                <div className="activity-card">
                  <h4>Weekly Summary</h4>

                  <div className="summary-item">
                    <strong>24</strong>

                    <span>Problems Solved</span>
                  </div>

                  <div className="summary-item">
                    <strong>5</strong>

                    <span>Mock Interviews</span>
                  </div>

                  <div className="summary-item">
                    <strong>8 hrs</strong>

                    <span>Study Time</span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformPreview;
