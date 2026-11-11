import React from "react";
import "../../css/main.css";

const OnBoardingWithAJS = () => {
  return (
    // <div className="container-fluid p-0">

    //   <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
    //     <div className="text-center w-75">
    //       <h1>On Boarding With AJS</h1>
    //       <p>
    //         Structured onboarding to understand your business, goals,
    //         challenges, and technology landscape.
    //       </p>
    //     </div>
    //   </section>

    //   <section className="vh-100 d-flex align-items-center justify-content-center bg-secondary text-white">
    //     <div className="text-center w-75">
    //       <h1>Requirement Analysis</h1>
    //       <p>
    //         Deep technical and functional analysis to define a clear roadmap.
    //       </p>
    //     </div>
    //   </section>

    //   <section className="vh-100 d-flex align-items-center justify-content-center bg-light">
    //     <div className="text-center w-75">
    //       <h1>Solution Planning</h1>
    //       <p>
    //         Custom solution planning aligned with scalability and performance.
    //       </p>
    //     </div>
    //   </section>

    //   <section className="vh-100 d-flex align-items-center justify-content-center bg-dark text-white">
    //     <div className="text-center w-75">
    //       <h1>Execution & Delivery</h1>
    //       <p>
    //         Agile execution with continuous feedback and transparent delivery.
    //       </p>
    //     </div>
    //   </section>

    // </div>

     <section id="onboarding" className="onboarding-section">
      <div className="container-fluid px-0">
        <div className="row g-0 align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-12 col-md-6 onboarding-content">
            <div className="content-wrapper">
              <h2 className="fw-bold mb-3 text-white">
                On Boarding With AJS

              </h2>
              <h3 className="fw-bold mb-3 text-white">
                Switching Should Feel Like an Upgrade — Not an Ordeal
              </h3>
              <p className="mb-4 text-white">
                Many businesses stay locked in outdated IT environments not because they want to but because change feels complicated. We make it simple.

                Our onboarding process is collaborative, transparent, and fast. We study your existing infrastructure, understand your business goals, and bring a fresh strategic perspective alongside the technical firepower to execute it.

                Whether you're migrating to the cloud for the first time, switching providers, or building something entirely new AJS Cloud is the partner that makes the transition smooth and the outcomes exceptional
              </p>
              {/* <a href="#" className="btn btn-light px-4 fw-semibold">
                Learn More
              </a> */}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-12 col-md-6 onboarding-image">
            <img
              src="/images/stand on ladder.png"
              alt="Onboarding AJS"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnBoardingWithAJS;
