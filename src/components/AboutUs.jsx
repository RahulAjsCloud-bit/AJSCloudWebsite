
import React from "react";
import "../css/AboutUs.css";
import {
    FaDatabase,
    FaUsers,
    FaCloud,
    FaServer,
    FaTasks,
    FaMobileAlt,
    FaNetworkWired,
    FaCode
} from "react-icons/fa";

const AboutUs = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <h1>About AJS Cloud</h1>
                    <p>
                        Built on a Mission. Driven by Results.
                    </p>
                </div>
            </section>

            {/* About */}
            <section className="section">
                <div className="container">
                    <h2>Who We Are</h2>
                    <p>
                        AJS Cloud was founded with one clear purpose: to help businesses
                        grow by putting powerful, intelligent technology in their hands.
                    </p>

                    <p>
                        We are a full-spectrum technology company specializing in AI
                        solutions, cloud infrastructure, managed IT services, and
                        enterprise software development.
                    </p>

                    <p>
                        From pioneering machine learning deployments to developing
                        AI-powered products and platforms, everything we do is guided by
                        the belief that the right technology applied with the right
                        expertise changes everything.
                    </p>
                </div>
            </section>

            {/* Mission */}
            <section className="section bg-dark">
                <div className="container">
                    <h2>Our Mission</h2>
                    <p>
                        To empower organizations of every size with cutting-edge
                        technology, honest expertise, and scalable solutions so the
                        businesses we serve can grow without limits.
                    </p>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container">
                    <h2>Our Values</h2>

                    <div className="value-grid">
                        <div className="value-card">
                            <h4>Innovation with Integrity</h4>
                            <p>
                                We push technology forward with transparency and accountability.
                            </p>
                        </div>

                        <div className="value-card">
                            <h4>Client-First, Always</h4>
                            <p>
                                Your goals define our work. We build what you need.
                            </p>
                        </div>

                        <div className="value-card">
                            <h4>Data Privacy as a Promise</h4>
                            <p>
                                We protect your information with the highest standards.
                            </p>
                        </div>

                        <div className="value-card">
                            <h4>Excellence Without Compromise</h4>
                            <p>
                                Good enough is never enough. We strive for excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder */}
            <section className="section founder-section">
                <div className="container">
                    <div className="founder-grid">
                        <div>
                            <img
                                src="/images/CEO.png"
                                alt="Prashant Tomar"
                                className="founder-image"
                            />
                        </div>

                        <div>
                            <h2>Meet Our Founder</h2>
                            <h3>Prashant Tomar</h3>

                            <p className="designation">
                                Founder, Board Member & Chief Executive Officer
                            </p>

                            <p>
                                Prashant Tomar is a visionary technology entrepreneur with
                                more than two decades of experience in enterprise technology,
                                cloud infrastructure, artificial intelligence, and business
                                transformation.
                            </p>

                            <p>
                                Based in the San Francisco Bay Area, he has spent his career
                                identifying emerging technologies before they become mainstream
                                and building innovative solutions that help organizations grow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise */}
            <section className="section bg-dark">
                <div className="container">
                    <h2>Leadership Expertise</h2>

                    <div className="expertise-grid">

                        <div className="expertise-card">
                            <FaDatabase className="expertise-icon" />
                            <span>ERP Systems</span>
                        </div>

                        <div className="expertise-card">
                            <FaUsers className="expertise-icon" />
                            <span>CRM Platforms</span>
                        </div>

                        <div className="expertise-card">
                            <FaCloud className="expertise-icon" />
                            <span>Cloud Infrastructure</span>
                        </div>

                        <div className="expertise-card">
                            <FaServer className="expertise-icon" />
                            <span>Data Centers</span>
                        </div>

                        <div className="expertise-card">
                            <FaTasks className="expertise-icon" />
                            <span>Agile & Scrum</span>
                        </div>

                        <div className="expertise-card">
                            <FaMobileAlt className="expertise-icon" />
                            <span>Mobile Computing</span>
                        </div>

                        <div className="expertise-card">
                            <FaNetworkWired className="expertise-icon" />
                            <span>Networking</span>
                        </div>

                        <div className="expertise-card">
                            <FaCode className="expertise-icon" />
                            <span>Software Development</span>
                        </div>

                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section className="section">
                <div className="container">
                    <h2>Our Impact</h2>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <h3>30,000+</h3>
                            <p>Hours of AI Research</p>
                        </div>

                        <div className="stat-card">
                            <h3>6+</h3>
                            <p>Major Industries Served</p>
                        </div>

                        <div className="stat-card">
                            <h3>20+</h3>
                            <p>Years of Innovation</p>
                        </div>

                        <div className="stat-card">
                            <h3>Global</h3>
                            <p>Enterprise Clients</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="container">
                    <h2>Building the Future of AI-Powered Business</h2>
                    <p>
                        We continue to innovate through AJS Cloud, TimeCards.AI, and
                        SimuAgent, helping organizations unlock the full potential of AI.
                    </p>

                    <button className="cta-btn">
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;

