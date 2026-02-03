import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMessage,
    faXmark,
    faPaperPlane,
    faCircleDot,
    faRobot,
    faUser,
    faPhone,
    faEnvelope,
    faLocationDot,
    faClock
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../Scripts/faqData";
import { useNavigate } from "react-router-dom";
import "../Styles/Chatbot.css";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Hi! I'm Val 🤖, how can I help you today?",
            sender: "bot",
            timestamp: new Date()
        }
    ]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    // Flatten all FAQs for easier searching
    const allFaqs = faqData.flatMap(category => category.questions);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: "user",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const userQuery = inputValue.toLowerCase().trim();
        setInputValue("");

        // Simulate typing
        setIsTyping(true);
        setTimeout(() => {
            generateResponse(userQuery);
        }, 1000);
    };

    const generateResponse = (query) => {
        setIsTyping(false);
        let botResponse = "";

        // Greetings check
        const greetings = ["hi", "hello", "good morning", "good afternoon", "good evening", "hey", "hola"];
        const isGreeting = greetings.some(greet => query.includes(greet));

        if (isGreeting) {
            botResponse = (
                <div className="bot-welcome-msg">
                    <p>Welcome! Thank you for contacting the Albright Clinic.</p>
                    <p>We are here to support your mental wellness journey in Richmond, Texas. Our team of experienced professionals is dedicated to providing compassionate psychiatric and behavioral healthcare.</p>
                    <div className="bot-booking-info">
                        <strong>To schedule an appointment or for inquiries, you can:</strong>
                        <ol>
                            <li><strong>Book directly online</strong> by going to our appointment page.</li>
                            <li><strong>Contact us directly:</strong>
                                <br /> <FontAwesomeIcon icon={faPhone} /> Phone: +1 (713) 624-0727
                                <br /> <FontAwesomeIcon icon={faEnvelope} /> Email: bookings@albrightclinic.com
                            </li>
                        </ol>
                        <p><FontAwesomeIcon icon={faLocationDot} /> <strong>Location:</strong> 20711 Slate CT, Richmond, TX 77407</p>
                        <p><FontAwesomeIcon icon={faClock} /> <strong>Office Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM<br />(Evening & Weekend appointments are available)</p>
                    </div>
                    <p>We aim to respond to messages during business hours. For immediate assistance, please call us.</p>
                    <p>Warmly,<br />The Albright Clinic Team</p>
                    <button className="bot-action-btn" onClick={() => { setIsOpen(false); navigate("/appointment"); }}>
                        Book Appointment Now
                    </button>
                </div>
            );
        } else {
            // FAQ matching
            const matchingFaq = allFaqs.find(faq =>
                query.includes(faq.question.toLowerCase()) ||
                faq.question.toLowerCase().includes(query)
            );

            if (matchingFaq) {
                botResponse = matchingFaq.answer;
            } else {
                botResponse = "Apologies, I am not sure about that. Please contact our support team at +1 (713) 624-0727 for more information.";
            }
        }

        const botMessage = {
            id: messages.length + 2,
            text: botResponse,
            sender: "bot",
            timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
    };

    const handleSuggestionClick = (question) => {
        setInputValue(question);
        // We could auto-send here too
    };

    const suggestions = [
        "What services do you offer?",
        "How do I schedule an appointment?",
        "Do you treat anxiety?",
        "Where are you located?"
    ];

    return (
        <>
            {/* Chat Trigger Button */}
            <motion.div
                className="chatbot-trigger"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="trigger-badge">1</div>
                <FontAwesomeIcon icon={isOpen ? faXmark : faMessage} />
            </motion.div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-window"
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        {/* Header */}
                        <div className="chat-header">
                            <div className="chat-bot-info">
                                <div className="bot-avatar">
                                    <FontAwesomeIcon icon={faRobot} />
                                    <span className="online-indicator"></span>
                                </div>
                                <div className="bot-name-status">
                                    <h4>Albright Support</h4>
                                    <span>Online | Val 🤖</span>
                                </div>
                            </div>
                            <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="chat-messages-container">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`message-wrapper ${msg.sender}`}>
                                    <div className="message-avatar">
                                        <FontAwesomeIcon icon={msg.sender === "bot" ? faRobot : faUser} />
                                    </div>
                                    <div className="message-content">
                                        <div className="message-text">{msg.text}</div>
                                        <span className="message-time">
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {isTyping && (
                                <div className="message-wrapper bot">
                                    <div className="message-avatar">
                                        <FontAwesomeIcon icon={faRobot} />
                                    </div>
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestions Area */}
                        <div className="chat-suggestions">
                            <div className="suggestions-scroll">
                                {suggestions.map((q, i) => (
                                    <button
                                        key={i}
                                        className="suggestion-tag"
                                        onClick={() => handleSuggestionClick(q)}
                                    >
                                        {q}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Input Area */}
                        <form className="chat-input-area" onSubmit={handleSendMessage}>
                            <input
                                type="text"
                                placeholder="Write your message here..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button type="submit" className="chat-send-btn" disabled={!inputValue.trim()}>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </form>
                        <div className="chat-footer">
                            Powered by Albright Clinic Care Team
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
