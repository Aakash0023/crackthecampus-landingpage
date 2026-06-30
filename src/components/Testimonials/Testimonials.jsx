import "./Testimonials.css";

const testimonials = [
  {
    name: "Rahul Sharma",
    initials: "RS",
    role: "SDE Intern",
    company: "Microsoft",
    review:
      "The AI resume review helped me improve my resume before applying. I landed interviews with multiple product companies.",
  },
  {
    name: "Priya Nair",
    initials: "PN",
    role: "Software Engineer",
    company: "Amazon",
    review:
      "The coding roadmap kept me consistent every day. Mock interviews boosted my confidence before placement season.",
  },
  {
    name: "Arjun Patel",
    initials: "AP",
    role: "Data Analyst",
    company: "Deloitte",
    review:
      "Everything was available in one place. Resume review, coding practice and analytics made preparation much easier.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="section-tag">TESTIMONIALS</span>

        <h2 className="section-title">
          Loved by Students.
          <br />
          Trusted for Placements.
        </h2>

        <p className="section-description">
          Thousands of students use CrackTheCampus to prepare smarter, stay
          consistent and crack placement interviews.
        </p>

        <div className="testimonial-stats">
          <div className="stat-box">
            <h3>15K+</h3>
            <span>Students</span>
          </div>

          <div className="stat-box">
            <h3>94%</h3>
            <span>Success Rate</span>
          </div>

          <div className="stat-box">
            <h3>320+</h3>
            <span>Hiring Companies</span>
          </div>

          <div className="stat-box">
            <h3>4.9</h3>
            <span>Student Rating</span>
          </div>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.name}>
              <div className="stars">★★★★★</div>

              <p className="review">"{item.review}"</p>

              <div className="divider"></div>

              <div className="testimonial-user">
                <div className="avatar-circle">{item.initials}</div>

                <div>
                  <h4>{item.name}</h4>

                  <span>
                    {item.role} • {item.company}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
