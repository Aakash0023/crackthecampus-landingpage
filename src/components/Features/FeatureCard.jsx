function FeatureCard({ className, title, description, children }) {
  return (
    <div className={`feature-card ${className}`}>
      <div className="feature-preview">{children}</div>

      <div className="feature-content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
