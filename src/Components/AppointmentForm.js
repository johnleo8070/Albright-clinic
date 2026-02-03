import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faCircleInfo,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import logo from "../Assets/albright-logo.jpg";
import "../Styles/AppointmentForm.css";

const AppointmentForm = () => {
  const [step, setStep] = useState(1);
  const [visitMode, setVisitMode] = useState("In-person");
  const [patientType, setPatientType] = useState("New patient");
  const [selectedDate, setSelectedDate] = useState("Feb 3");
  const [selectedTime, setSelectedTime] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    reasonForVisit: "",
    firstName: "",
    lastName: "",
    email: "",
    patientNumber: "",
    dob: "",
    sex: "Male",
    insuranceProvider: "Self-pay only (no insurance accepted)",
    additionalNotes: "",
    hearAboutUs: "",
    termsAgreed: false,
    smsOptIn: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleNextStep = () => {
    if (step === 1 && !selectedTime) {
      toast.warn("Please select an appointment time");
      return;
    }
    setStep(prev => prev + 1);
  };

  const handleBackStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      appointmentTime: `${selectedDate} at ${selectedTime}`,
      preferredMode: visitMode,
      patientType
    };

    try {
      const response = await fetch("http://localhost:5000/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        toast.success("Appointment request sent successfully!");
        // Redirect or show success state
        setTimeout(() => window.location.href = "/", 3000);
      } else {
        toast.error("Failed to send request. Please try again.");
      }
    } catch (error) {
      toast.error("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const dates = [
    { day: "TUE", date: "Feb 3" },
    { day: "WED", date: "Feb 4" },
    { day: "THU", date: "Feb 5" },
    { day: "FRI", date: "Feb 6" },
    { day: "SAT", date: "Feb 7" }
  ];

  const timeSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", "2:00 PM"];

  return (
    <div className="appointment-form-section">
      <div className="form-container">
        <h2 className="form-title">Book an appointment</h2>

        {/* Progress Steps */}
        <div className="appointment-steps">
          <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <div className="step-number">{step > 1 ? "✓" : "1"}</div>
            <span className="step-label">Appointment details</span>
          </div>
          <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <div className="step-number">{step > 2 ? "✓" : "2"}</div>
            <span className="step-label">Contact info</span>
          </div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <div className="step-number">3</div>
            <span className="step-label">Insurance info</span>
          </div>
        </div>

        {/* Step 1: Selection */}
        {step === 1 && (
          <div className="step-content">
            <div className="patient-type-selection">
              <div
                className={`type-option ${patientType === "New patient" ? "selected" : ""}`}
                onClick={() => setPatientType("New patient")}
              >
                <div className="radio-circle"><div className="radio-inner"></div></div>
                <span>New patient</span>
              </div>
              <div
                className={`type-option ${patientType === "Returning patient" ? "selected" : ""}`}
                onClick={() => setPatientType("Returning patient")}
              >
                <div className="radio-circle"><div className="radio-inner"></div></div>
                <span>Returning patient</span>
              </div>
            </div>

            <div className="selection-grid">
              <div className="left-panel">
                <div className="visit-mode-toggle">
                  <button
                    className={`mode-btn ${visitMode === "In-person" ? "active" : ""}`}
                    onClick={() => setVisitMode("In-person")}
                  >
                    In-person
                  </button>
                  <button
                    className={`mode-btn ${visitMode === "Virtual visit" ? "active" : ""}`}
                    onClick={() => setVisitMode("Virtual visit")}
                  >
                    Virtual visit
                  </button>
                </div>

                <div className="clinic-info-bar">
                  <img src={logo} alt="Albright Logo" className="clinic-logo-small" />
                  <div className="clinic-details">
                    <h4>ALBRIGHT CLINIC</h4>
                    <p>20711 Slate CT</p>
                    <p>RICHMOND, TX 77407</p>
                    <div className="timezone-info">
                      <FontAwesomeIcon icon={faCircleInfo} />
                      <span>Appointments in CDT</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right-panel">
                <div className="time-slots-container">
                  <div className="date-carousel">
                    {dates.map((d, i) => (
                      <div
                        key={i}
                        className={`date-item ${selectedDate === d.date ? 'active' : ''}`}
                        onClick={() => setSelectedDate(d.date)}
                      >
                        <span className="day-label">{d.day}</span>
                        <span className="date-label">{d.date}</span>
                      </div>
                    ))}
                  </div>
                  <div className="slots-grid">
                    {timeSlots.map((ts, i) => (
                      <div
                        key={i}
                        className={`slot ${selectedTime === ts ? 'selected' : ''}`}
                        onClick={() => setSelectedTime(ts)}
                      >
                        {ts}
                      </div>
                    ))}
                    <div className="more-slots">more</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <div></div>
              <button className="continue-btn" onClick={handleNextStep}>
                Continue <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Contact Info */}
        {step === 2 && (
          <div className="step-content">
            <div className="form-section">
              <div className="input-group">
                <label>Reason for visit</label>
                <input
                  type="text"
                  name="reasonForVisit"
                  value={formData.reasonForVisit}
                  onChange={handleInputChange}
                  placeholder="e.g. Anxiety, Depression, Evaluation"
                />
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="patientNumber"
                    value={formData.patientNumber}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
              </div>

              <div className="input-group">
                <label>Sex (Optional)</label>
                <div className="sex-selection">
                  {["Male", "Female", "Other"].map(s => (
                    <label key={s} className="sex-option">
                      <input
                        type="radio"
                        name="sex"
                        value={s}
                        checked={formData.sex === s}
                        onChange={handleInputChange}
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              <div className="agreement-section">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="terms"
                    name="termsAgreed"
                    checked={formData.termsAgreed}
                    onChange={handleInputChange}
                    required
                  />
                  <label htmlFor="terms">
                    I have read and agreed to the <Link to="/legal">Privacy Policy</Link> and <Link to="/legal">Terms of Use</Link> that I am at least 13 and have the authority to make this appointment.
                  </label>
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="sms"
                    name="smsOptIn"
                    checked={formData.smsOptIn}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="sms">
                    I agree to receive SMS alerts regarding appointments, care and coupons for Albright Clinic. Reply HELP for help and STOP to cancel. Message frequency varies. Message and Data rates may apply.
                  </label>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button className="back-btn" onClick={handleBackStep}>Back</button>
              <button className="continue-btn" onClick={handleNextStep}>
                Continue <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Insurance Info */}
        {step === 3 && (
          <div className="step-content">
            <div className="form-section">
              <div className="input-group">
                <label>Insurance</label>
                <select
                  name="insuranceProvider"
                  value={formData.insuranceProvider}
                  onChange={handleInputChange}
                >
                  <option>Self-pay only (no insurance accepted)</option>
                  <option>Medicare</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="input-group">
                <label>Additional notes for the practice (Optional)</label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  placeholder="Enter any additional information..."
                ></textarea>
              </div>

              <div className="input-group">
                <label>How did you hear about us? (Optional)</label>
                <select
                  name="hearAboutUs"
                  value={formData.hearAboutUs}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option>Online search e.g. Google, Bing</option>
                  <option>Online review site e.g. Yelp, Healthgrades</option>
                  <option>Referral from healthcare provider</option>
                  <option>Referral from friend/colleague</option>
                </select>
              </div>
            </div>

            <div className="form-actions">
              <button className="back-btn" onClick={handleBackStep}>Back</button>
              <button
                className="continue-btn"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Confirm Appointment"}
                {!isSubmitting && <FontAwesomeIcon icon={faChevronRight} />}
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
};

export default AppointmentForm;
