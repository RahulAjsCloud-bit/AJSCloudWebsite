import React from "react";
import "../../css/main.css";

const Healthcare = () => {
  return (
    <div className="container-fluid p-0">

      <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center w-75">
          <h1>Digital Healthcare</h1>
          <p>
            Technology-driven healthcare solutions for hospitals,
            clinics, and healthcare providers.
          </p>
        </div>
      </section>

      <section className="vh-100 d-flex align-items-center justify-content-center bg-secondary text-white">
        <div className="text-center w-75">
          <h1>Electronic Health Records</h1>
          <p>
            Secure EHR systems enabling efficient patient data
            management and access.
          </p>
        </div>
      </section>

      <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center w-75">
          <h1>Telemedicine</h1>
          <p>
            Remote healthcare platforms improving patient reach
            and care delivery.
          </p>
        </div>
      </section>

      <section className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
        <div className="text-center w-75">
          <h1>Compliance & Security</h1>
          <p>
            HIPAA-compliant systems with enterprise-grade data protection.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Healthcare;
