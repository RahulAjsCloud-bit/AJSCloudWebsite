import React from "react";
import Footer from "../../components/Footer";
import "../../css/main.css";

const FinancialServices = () => {
  return (
    <>
      <div className="container-fluid p-0">

        <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
          <div className="text-center w-75">
            <h1>Banking & Finance</h1>
            <p>
              Secure, scalable, and compliant financial technology solutions
              tailored for modern banking systems.
            </p>
          </div>
        </section>

        <section className="vh-100 d-flex align-items-center justify-content-center bg-secondary text-white">
          <div className="text-center w-75">
            <h1>Insurance Platforms</h1>
            <p>
              Digital insurance platforms with automation, analytics,
              and regulatory compliance.
            </p>
          </div>
        </section>

        <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
          <div className="text-center w-75">
            <h1>FinTech Innovation</h1>
            <p>
              Payment gateways, wallets, blockchain, and next-gen fintech
              solutions.
            </p>
          </div>
        </section>

        <section className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
          <div className="text-center w-75">
            <h1>Security & Compliance</h1>
            <p>
              PCI-DSS, SOC, ISO compliance with enterprise-grade security.
            </p>
          </div>
        </section>

      </div>

      {/* <Footer /> */}
    </>
  );
};

export default FinancialServices;
