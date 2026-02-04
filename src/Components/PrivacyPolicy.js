import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-section">
      <div className="legal-text-content">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-description">
          Albright Clinic ("we," "us," or "our") is committed to protecting your privacy and safeguarding your personal and health information. 
          This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website or use our mental health 
          and behavioral health services.
        </p>

        <h2 className="legal-subtitle">1. Information We Collect</h2>
        <p className="legal-description">
          We may collect the following types of information:
        </p>
        
        <h3 className="legal-subsection">Personal Information</h3>
        <ul className="legal-list">
          <li>Name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Appointment details</li>
        </ul>

        <h3 className="legal-subsection">Health Information</h3>
        <p className="legal-description">
          Health information is collected only when you become a patient and is protected under applicable healthcare 
          privacy laws, including HIPAA.
        </p>

        <h3 className="legal-subsection">Website Usage Information</h3>
        <ul className="legal-list">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Pages visited</li>
          <li>Date and time of visits</li>
        </ul>
        <p className="legal-description">
          This information helps us improve website performance and user experience.
        </p>

        <h2 className="legal-subtitle">2. How We Use Your Information</h2>
        <p className="legal-description">We use your information to:</p>
        <ul className="legal-list">
          <li>Schedule and manage appointments</li>
          <li>Provide mental health and behavioral services</li>
          <li>Respond to inquiries and requests</li>
          <li>Improve our website and services</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>

        <h2 className="legal-subtitle">3. Information Sharing and Disclosure</h2>
        <p className="legal-description">
          We do not sell or rent your personal information to third parties. We may share your information only in the following circumstances:
        </p>
        <ul className="legal-list">
          <li>With your explicit consent</li>
          <li>To comply with legal obligations</li>
          <li>To protect the rights and safety of our patients and others</li>
          <li>With service providers who assist in our operations</li>
        </ul>

        <h2 className="legal-subtitle">4. Your Rights</h2>
        <p className="legal-description">
          You have the right to:
        </p>
        <ul className="legal-list">
          <li>Access your personal information</li>
          <li>Request corrections to your information</li>
          <li>Request deletion of your information</li>
          <li>Withdraw consent for data processing</li>
        </ul>

        <h2 className="legal-subtitle">5. Contact Us</h2>
        <p className="legal-description">
          If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
          <br /><br />
          <strong>Email:</strong> bookings@albrightclinic.com<br />
          <strong>Phone:</strong> +1 (713) 624-0727<br />
          <strong>Address:</strong> 20711 Slate CT, RICHMOND TX 77407
        </p>

        <p className="legal-update">
          <em>Last updated: February 2026</em>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
