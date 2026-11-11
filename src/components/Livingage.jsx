import React from "react";
import "../css/livingage.css";

const services = [
  {
    title: "Managed Hosting",
    text: "Enterprise-grade hosting infrastructure, from foundational setups to advanced Machine Learning environments powered by NVIDIA GPUs — built for performance, built for scale.",
  },
  {
    title: "Help Desk & Support",
    text: "We deliver 99.99% response reliability to a $16 billion global retail giant. That track record speaks for itself.",
  },
  {
    title: "AI-Powered Development",
    text: "Using cutting-edge AI tools combined with our proprietary internal algorithms, we have successfully delivered large-scale development projects backed by over 5 million hours of enhanced development experience.",
  },
];

const Livingage = () => {
  return (
    <section id="livingage" className="livingage-section">
      <div className="container-fluid">

        {/* Hero Title */}
        <div className="livingage-header text-center">
          <h2>We Don't Follow the AI Revolution. We Build It.  </h2>
          <p className="tagline">
            The future is limitless. We are already there.
          </p>
        </div>

        {/* Intro Section */}
        <div className="livingage-content">
          <div className="content-card">
            <p>
              At <strong>AJS Cloud</strong>, innovation is more than a buzzword—it is
              the foundation of everything we do. From the very beginning, we have been
              pioneering advancements in Artificial Intelligence, Cloud Computing, and
              Enterprise Software Development, transforming cutting-edge technologies
              into measurable business success.
            </p>

            <p>
              With over <strong>30,000 hours</strong> invested in AI and Machine
              Learning research, we have developed, tested, and refined proprietary
              solutions that solve complex business challenges. Our commitment to
              innovation has enabled us to deliver scalable, intelligent, and
              future-ready systems for some of the world's most respected organizations.
            </p>

            <p>
              We don't rely on trends—we create solutions backed by experience,
              research, and real-world results. Every breakthrough, every platform, and
              every success story reflects our dedication to helping businesses thrive
              in an increasingly digital world.
            </p>

            <p>
              <strong>
                We don't just adapt to the future—we help build it.
              </strong>
            </p>
          </div>

          {/* ML Section */}
          {/* <div className="content-card highlight-card">
            <h3>Pioneers in Machine Learning</h3>

            <p>
              We are among the first companies in the world to deploy Object
              Detection and Facial Recognition using Machine Learning in
              real-world environments.
            </p>

            <p>
              With over <strong>30,000 hours</strong> of dedicated lab
              research, we have earned the right to say — we know what we are
              doing.
            </p>

            <p>
              When it comes to Large Language Models (LLMs), our journey has
              been just as rigorous. We have tested, stress-tested, and retired
              multiple models before engineering our own.
            </p>

            <p>
              Because <strong>good enough</strong> has never been our standard.
            </p>
          </div>


          <div className="content-card security-card">
            <h3>Your Data. Protected. Always.</h3>

            <p>
              In an industry where data is often exploited for private gain, we
              do things differently.
            </p>

            <p>
              At AJS Cloud, your data is yours. We keep it secure, private, and
              completely out of reach from misuse — full stop.
            </p>
          </div> */}

          {/* Services */}
          <div className="services-wrapper">
            <h3 className="services-title">What We Do</h3>

            <div className="row g-4">
              {services.map((service, index) => (
                <div className="col-12 col-md-4" key={index}>
                  <div className="service-card h-100">
                    <h4>{service.title}</h4>
                    <p>{service.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Livingage;