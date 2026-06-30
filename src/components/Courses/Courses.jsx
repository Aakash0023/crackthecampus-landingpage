import {
  Code2,
  Brain,
  FileText,
  Mic,
  Network,
  Map,
  ArrowRight,
} from "lucide-react";

import "./Courses.css";

const courses = [
  {
    title: "DSA Mastery",
    level: "Beginner → Advanced",
    lessons: "120+ Problems",
    description:
      "Master data structures and algorithms through company-focused practice.",
    icon: Code2,
  },
  {
    title: "Aptitude",
    level: "Placement Ready",
    lessons: "250+ Questions",
    description:
      "Quantitative aptitude, logical reasoning and verbal preparation.",
    icon: Brain,
  },
  {
    title: "Resume Builder",
    level: "AI Powered",
    lessons: "ATS Analysis",
    description:
      "Build professional resumes with AI suggestions and ATS optimization.",
    icon: FileText,
  },
  {
    title: "Mock Interviews",
    level: "Technical + HR",
    lessons: "50+ Sessions",
    description:
      "Practice interviews with instant AI feedback and detailed reports.",
    icon: Mic,
  },
  {
    title: "System Design",
    level: "Intermediate",
    lessons: "30 Lessons",
    description:
      "Learn scalable architecture for top product company interviews.",
    icon: Network,
  },
  {
    title: "Placement Roadmap",
    level: "Complete Guide",
    lessons: "12 Week Plan",
    description:
      "A structured roadmap covering coding, aptitude and interviews.",
    icon: Map,
  },
];

function Courses() {
  return (
    <section className="courses" id="courses">
      <div className="courses-container">
        <span className="courses-tag">COURSES</span>

        <h2 className="courses-title">
          Learn Everything You Need To Crack Placements.
        </h2>

        <p className="courses-subtitle">
          Structured learning paths designed to help students become placement
          ready.
        </p>

        <div className="courses-grid">
          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div className="course-card" key={index}>
                <div className="course-icon">
                  <Icon size={30} strokeWidth={2} />
                </div>

                <span className="course-level">{course.level}</span>

                <h3>{course.title}</h3>

                <p className="course-lessons">{course.lessons}</p>

                <p className="course-description">{course.description}</p>

                <button className="course-btn">
                  Explore
                  <ArrowRight size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Courses;
