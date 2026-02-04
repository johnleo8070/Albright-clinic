import React from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function TermsOfService() {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section">
      <div className="legal-text-content">
        <h1 className="legal-title">Terms of Service</h1>
        <p className="legal-description">
          Welcome to Albright Clinic. These Terms of Service ("Terms") govern your access to and use of our
          website, services, and any related content provided by Albright Clinic ("we," "us," or "our"). By accessing
          our website or using our services, you agree to be bound by these Terms.
        </p>

        <h2 className="legal-subtitle">1. Use of Website</h2>
        <p className="legal-description">
          The content on this website is provided for general informational purposes only and is not intended as
          medical advice, diagnosis, or treatment. Use of this website does not create a doctor-patient
          relationship between you and Albright Clinic.
        </p>
        <p className="legal-description">
          You agree to use this website only for lawful purposes and in a manner that does not infringe the rights
          of others or restrict their use of the website.
        </p>

        <h2 className="legal-subtitle">2. Medical Disclaimer</h2>
        <p className="legal-description">
          All mental health and behavioral services provided by Albright Clinic are delivered only after a formal
          intake process and scheduled appointment. Information on this website should not be relied upon as a
          substitute for professional medical advice.
        </p>
        <p className="legal-description">
          If you are experiencing a mental health emergency, call 911 or your local emergency number
          immediately.
        </p>

        <h2 className="legal-subtitle">3. Appointments and Services</h2>
        <p className="legal-description">
          Appointments with Albright Clinic are by scheduling only. Availability of services may vary and is subject
          to change without notice. We reserve the right to refuse or discontinue services at our discretion, in
          accordance with applicable laws and ethical guidelines.
        </p>

        <h2 className="legal-subtitle">4. User Responsibilities</h2>
        <p className="legal-description">
          By using our website or services, you agree that:
        </p>
        <ul className="legal-list">
          <li>Information you provide is accurate and complete</li>
          <li>You will not misuse or attempt to disrupt our website</li>
          <li>You will respect confidentiality and privacy standards</li>
          <li>You will not attempt to access restricted areas of the website</li>
          <li>You will comply with all applicable laws and regulations</li>
        </ul>

        <h2 className="legal-subtitle">5. Intellectual Property</h2>
        <p className="legal-description">
          All content on this website, including text, graphics, logos, and images, is the property of Albright Clinic
          and is protected by copyright and other intellectual property laws. Unauthorized use of any content may
          violate copyright, trademark, and other laws.
        </p>

        <h2 className="legal-subtitle">6. Limitation of Liability</h2>
        <p className="legal-description">
          Albright Clinic shall not be liable for any direct, indirect, incidental, special, or consequential damages
          resulting from the use or inability to use the website or services, even if we have been advised of the
          possibility of such damages.
        </p>

        <h2 className="legal-subtitle">7. Changes to Terms</h2>
        <p className="legal-description">
          We reserve the right to modify these Terms at any time. Your continued use of the website after any changes
          constitutes your acceptance of the new Terms.
        </p>

        <h2 className="legal-subtitle">8. Contact Us</h2>
        <p className="legal-description">
          If you have any questions about these Terms, please contact us at:
          <br /><br />
          <strong>Email:</strong> info@albrightclinic.com<br />
          <strong>Phone:</strong> (713) 624-0727<br />
          <strong>Address:</strong> [Clinic Address], Richmond, TX
        </p>

        <p className="legal-update">
          <em>Last updated: February 2024</em>
        </p>
      </div>
    </div>
  );
}

export default TermsOfService;
