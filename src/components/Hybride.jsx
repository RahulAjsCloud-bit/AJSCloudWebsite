import "../css/card.css";

const Hybride = () => {
  return (
    <section id="hybrid-cloud" className="py-5 text-center bg-white">
      <div className="container">
        {/* Heading */}
        <h2 className="fw-bold mb-3">Hybrid With AJS or Cloud With Partners</h2>
        <p className="text-muted mb-5 mx-auto" style={{ maxWidth: "720px" }}>
          Cloud Computing services today are changing the scenario of data
          handling and businesses like never before. If you are someone, whose
          business runs online or is related to any IT field, the cloud service
          is none less than a backbone for you.
        </p>

        {/* Cards Grid */}
        <div className="row g-4 align-items-center justify-content-center">
          {/* Left Top */}
          <div className="col-md-3">
            <div className="cloud-card">
              <div className="logo-box">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                  // height="40"
                  alt="AWS"
                />
              </div>
              <h6 className="mt-3 fw-bold">AWS</h6>
              <p>
                Amazon Web Service uses the content delivery network to send
                static and dynamic files across the world in a blink.
              </p>
            </div>
          </div>

          {/* Center */}
          <div className="col-md-4">
            <div className="cloud-card center-card">
              <div className="logo-box">
                <img
                  src="/images/ajscloud_logo.png"
                  // height="50"
                  alt="AJS"
                />
              </div>
              <h6 className="mt-3 fw-bold">AJS</h6>
              <p>
                AJS is a company that is established with the mission to grow
                with the growth of others. We provide empowering solutions to
                business enterprises through our magnificent yet totally
                scalable solutions.
              </p>
            </div>
          </div>

          {/* Right Top */}
          <div className="col-md-3">
            <div className="cloud-card">
              <div className="logo-box">
                <img
                  src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openstack.svg"
                  alt="OpenStack"
                  className="cloud-logo"
                />
              </div>

              <h6 className="mt-3 fw-bold">OpenStack</h6>
              <p>
                OpenStack is self-sufficient for the automatic deployment and
                management of cloud architecture.
              </p>
            </div>
          </div>

          {/* Left Bottom */}
          {/* <div className="col-md-3 offset-md-1">
            <div className="cloud-card">
              <div className="logo-box">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg"
                  alt="VMware"
                  // height="35"
                />
              </div>
              <h6 className="mt-3 fw-bold">VMware</h6>
              <p>
                Pro in better resource management, VMware is an expert in
                running multiple applications over a single server.
              </p>
            </div>
          </div> */}

          <div className="col-md-3">
            <div className="cloud-card">
              <div className="logo-box">
                <img
                  src="/images/veeamLogo.png"
                  alt="Veeam"
                  className="cloud-logo"
                />
              </div>

              <h6 className="mt-3 fw-bold">Veeam</h6>

              <p>
                Veeam provides enterprise-grade backup, disaster recovery, and data
                protection solutions, helping organizations secure, recover, and manage
                critical data across cloud, virtual, and physical environments.
              </p>
            </div>
          </div>

          {/* Right Bottom */}
          <div className="col-md-3">
            <div className="cloud-card">
              <div className="logo-box">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg"
                  alt="Azure"
                // height="35"
                />
              </div>
              <h6 className="mt-3 fw-bold">AZURE</h6>
              <p>
                Microsoft Azure is optimum for IaaS, PaaS, and SaaS solutions
                including analytics and virtual computing.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-5">
          <a href="#" className="btn btn-outline-primary px-4">
            View All
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hybride;
