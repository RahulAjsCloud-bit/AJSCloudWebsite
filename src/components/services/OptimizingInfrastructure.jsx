import React from "react";
import "../../css/main.css";

const OptimizingInfrastructure = () => {
  return (
    // <div className="container-fluid p-0">

    //   <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
    //     <h1>Optimizing Infrastructure</h1>
    //   </section>

    //   <section className="vh-100 d-flex align-items-center justify-content-center bg-secondary text-white">
    //     <h1>Performance Tuning</h1>
    //   </section>

    //   <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
    //     <h1>Cost Optimization</h1>
    //   </section>

    //   <section className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
    //     <h1>Reliability & Monitoring</h1>
    //   </section>

    // </div>

    <section id="services-highlight" className="services-highlight">
      <div className="container">
        <h2 className="section-title">
          Optimizing Infrastructure or Current Process
        </h2>

        <div className="row justify-content-center g-4">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-5">
            <div className="service-card">
              {/* Default View */}
              <div className="service-front">
                <img
                  src="/icons/managerial-icon.png"
                  alt="Managerial Services"
                />
                <h3>Managerial Services</h3>
              </div>

              {/* Hover View */}
              <div className="service-overlay">
                <h3>Managerial Services</h3>
                <p>
                  Offering best in class managerial services including security,
                  backup, constant customer support and much more.
                </p>
                <a href="#" className="btn btn-light btn-sm">
                  View Services
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-5">
            <div className="service-card">
              {/* Default View */}
              <div className="service-front">
                <img
                  src="/icons/professional-icon.png"
                  alt="Professional Services"
                />
                <h3>Professional Services</h3>
              </div>

              {/* Hover View */}
              <div className="service-overlay">
                <h3>Professional Services</h3>
                <p>
                  Delivering expert professional services to optimize performance,
                  scalability, and business efficiency.
                </p>
                <a href="#" className="btn btn-light btn-sm">
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizingInfrastructure;
