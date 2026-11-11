import React from "react";
import "../css/devtool.css";

const Devtool = () => {
  return (
    <section className="dev-tools-section">
      <div className="container text-center">
        <h2 className="dev-title">Developing New Tools</h2>

        <p className="dev-desc">
          After studying and examining your business closely, we bring you
          experts and experienced resources that can dedicatedly work for you
          on an hourly or full-time basis as per your requirement. The goal is
          to get enhanced intelligence aligned with your business goals for
          better productivity.
        </p>

        <div className="row justify-content-center g-4 mt-4">
          {/* SAAS */}
          <div className="col-md-4">
            <div className="tool-card">
              <span className="tool-icon">
                <img src="/icons/saas.png" alt="SAAS" />
              </span>
              <h5>SAAS</h5>
              <p>Scalable software-as-a-service solutions for modern businesses </p>
            </div>
          </div>

          {/* CRM */}
          <div className="col-md-4">
            <div className="tool-card">
              <span className="tool-icon">
                <img src="/icons/crm.png" alt="CRM" />
              </span>
              <h5>CRM</h5>
              <p>Custom customer relationship management tools that improve sales and retention </p>
            </div>
          </div>

          {/* ERP */}
          <div className="col-md-4">
            <div className="tool-card">
              <span className="tool-icon">
                <img src="/icons/erp.png" alt="ERP" />
              </span>
              <h5>ERP</h5>
              <p>Enterprise resource planning systems that unify operations and reduce overhead </p>
            </div>
          </div>

          {/* Web Development */}
          <div className="col-md-4">
            <div className="tool-card">
              <span className="tool-icon">
                <img src="/icons/coding.png" alt="Web Development" />
              </span>
              <h5>Web Development</h5>
              <p>High-performance, conversion-optimized websites and web applications </p>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="col-md-4">
            <div className="tool-card">
              <span className="tool-icon">
                <img src="/icons/app.png" alt="Mobile Development" />
              </span>
              <h5>Mobile Development</h5>
              <p>Native and cross-platform mobile apps for iOS and Android  </p>
            </div>
          </div>
        </div>

        {/* <div className="mt-5">
          <a href="#" className="btn btn-outline-primary px-4">
            Learn More
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default Devtool;
