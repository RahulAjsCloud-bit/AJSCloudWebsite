import React from "react";
import "../css/AIPioneersSection.css";

const AIPioneersSection = () => {
  return (
    <section className="ai-section">
      <div className="ai-container">
        <div className="ai-content">
          <span className="ai-subtitle">
            Pioneers in AI & Machine Learning
          </span>

          <h2 className="ai-title">
            We Were Early.
            <br />
            <span>We Were Right.</span>
          </h2>

          <p className="ai-description">
            Our journey with Large Language Models (LLMs) has been equally
            rigorous. We've evaluated, stress-tested, and retired multiple
            models before engineering proprietary solutions tailored to real
            enterprise demands.
          </p>

          <p className="ai-description">
            Settling for "good enough" has never been part of our culture.
            When you work with AJS Cloud, you're not getting yesterday's AI —
            you're getting tomorrow's, today.
          </p>

          {/* <button className="ai-btn">
            Explore AI Solutions
          </button> */}
        </div>

        <div className="ai-visual">
          <div className="glow-circle"></div>

          <div className="stats-card">
            <div className="stats-grid">
              <div className="stat-box">
                <h3>50+</h3>
                <p>AI Models Tested</p>
              </div>

              <div className="stat-box">
                <h3>100%</h3>
                <p>Enterprise Focused</p>
              </div>

              <div className="stat-box">
                <h3>24/7</h3>
                <p>AI Operations</p>
              </div>

              <div className="stat-box">
                <h3>Next Gen</h3>
                <p>LLM Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPioneersSection;