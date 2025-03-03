import React from "react";
import "../styles/Section.css";

const Section = ({ title, icon, children }) => {
  return (
    <div className="section">
      <div className="section-title">
        {icon && <span className="section-icon">{icon}</span>}
        <h2>{title}</h2>
      </div>
      <div className="section-container">{children}</div>
    </div>
  );
};

export default Section;
