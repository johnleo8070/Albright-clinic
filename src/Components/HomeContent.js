import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBrain,
    faPrescriptionBottle,
    faUserDoctor,
    faStethoscope,
    faHeartPulse,
    faShieldHalved,
    faCircleCheck,
    faLocationDot,
    faInfoCircle,
    faPhone,
    faCalendarPlus
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../Styles/HomeContent.css";

function HomeContent() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="home-content-container">
            {/* 0. Highlights Section */}
            <section className="highlights-section">
                <motion.div
                    className="highlights-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div variants={itemVariants} className="highlight-card">
                        <div className="highlight-icon-wrapper">
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </div>
                        <h3>About Us</h3>
                        <p>Learn about our patient-centered mission and our team of dedicated mental health professionals in Richmond, Texas.</p>
                        <Link to="/about" className="highlight-btn">View More</Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="highlight-card">
                        <div className="highlight-icon-wrapper">
                            <FontAwesomeIcon icon={faStethoscope} />
                        </div>
                        <h3>Our Services</h3>
                        <p>From psychiatric evaluations to medication management, discover how we support your mental wellness journey.</p>
                        <Link to="/services" className="highlight-btn">View More</Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="highlight-card">
                        <div className="highlight-icon-wrapper">
                            <FontAwesomeIcon icon={faPhone} />
                        </div>
                        <h3>Contact Us</h3>
                        <p>Have questions? Reach out to our compassionate team for guidance and support regarding our clinical services.</p>
                        <Link to="/contact" className="highlight-btn">View More</Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="highlight-card">
                        <div className="highlight-icon-wrapper">
                            <FontAwesomeIcon icon={faCalendarPlus} />
                        </div>
                        <h3>Appointment</h3>
                        <p>Be proactive about your mental health. Book your consultation online and take the first step towards healing.</p>
                        <Link to="/appointment" className="highlight-btn">View More</Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* 1. Services Section */}
            <section className="services-section">
                <div className="content-section-title">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Mental Health & Behavioral Services We Offer
                    </motion.h2>
                    <div className="title-underline"></div>
                </div>

                <motion.div
                    className="home-services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div variants={itemVariants} className="service-item">
                        <Link to="/services" className="home-service-card">
                            <FontAwesomeIcon icon={faBrain} className="home-service-icon" />
                            <h3>Psychiatric Evaluations</h3>
                            <p>Comprehensive psychiatric assessments to accurately diagnose mental health conditions and guide effective treatment planning.</p>
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="service-item">
                        <Link to="/services" className="home-service-card">
                            <FontAwesomeIcon icon={faPrescriptionBottle} className="home-service-icon" />
                            <h3>Medication Management</h3>
                            <p>Professional psychiatric medication management, including prescribing, monitoring, and adjusting medications to ensure safe outcomes.</p>
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="service-item">
                        <Link to="/services" className="home-service-card">
                            <FontAwesomeIcon icon={faUserDoctor} className="home-service-icon" />
                            <h3>Individual Therapy</h3>
                            <p>Personalized one-on-one therapy sessions focused on emotional healing, coping skills, and mental resilience.</p>
                        </Link>
                    </motion.div>

                    <motion.div variants={itemVariants} className="service-item">
                        <Link to="/services" className="home-service-card">
                            <FontAwesomeIcon icon={faStethoscope} className="home-service-icon" />
                            <h3>Behavioral Health Services</h3>
                            <p>Support for emotional regulation, stress management, behavioral challenges, and lifestyle improvement.</p>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. Conditions Section */}
            <section className="conditions-section">
                <div className="content-section-title">
                    <h2>Specialized Treatment for Mental Health Conditions</h2>
                    <p style={{ color: '#666', marginTop: '-10px', marginBottom: '40px' }}>Expert psychiatric care tailored for a wide range of behavioral and emotional disorders</p>
                </div>

                <motion.div
                    className="conditions-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {[
                        "Depression ",
                        "Anxiety disorder ",
                        "Bipolar disorder ",
                        "ADHD ",
                        "PTSD & trauma-related disorders",
                        "Mood disorders",
                       
                    ].map((condition, index) => (
                        <motion.div key={index} variants={itemVariants} className="condition-card">
                            <div className="condition-check">
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </div>
                            <span className="condition-name">{condition}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </section>



            {/* 4. Why Choose Us Section */}
            <section className="why-choose-section">
                <div className="content-section-title">
                    <h2>Why Choose Albright Clinic in Richmond, TX?</h2>
                    <div className="title-underline"></div>
                </div>

                <motion.div
                    className="why-choose-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div variants={itemVariants} className="why-feature">
                        <div className="icon-circle"><FontAwesomeIcon icon={faCircleCheck} /></div>
                        <p>Licensed & Experienced Professionals</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="why-feature">
                        <div className="icon-circle"><FontAwesomeIcon icon={faCircleCheck} /></div>
                        <p>Compassionate, Judgment-Free Care</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="why-feature">
                        <div className="icon-circle"><FontAwesomeIcon icon={faCircleCheck} /></div>
                        <p>Evidence-Based Treatments</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="why-feature">
                        <div className="icon-circle"><FontAwesomeIcon icon={faShieldHalved} /></div>
                        <p>Confidential & Supportive Environment</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="why-feature">
                        <div className="icon-circle"><FontAwesomeIcon icon={faLocationDot} /></div>
                        <p>Convenient Richmond, Texas Location</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="why-feature">
                        <div className="icon-circle"><FontAwesomeIcon icon={faHeartPulse} /></div>
                        <p>Commitment to Long-term Wellness</p>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
}

export default HomeContent;
