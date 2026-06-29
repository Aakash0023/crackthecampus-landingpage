import "./PlatformPreview.css";

function PlatformPreview() {
  return (
    <section id="platform" className="platform-section">
      <div className="platform-container">
        <span className="platform-tag">PLATFORM</span>

        <h2 className="platform-title">Everything In One Workspace.</h2>

        <p className="platform-description">
          Manage coding practice, interviews, resume preparation and learning
          progress from a single dashboard.
        </p>

        <div className="workspace">
          <div className="workspace-header">
            <div className="workspace-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <p>CrackTheCampus Workspace</p>
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
            </aside>

            <main className="workspace-main">
              <div className="workspace-top">
                <div>
                  <span>Today's Progress</span>

                  <h3>3 of 5 Tasks Completed</h3>
                </div>

                <button>Continue</button>
              </div>

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
              </div>

              <div className="progress-chart">
                <div style={{ height: "40%" }}></div>
                <div style={{ height: "55%" }}></div>
                <div style={{ height: "70%" }}></div>
                <div style={{ height: "60%" }}></div>
                <div style={{ height: "88%" }}></div>
                <div style={{ height: "100%" }}></div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformPreview;
