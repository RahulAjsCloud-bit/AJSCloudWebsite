import React from "react";
import "../../css/main.css";

const ManufacturingSector = () => {
  return (
    <div className="container-fluid p-0">

      <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center w-75">
          <h1>Smart Manufacturing</h1>
          <p>
            Digital transformation for modern manufacturing operations
            and supply chains.
          </p>
        </div>
      </section>

      <section className="vh-100 d-flex align-items-center justify-content-center bg-secondary text-white">
        <div className="text-center w-75">
          <h1>Automation & IoT</h1>
          <p>
            IoT-enabled automation improving efficiency, monitoring,
            and predictive maintenance.
          </p>
        </div>
      </section>

      <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
        <div className="text-center w-75">
          <h1>Supply Chain Optimization</h1>
          <p>
            Data-driven insights to streamline logistics and production
            workflows.
          </p>
        </div>
      </section>

      <section className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
        <div className="text-center w-75">
          <h1>Security & Reliability</h1>
          <p>
            Secure industrial systems ensuring uptime and operational
            continuity.
          </p>
        </div>
      </section>

    </div>
  );
};

export default ManufacturingSector;
