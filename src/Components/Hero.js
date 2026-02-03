import React from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp, faCircleCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  React.useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <motion.div
          className="text-section"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-headline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            🧠 Mental Wellness First
          </motion.p>
          <motion.h2
            className="text-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Compassionate Psychiatric & Behavioral Healthcare You Can Trust
          </motion.h2>
          <motion.p
            className="text-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Albright Clinic is a leading provider of mental health and behavioral services in Richmond, Texas.
            We offer comprehensive psychiatric care for adolescents and adults, helping individuals achieve
            emotional stability, mental clarity, and improved quality of life through personalized,
            evidence-based treatment.
          </motion.p>
          <motion.button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </motion.button>
          <motion.div
            className="hero-benefits"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            <div className="benefit-item">
              <FontAwesomeIcon icon={faCircleCheck} className="benefit-icon" style={{ color: '#1A8EFD' }} />
              <p>Same-day appointments available</p>
            </div>

            <div className="benefit-item">
              <FontAwesomeIcon icon={faCircleCheck} className="benefit-icon" style={{ color: '#1A8EFD' }} />
              <p>Modern facility with caring, experienced staff</p>
            </div>

            <div className="benefit-item">
              <FontAwesomeIcon icon={faCircleCheck} className="benefit-icon" style={{ color: '#1A8EFD' }} />
              <p>Insurance accepted + transparent pricing</p>
            </div>

            <div className="benefit-item">
              <FontAwesomeIcon icon={faClock} className="benefit-icon" style={{ color: '#1A8EFD' }} />
              <p>24/7 Support</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-section"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </motion.div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
