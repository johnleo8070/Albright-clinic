import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faCalendarCheck, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../Styles/Faq.css";
import { faqData } from "../Scripts/faqData";

const FaqItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`faq-item ${isOpen ? "open" : ""}`}>
            <div className="faq-question" onClick={onClick}>
                <span>{question}</span>
                <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} className="faq-icon" />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="faq-answer-wrapper"
                    >
                        <div className="faq-answer">
                            <p>{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FaqSection = ({ title, faqs, showBooking, bookingContent }) => {
    const [openIndex, setOpenIndex] = useState(null);
    const navigate = useNavigate();

    return (
        <div className="faq-category-section">
            <h3 className="faq-category-title">{title}</h3>
            <div className="faq-items-container">
                {faqs.map((faq, index) => (
                    <FaqItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>
            {showBooking && (
                <div className="faq-booking-cta">
                    <div className="cta-text">
                        {bookingContent.text.map((t, i) => (
                            <p key={i}>{t}</p>
                        ))}
                        <ul className="cta-list">
                            {bookingContent.list.map((item, i) => (
                                <li key={i}>
                                    <FontAwesomeIcon icon={faChevronRight} className="cta-list-icon" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="faq-book-btn" onClick={() => navigate("/appointment")}>
                        <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
                    </button>
                </div>
            )}
        </div>
    );
};

function Faq() {
    // Helper to find booking content for specific categories if needed
    const getBookingContent = (category) => {
        const content = {
            "Anxiety Treatment FAQs": {
                text: [
                    "Ready to feel calmer and more in control?",
                    "If anxiety is affecting your daily life, professional support can make a real difference."
                ],
                list: [
                    "Schedule an Anxiety Evaluation at Albright Clinic",
                    "Call or Book an Appointment Today",
                    "Get Personalized Anxiety Treatment in Richmond, TX"
                ]
            },
            "Depression Treatment FAQs": {
                text: [
                    "You don’t have to face depression alone.",
                    "Support, understanding, and effective treatment are available."
                ],
                list: [
                    "Start Depression Treatment with a Mental Health Expert",
                    "Book a Confidential Consultation Today",
                    "Get Help for Depression at Albright Clinic"
                ]
            },
            "ADHD Treatment FAQs": {
                text: [
                    "Struggling with focus, organization, or restlessness?",
                    "ADHD care can help you regain clarity and confidence."
                ],
                list: [
                    "Schedule an ADHD Assessment Today",
                    "Get Personalized ADHD Treatment Plans",
                    "Book an Appointment with an ADHD Specialist in Richmond, TX"
                ]
            },
            "PTSD & Trauma FAQs": {
                text: [
                    "Healing from trauma is possible with the right support.",
                    "Compassionate, trauma-informed care can help you move forward."
                ],
                list: [
                    "Get Professional PTSD Treatment Today",
                    "Schedule a Trauma-Focused Mental Health Consultation",
                    "Begin Your Healing Journey at Albright Clinic"
                ]
            }
        };
        return content[category];
    };

    return (
        <div className="faq-section" id="faq">
            <div className="faq-title-content">
                <motion.h2
                    className="faq-main-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Frequently Asked Questions (FAQs)
                </motion.h2>
                <div className="faq-title-underline"></div>
            </div>

            <div className="faq-container">
                {faqData.map((section, index) => {
                    const booking = getBookingContent(section.category);
                    return (
                        <FaqSection
                            key={index}
                            title={section.category}
                            faqs={section.questions}
                            showBooking={!!booking}
                            bookingContent={booking}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Faq;
