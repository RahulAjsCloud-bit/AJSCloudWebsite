import React from "react";
import "../css/products.css";

const Products = () => {
  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          Our Products
        </h2>

        <div className="row justify-content-center g-4">

          {/* Card 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="product-card">
              <div className="product-front">
                <img src="/images/timebusiness.png" alt="TimeCard Business" />
                <h3>TimeCard Business</h3>
              </div>

              <div className="product-overlay">
                <h3>TimeCard Business</h3>
                <p>
                  A powerful time tracking and workforce management solution
                  designed for growing businesses.
                </p>
                <a href="https://timecards.ai" className="btn btn-light btn-sm">
                  View Product
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="product-card">
              <div className="product-front">
                <img src="/images/timeperson.png" alt="TimeCard Business" />
                <h3>TimeCard Personal</h3>
              </div>

              <div className="product-overlay">
                <h3>TimeCard Personal</h3>
                <p>
                  A simple and intuitive time tracking app for individuals and
                  freelancers.
                </p>
                <a href="https://personal.timecards.ai" className="btn btn-light btn-sm">
                  View Product
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="product-card">
              <div className="product-front">
                <img src="/images/timecard.png" alt="SimuAgent" />
                <h3>SimuAgent</h3>
              </div>

              <div className="product-overlay">
                <h3>SimuAgent</h3>
                <p>
                  An AI-powered simulation and training platform to enhance
                  decision-making and productivity.
                </p>
                <a href="https://simuagent.ai" className="btn btn-light btn-sm">
                  View Product
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Products;
