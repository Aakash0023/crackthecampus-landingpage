import { useEffect, useState } from "react";
import "./PlatformPreview.css";

const tabs = [
  {
    id: "dashboard",
    title: "Dashboard",
    image: "/dashboard.jpg",
    badge: "Live Progress",
    heading: "Track your complete placement journey.",
    description:
      "Monitor coding progress, resume score, interview readiness and weekly performance from one place.",
    stat1: "482",
    label1: "Problems Solved",
    stat2: "94%",
    label2: "Accuracy",
  },
  {
    id: "resume",
    title: "Resume",
    image: "/resume.jpg",
    badge: "AI Resume Review",
    heading: "Improve your ATS score instantly.",
    description:
      "Get AI-powered suggestions to improve projects, skills and overall resume quality.",
    stat1: "94",
    label1: "ATS Score",
    stat2: "18",
    label2: "Suggestions",
  },
  {
    id: "analytics",
    title: "Analytics",
    image: "/analytics.jpg",
    badge: "Performance",
    heading: "Visualize your weekly growth.",
    description:
      "Track accuracy, solved problems and interview performance through interactive analytics.",
    stat1: "12",
    label1: "Day Streak",
    stat2: "+18%",
    label2: "Growth",
  },
];

function PlatformPreview() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const current = tabs[activeTab];

  return (
    <section className="platform-preview" id="platform">
      <div className="platform-container">
        <span className="platform-tag">PLATFORM</span>

        <h2 className="platform-title">Explore the Platform.</h2>

        <p className="platform-description">
          Everything you need to prepare for placements, beautifully organized
          inside one modern workspace.
        </p>

        <div className="preview-tabs">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={activeTab === index ? "active" : ""}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="browser-window">
          <div className="browser-top">
            <div className="browser-controls">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="browser-address">crackthecampus.app</div>
          </div>

          <div className="browser-body">
            <div className="browser-image">
              <img src={current.image} alt={current.title} />
            </div>

            <div className="browser-info">
              <span className="preview-badge">{current.badge}</span>

              <h3>{current.heading}</h3>

              <p>{current.description}</p>

              <div className="preview-stats">
                <div className="preview-stat">
                  <h4>{current.stat1}</h4>

                  <span>{current.label1}</span>
                </div>

                <div className="preview-stat">
                  <h4>{current.stat2}</h4>

                  <span>{current.label2}</span>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default PlatformPreview;
