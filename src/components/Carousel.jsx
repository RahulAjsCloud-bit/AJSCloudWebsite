// import React, { useEffect } from "react";
// import { Carousel as BsCarousel } from "bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "../css/carousel.css";

// const carouselItems = [
//   {
//     img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
//     title: "Enterprise Software Solutions",
//     text: "Scalable systems built for performance",
//   },

//   {
//     img: "/images/efficiency-and-speed.jfif",
//     title: "Efficiency & Speed",
//     text: "Optimized systems for maximum performance",
//     style: {
//       objectFit: "contain",
//       height: "70vh",
//       backgroundColor: "#000",
//     },
//   },

//   {
//     img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
//     title: "Hardware & Embedded Systems",
//     text: "Smart integrations for real-world solutions",
//   },

//   {
//     img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//     title: "Hire Expert Developers",
//     text: "Laravel • Python • React • DevOps",
//   },

//   {
//     img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
//     title: "Large-Scale Project Delivery",
//     text: "Trusted by global enterprises",
//   },

//   {
//     img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
//     title: "Technology That Drives Growth",
//     text: null,
//     btn: {
//       text: "Hire Developers",
//       href: "https://shop.ajscloud.com/hire-developer/",
//     },
//   },
// ];

// const Carousel = () => {
//   useEffect(() => {
//     const carouselElement = document.getElementById("heroCarousel");

//     if (carouselElement) {
//       new BsCarousel(carouselElement, {
//         interval: 3000, // ✅ 4 seconds
//         pause: false,
//         ride: "carousel",
//         wrap: true,
//         touch: true,
//       });
//     }
//   }, []);

//   return (
//     // <section id="home" className="hero-carousel">
//     <section id="home" className="hero-carousel container-fluid p-0">




//       <div id="heroCarousel" className="carousel slide carousel-fade">
//         {/* Indicators */}
//         <div className="carousel-indicators">
//           {carouselItems.map((_, index) => (
//             <button
//               key={index}
//               type="button"
//               data-bs-target="#heroCarousel"
//               data-bs-slide-to={index}
//               className={index === 0 ? "active" : ""}
//             />
//           ))}
//         </div>

//         {/* Slides */}
//         <div className="carousel-inner">
//           {carouselItems.map((item, index) => (
//             <div
//               key={index}
//               className={`carousel-item ${index === 0 ? "active" : ""}`}
//             >




// {/* 
//               <img
//                 src={item.img}
//                 className="d-block w-100 hero-img"
//                 alt={item.title}
//               /> */}


//               <img
//                 src={item.img}
//                 className="d-block w-100 hero-img"
//                 alt={item.title}
//                 style={item.style}
//               />




//               <div className="carousel-caption">
//                 <h1 className="fw-bold">{item.title}</h1>
//                 {item.text && <p>{item.text}</p>}
//                 {item.btn && (
//                   <a
//                     href={item.btn.href}
//                     className="btn btn-primary btn-lg mt-3"
//                   >
//                     {item.btn.text}
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Controls */}
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#heroCarousel"
//           data-bs-slide="prev"
//         >
//           <span className="carousel-control-prev-icon" />
//         </button>

//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#heroCarousel"
//           data-bs-slide="next"
//         >
//           <span className="carousel-control-next-icon" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Carousel;

import React, { useEffect, useRef, useState } from "react";
import { Carousel as BsCarousel } from "bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../css/carousel.css";
import DesignerImage from "../assets/GeneratedImage.png";


const SUBMIT_URL = "https://ajscloud.com/quote_api/index.php";
const RECAPTCHA_SITE_KEY = "6LfKhxguAAAAAD5350TAuPnLC9ZCi1dDI90-OSaM";

const carouselItems = [
  {
    img: DesignerImage,
    text: null,
    buttons: [
      {
        text: "Hire Developers",
        href: "https://shop.ajscloud.com/hire-developer/",
      },
      {
        text: "Request A Quote",
        action: "request-quote",
      },
    ],
  },
];

const services = [
  "Hire Developer Appointment",
  "Legal Services",
  "Enterprise Web Development",
  "Web Support & Maintenance",
  "Full Stack Development Services",
  "Cloud Services — Enterprise",
  "BI & Analytics",
  "Database Management",
  "Backend Development",
  "Cloud Services — Add-Ons",
  "Cloud Services — Advanced",
  "Cloud Services — Basic",
  "Web Development Services",
];

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  services: [],
  requirements: "",
  document: null,
  date: "",
  time: "",
};

const getLocalDate = () => {
  const date = new Date();
  const offset = date.getTimezoneOffset() * 60000;
  return new Date(date.getTime() - offset)
    .toISOString()
    .slice(0, 10);
};

const RequestQuotePopup = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialForm);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", onEscape);
    };
  }, [onClose]);

  const updateField = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleServiceChange = (e) => {
    const selected = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    updateField("services", selected);
  };

  const validateVisibleStep = () => {
    if (!formRef.current) return false;

    // Only current-step fields are mounted.
    return formRef.current.reportValidity();
  };

  const nextStep = () => {
    setError("");

    if (!validateVisibleStep()) return;

    if (
      step === 2 &&
      formData.document &&
      formData.document.size > 10 * 1024 * 1024
    ) {
      setError("Maximum file size is 10 MB.");
      return;
    }

    setStep((current) => Math.min(current + 1, 3));
  };

  const previousStep = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setError("");

    if (!validateVisibleStep()) return;

    const token = recaptchaRef.current?.getValue() || captchaToken;
    if (!RECAPTCHA_SITE_KEY || !token) {
      setError("Please complete reCAPTCHA verification.");
      return;
    }

    setSubmitting(true);

    try {
      const payload = new FormData();
      payload.append("fullName", formData.fullName.trim());
      payload.append("phone", formData.phone.trim());
      payload.append("email", formData.email.trim());
      formData.services.forEach((service) => {
        payload.append("services[]", service);
      });
      payload.append("requirements", formData.requirements);
      payload.append("date", formData.date);
      payload.append("time", formData.time);
      payload.append("timezone", "America/Los_Angeles");

      // Send both field names for compatibility with your PHP quote API.
      // The backend must verify the token with Google's siteverify endpoint.
      payload.append("g-recaptcha-response", token);
      payload.append("recaptchaToken", token);

      if (formData.document) {
        payload.append("document", formData.document);
      }

      const response = await fetch(SUBMIT_URL, {
        method: "POST",
        body: payload,
      });

      // PHP should return JSON. Do not mark success on HTTP 200 alone.
      const rawResponse = await response.text();
      let result;
      try {
        result = JSON.parse(rawResponse);
      } catch {
        throw new Error(
          `Server returned an invalid response (HTTP ${response.status}). Please check PHP API logs.`
        );
      }

      if (!response.ok || result?.success !== true) {
        throw new Error(result?.message || "Unable to submit your request.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
      // reCAPTCHA tokens are short-lived and one-use; get a fresh token on retry.
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="quote-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="quote-popup"
        role="dialog"
        aria-modal="true"
        aria-label="Request A Quote"
      >
        <button
          ref={closeRef}
          type="button"
          className="quote-close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        {success ? (
          <div className="quote-success">
            <div className="quote-success-icon">✓</div>
            <h2>Thank You!</h2>
            <p>
              Your request has been submitted successfully.
              Our team will contact you shortly.
            </p>
            <button
              type="button"
              className="quote-primary-btn"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <div className="quote-content">
            <h2 className="quote-title">LET'S CONNECT</h2>

            <p className="quote-subtitle">
              Let's Talk About Your Project
            </p>

            <div
              className="quote-steps"
              aria-label={`Step ${step} of 3`}
            >
              {[1, 2, 3].map((number, index) => (
                <React.Fragment key={number}>
                  {index > 0 && (
                    <div className="quote-step-line" />
                  )}
                  <span
                    className={`quote-step ${step === number ? "active" : ""
                      }`}
                    aria-current={
                      step === number ? "step" : undefined
                    }
                  >
                    {number}
                  </span>
                </React.Fragment>
              ))}
            </div>

            <form ref={formRef} onSubmit={handleSubmit}>
              {/* STEP 1 */}
              {step === 1 && (
                <div className="quote-form-step">
                  <h3>Contact Information</h3>

                  <input
                    type="text"
                    placeholder="Full Name*"
                    aria-label="Full Name"
                    autoComplete="name"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      updateField("fullName", e.target.value)
                    }
                  />

                  <input
                    type="tel"
                    placeholder="Phone*"
                    aria-label="Phone"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      updateField("phone", e.target.value)
                    }
                  />

                  <input
                    type="email"
                    placeholder="Email*"
                    aria-label="Email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      updateField("email", e.target.value)
                    }
                  />

                  <div className="quote-actions end">
                    <button
                      type="button"
                      className="quote-primary-btn"
                      onClick={nextStep}
                    >
                      NEXT ⟶
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="quote-form-step">
                  <h3>Services Needed</h3>

                  <select
                    multiple
                    className="quote-services"
                    aria-label="Select Services"
                    value={formData.services}
                    onChange={handleServiceChange}
                  >
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>

                  <p className="quote-help">
                    Hold Ctrl (or Cmd on Mac) to select
                    multiple services.
                  </p>

                  <textarea
                    rows="4"
                    placeholder="Share Your Request Or Requirements...."
                    aria-label="Your Requirements"
                    value={formData.requirements}
                    onChange={(e) =>
                      updateField(
                        "requirements",
                        e.target.value
                      )
                    }
                  />

                  <div className="quote-file">
                    <input
                      type="file"
                      id="quoteDocument"
                      aria-label="Upload Document"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        if (
                          file &&
                          file.size > 10 * 1024 * 1024
                        ) {
                          setError(
                            "Maximum file size is 10 MB."
                          );
                          e.target.value = "";
                          updateField("document", null);
                          return;
                        }
                        updateField("document", file);
                      }}
                    />
                  </div>

                  <div className="quote-actions">
                    <button
                      type="button"
                      className="quote-back-btn"
                      onClick={previousStep}
                    >
                      ⟵ BACK
                    </button>

                    <button
                      type="button"
                      className="quote-primary-btn"
                      onClick={nextStep}
                    >
                      NEXT ⟶
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="quote-form-step">
                  <h3>
                    Preferred Date And Time Selection
                  </h3>

                  <div className="quote-date-time">
                    <div className="quote-field">
                      <label htmlFor="quoteDate">
                        Choose Date*
                      </label>
                      <input
                        id="quoteDate"
                        type="date"
                        min={getLocalDate()}
                        required
                        value={formData.date}
                        onChange={(e) =>
                          updateField("date", e.target.value)
                        }
                      />
                    </div>

                    <div className="quote-field">
                      <label htmlFor="quoteTime">
                        Choose Time* (Pacific Time)
                      </label>
                      <input
                        id="quoteTime"
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) =>
                          updateField("time", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="quote-captcha">
                    {RECAPTCHA_SITE_KEY ? (
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={(token) => {
                          setCaptchaToken(token);
                          setError("");
                        }}
                        onExpired={() => setCaptchaToken(null)}
                        onErrored={() => {
                          setCaptchaToken(null);
                          setError("Unable to load reCAPTCHA. Please refresh and try again.");
                        }}
                      />
                    ) : (
                      <p>
                        reCAPTCHA site key needs to be
                        configured before submission.
                      </p>
                    )}
                  </div>

                  <div className="quote-actions">
                    <button
                      type="button"
                      className="quote-back-btn"
                      onClick={previousStep}
                    >
                      ⟵ BACK
                    </button>

                    <button
                      type="submit"
                      className="quote-primary-btn"
                      disabled={submitting || !captchaToken}
                    >
                      {submitting
                        ? "SENDING..."
                        : "SUBMIT ⟶"}
                    </button>
                  </div>
                </div>
              )}

              {error && (
                <p className="quote-error" role="alert">
                  {error}
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const Carousel = () => {
  const [showQuotePopup, setShowQuotePopup] = useState(false);
  const hasMultipleSlides = carouselItems.length > 1;

  useEffect(() => {
    if (!hasMultipleSlides) return;
    const carouselElement = document.getElementById("heroCarousel");
    if (!carouselElement) return;

    const instance = BsCarousel.getOrCreateInstance(carouselElement, {
      interval: 5000,
      pause: "hover",
      ride: "carousel",
      wrap: true,
      touch: true,
    });

    return () => instance.dispose();
  }, [hasMultipleSlides]);

  return (
    <>
      <section id="home" className="hero-carousel container-fluid p-0">
        {/* Visible CTA above the banner: never hidden below the fold. */}
        <div className="hero-action-bar">
          <div className="hero-action-inner">
            <div className="hero-action-copy">
              <span className="hero-action-eyebrow">AJS CLOUD SERVICES</span>
              <p>Reliable support for your next software project.</p>
            </div>
            <div className="hero-buttons">
              <a
                href="https://shop.ajscloud.com/hire-developer/"
                className="btn hero-hire-btn"
              >
                Hire Developers
              </a>
              <button
                type="button"
                className="btn hero-quote-btn"
                onClick={() => setShowQuotePopup(true)}
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          aria-label="AJS Cloud services"
        >
          {hasMultipleSlides && (
            <div className="carousel-indicators">
              {carouselItems.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#heroCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : undefined}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="hero-image-wrap">
                  <img
                    src={item.img}
                    className="hero-img"
                    alt={item.title || "AJS Cloud software care services"}
                    style={item.style}
                  />
                </div>
                {(item.title || item.text) && (
                  <div className="carousel-caption hero-copy">
                    {item.title && <h2 className="fw-bold">{item.title}</h2>}
                    {item.text && <p>{item.text}</p>}
                  </div>
                )}
              </div>
            ))}
          </div>

          {hasMultipleSlides && (
            <>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="prev"
                aria-label="Previous slide"
              >
                <span className="carousel-control-prev-icon" />
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide="next"
                aria-label="Next slide"
              >
                <span className="carousel-control-next-icon" />
              </button>
            </>
          )}
        </div>


      </section>

      {showQuotePopup && (
        <RequestQuotePopup onClose={() => setShowQuotePopup(false)} />
      )}
    </>
  );
};

export default Carousel;

