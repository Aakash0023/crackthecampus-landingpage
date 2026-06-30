import "./Companies.css";

const row1 = [
  "google",
  "microsoft",
  "amazon",
  "apple",
  "meta",
  "oracle",
  "sap",
  "adobe",
  "intel",
  "cisco",
];

const row2 = [
  "dell",
  "hp",
  "samsung",
  "paypal",
  "vmware",
  "tcs",
  "infosys",
  "wipro",
  "accenture",
];

function Companies() {
  return (
    <section className="companies" id="companies">
      <div className="companies-container">
        <span className="companies-tag">TRUSTED BY LEADING COMPANIES</span>

        <h2 className="companies-title">
          Preparing students to crack interviews at the world's leading
          companies.
        </h2>

        <p className="companies-description">
          Learn the skills that top recruiters expect and prepare with
          AI-powered guidance designed for modern placements.
        </p>

        <div className="marquee">
          <div className="marquee-track left">
            {[...row1, ...row1].map((company, index) => (
              <div className="company-card" key={index}>
                <img
                  src={`/logos/${company}.svg`}
                  alt={company}
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="marquee">
          <div className="marquee-track right">
            {[...row2, ...row2].map((company, index) => (
              <div className="company-card" key={index}>
                <img
                  src={`/logos/${company}.svg`}
                  alt={company}
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Companies;
