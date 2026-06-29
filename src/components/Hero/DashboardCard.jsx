import "./DashboardCard.css";

function DashboardCard() {
  return (
    <div className="dashboard-window">
      <div className="window-header">
        <div className="window-controls">
          <span className="control red"></span>
          <span className="control yellow"></span>
          <span className="control green"></span>
        </div>

        <p>CrackTheCampus Dashboard</p>
      </div>

      <div className="window-body">
        <div className="dashboard-top">
          <div>
            <span className="section-label">Placement Readiness</span>

            <h2>92%</h2>
          </div>

          <button className="status-chip">Ready</button>
        </div>

        <div className="progress-wrapper">
          <div className="progress-bar">
            <div className="progress-value"></div>
          </div>
        </div>

        <div className="dashboard-section">
          <h4>Today's Goals</h4>

          <div className="task completed">
            <span></span>

            <p>Solve 3 DSA Problems</p>

            <strong>Done</strong>
          </div>

          <div className="task completed">
            <span></span>

            <p>Aptitude Practice</p>

            <strong>Done</strong>
          </div>

          <div className="task">
            <span></span>

            <p>Mock Interview</p>

            <strong>Pending</strong>
          </div>
        </div>

        <div className="dashboard-section">
          <h4>Recent Activity</h4>

          <div className="activity-row">
            <span>Arrays Practice</span>

            <span>Completed</span>
          </div>

          <div className="activity-row">
            <span>Resume Review</span>

            <span>In Progress</span>
          </div>

          <div className="activity-row">
            <span>SQL Assessment</span>

            <span>Scheduled</span>
          </div>
        </div>

        <div className="analytics-grid">
          <div className="analytics-card">
            <h3>482</h3>

            <p>Problems Solved</p>
          </div>

          <div className="analytics-card">
            <h3>94%</h3>

            <p>Accuracy</p>
          </div>

          <div className="analytics-card">
            <h3>218</h3>

            <p>Weekly Rank</p>
          </div>

          <div className="analytics-card">
            <h3>91%</h3>

            <p>Interview Score</p>
          </div>
        </div>

        <div className="graph-section">
          <div className="graph-header">
            <h4>Weekly Progress</h4>

            <span>Last 7 Days</span>
          </div>

          <div className="graph">
            <div style={{ height: "32%" }}></div>

            <div style={{ height: "45%" }}></div>

            <div style={{ height: "58%" }}></div>

            <div style={{ height: "72%" }}></div>

            <div style={{ height: "88%" }}></div>

            <div style={{ height: "70%" }}></div>

            <div style={{ height: "96%" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
