import React from "react";
import "../../css/main.css";

const GovernmentAgencies = () => {
  return (
    <div className="container-fluid p-0">

      <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center w-75">
          <h1>Digital Governance</h1>
          <p>
            Secure, transparent, and scalable digital solutions for
            government operations and citizen services.
          </p>
        </div>
      </section>

      <section className="vh-100 d-flex align-items-center justify-content-center bg-secondary text-white">
        <div className="text-center w-75">
          <h1>e-Government Platforms</h1>
          <p>
            Online portals, automation, and workflow systems to improve
            public service delivery.
          </p>
        </div>
      </section>

      <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center w-75">
          <h1>Data & Analytics</h1>
          <p>
            Actionable insights through analytics, dashboards, and
            decision-support systems.
          </p>
        </div>
      </section>

      <section className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
        <div className="text-center w-75">
          <h1>Security & Compliance</h1>
          <p>
            Data privacy, cybersecurity, and compliance with national
            and international standards.
          </p>
        </div>
      </section>

    </div>
  );
};

export default GovernmentAgencies;
