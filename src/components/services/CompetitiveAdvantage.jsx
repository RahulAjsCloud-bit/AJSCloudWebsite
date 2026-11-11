import React from "react";
import "../../css/main.css";

const CompetitiveAdvantage = () => {
  return (
    // <div className="container-fluid p-0">

    //   <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
    //     <h1>Competitive Advantage</h1>
    //   </section>

    //   <section className="vh-100 d-flex align-items-center justify-content-center bg-secondary text-white">
    //     <h1>Market Differentiation</h1>
    //   </section>

    //   <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
    //     <h1>Innovation Strategy</h1>
    //   </section>

    //   <section className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
    //     <h1>Growth Enablement</h1>
    //   </section>

    // </div>

    <section className="competitive-section">
      <div className="container">
        <h2 className="section-heading">
          <center>Competitive Advantage</center>
          <center><h3>Why AJS Cloud Clients Don't Look Elsewhere  </h3></center>
        </h2>

        <div className="row gx-5 align-items-center mt-5">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="row g-4">
              <div className="col-md-6">
                <div className="adv-card">
                  <img
                    src="/images/progression.png"
                    alt="Business Progression"
                    className="adv-icon"
                  />
                  <h5>Continuous Business Growth</h5>
                  <p>
                    Growth doesn't pause for challenges and neither do we. 
                    Our quality assurance and project management teams ensure business continuity at every stage of your digital transformation.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="adv-card">
                  <img
                    src="/images/intelligence.png"
                    alt="Business Intelligence"
                  />
                  <h5>Business Intelligence & Data Insights</h5>
                  <p>
                   Make decisions with confidence. We deliver actionable data analytics and 
                   technology suite integrations that turn raw information into strategic advantage. s.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="adv-card">
                  <img
                    src="/images/scalability.png"
                    alt="Scalability"
                  />
                  <h5>Infinite Scalability</h5>
                  <p>
                    Whether you're scaling up 5x or streamlining operations, our cloud infrastructure flexes with you no disruption, no downtime, no data anxiety. 
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="adv-card">
                  <img
                    src="/images/cost.png"
                    alt="Reduced IT Costs"
                  />
                  <h5>Reduced IT costs</h5>
                  <p>
                    Eliminate the heavy recurring costs of on-premise infrastructure. Our cloud solutions give you enterprise-level capability at a fraction of the traditional cost
                  </p>
                </div>
              </div>
            </div>

            {/* <a href="#" className="btn btn-outline-primary mt-4">
              View All
            </a> */}
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <div className="adv-image-wrapper">
              <img
                src="/images/competitive.png"
                alt="AI Technology"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default CompetitiveAdvantage;
