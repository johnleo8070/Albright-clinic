const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Debug: Check if .env is loaded (Safe check: only shows if values exist, not the secrets themselves)
console.log("Environment check:");
console.log("- EMAIL_USER is", process.env.EMAIL_USER ? "DEFINED ✅" : "NOT DEFINED ❌");
console.log("- EMAIL_PASS is", process.env.EMAIL_PASS ? "DEFINED ✅" : "NOT DEFINED ❌");
console.log("- RECEIVER_EMAIL is", process.env.RECEIVER_EMAIL ? "DEFINED ✅" : "NOT DEFINED ❌");


// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use SSL/TLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
    socketTimeout: 20000,
});

// Verify Transporter
transporter.verify((error, success) => {
    if (error) {
        console.error("❌ Transporter verification failed at startup!");
        console.error("Error Message:", error.message);
        console.error("Error Code:", error.code);

        if (error.code === 'EAUTH') {
            console.error("\n--- GMAIL AUTH ERROR ---");
            console.error("Your credentials were rejected. You MUST use a 16-character App Password.");
            console.error("------------------------\n");
        } else if (error.code === 'ECONNRESET' || error.code === 'ESOCKET') {
            console.error("\n--- CONNECTION ERROR ---");
            console.error("The connection was dropped. This is often caused by a Firewall or Antivirus.");
            console.error("Try disabling any local firewall or using a different network (hotspot).");
            console.error("------------------------\n");
        }
    } else {
        console.log("✅ Server is ready to send emails");
    }
});

// Routes
app.post("/api/appointment", async (req, res) => {
    const {
        patientType,
        firstName,
        lastName,
        email,
        patientNumber,
        dob,
        sex,
        reasonForVisit,
        insuranceProvider,
        additionalNotes,
        hearAboutUs,
        appointmentTime,
        preferredMode,
        smsOptIn
    } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
        subject: "New Appointment Request - Albright Clinic",
        text: `
      New Appointment Request Details:
      
      Patient Type: ${patientType}
      Patient Name: ${firstName} ${lastName}
      Email: ${email}
      Phone Number: ${patientNumber}
      Date of Birth: ${dob}
      Sex: ${sex}
      Reason for Visit: ${reasonForVisit}
      Insurance Provider: ${insuranceProvider}
      Preferred Mode: ${preferredMode}
      Appointment Time: ${appointmentTime}
      How did they hear about us: ${hearAboutUs}
      SMS Opt-In: ${smsOptIn ? "YES" : "NO"}
      
      Additional Notes:
      ${additionalNotes}
    `,
    };

    try {
        console.log("Attempting to send appointment email for:", firstName, lastName);
        await transporter.sendMail(mailOptions);
        console.log("✅ Appointment email sent successfully");
        res.status(200).json({ message: "Appointment request sent successfully!" });
    } catch (error) {
        console.error("❌ Error sending appointment email:", error.message);
        res.status(500).json({ error: "Failed to send appointment request.", details: error.message });
    }
});

app.post("/api/contact", async (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
        subject: `Contact Form: ${subject}`,
        text: `
      New message from Contact Form:
      
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}
    `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
        console.error("Error sending contact email:", error);
        res.status(500).json({ error: "Failed to send message." });
    }
});

app.post("/api/newsletter", async (req, res) => {
    const { email } = req.body;
    console.log("Newsletter subscription for:", email);

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.RECEIVER_EMAIL || process.env.EMAIL_USER,
        subject: "New Newsletter Subscription",
        text: `New subscriber email: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("✅ Newsletter email sent successfully");
        res.status(200).json({ message: "Subscribed successfully!" });
    } catch (error) {
        console.error("❌ Error sending newsletter email:", error.message);
        res.status(500).json({ error: "Failed to subscribe.", details: error.message });
    }
});

app.get("/", (req, res) => {
    res.send("Albright Clinic Server is running!");
});

app.get("/api", (req, res) => {
    res.send("Albright Clinic Server is running at /api!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
