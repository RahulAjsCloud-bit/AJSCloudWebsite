import React from "react";
import "../css/whyAjscloud.css";

const services = [
  {
    number: "30,000+",
    title: "Hours of AI & ML Research",
    text: "Dedicated research invested in Artificial Intelligence and Machine Learning.",
  },
  {
    number: "5M+",
    title: "Development Hours",
    text: "Enhanced software engineering experience across enterprise-scale projects.",
  },
  {
    number: "99.99%",
    title: "Support Reliability",
    text: "Proven help desk response reliability for mission-critical operations.",
  },
  {
    number: "6+",
    title: "Industries Served",
    text: "Trusted by organizations across healthcare, finance, manufacturing, retail, government and enterprise.",
  },
];

const WhyAjsCloud = () => {
  return (
    <section id="whyajscloud" className="whyajscloud-section">
      <div className="container-fluid">
        <div className="whyajscloud-header">
          <div className="section-badge">WHY AJS CLOUD</div>

          <h2>
            Technology You Can Trust.
            <br />
            Results You Can Measure.
          </h2>

          <p className="tagline">
            Businesses today face a clear choice: adapt to an AI-driven world or
            risk falling behind. At <strong>AJS Cloud</strong>, we make that
            transition practical, secure and measurable.
          </p>

          <p className="tagline">
            Whether you're a startup preparing to scale or an enterprise
            modernizing complex operations, we combine technical expertise,
            intelligent automation and long-term partnership to help your
            business move forward.
          </p>
        </div>

        <div className="whyajscloud-content">
          <div className="row g-4 justify-content-center">
            {services.map((service, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="service-card">
                  <div className="stat-number">
                    {service.number}
                  </div>

                  {/* <h4>{service.title}</h4> */}

                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAjsCloud;