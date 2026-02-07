import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import "../Styles/Contact.css";
import SEO from "../Components/SEO";

function Contact() {
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error("Please fill in all fields", {
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }

        // Send data to backend
        try {
            const response = await fetch("https://m593zws0-5000.uks1.devtunnels.ms/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Message sent successfully! We'll get back to you soon.", {
                    position: toast.POSITION.TOP_CENTER,
                });

                // Reset form
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                toast.error("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Server error. Please try again later.");
        }
    };

    return (
        <div className="contact-page">
            <SEO
                title="Contact Albright Clinic | Mental Health Clinic in Richmond, TX"
                description="Contact Albright Clinic in Richmond, Texas to schedule your mental health appointment. Compassionate psychiatric and behavioral care starts here."
                type="website"
            />
            <Navbar />

            <div className="contact-section">
                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="contact-title">Schedule Your Mental Health Appointment</h2>
                        <p className="contact-description">
                            Albright Clinic is here to support your mental wellness journey. Contact our
                            experienced mental health professionals in Richmond, Texas for compassionate
                            psychiatric and behavioral healthcare services.
                        </p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <h4>Phone</h4>
                                <p><a href="tel:+17136240727">+1 (713) 624-0727</a></p>
                            </div>

                            <div className="contact-detail-item">
                                <h4>Email</h4>
                                <p><a href="mailto:bookings@albrightclinic.com">bookings@albrightclinic.com</a></p>
                            </div>

                            <div className="contact-detail-item">
                                <h4>Location</h4>
                                <p>
                                    <a
                                        href="https://maps.app.goo.gl/Rqoix49hrBepb4J77"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        20711 Slate CT, RICHMOND TX 77407
                                    </a>
                                </p>
                            </div>

                            <div className="contact-detail-item">
                                <h4>Office Hours</h4>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Evening & Weekend Appointments Available</p>
                            </div>
                        </div>

                        <div className="contact-map-container">
                            <iframe
                                title="Albright Clinic Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3467.430!2d-95.736!3d29.673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640df2775f0f353%3A0x600c000000000000!2s20711%20Slate%20Ct%2C%20Richmond%2C%20TX%2077407%2C%20USA!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                                width="100%"
                                height="300"
                                style={{ border: 0, borderRadius: "12px" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="form-title">Send Us A Message</h3>
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="What is this regarding?"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="6"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button type="submit" className="contact-submit-btn">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
