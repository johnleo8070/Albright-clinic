import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import Contact from "./Pages/Contact";
import Psychiatry from "./Pages/Psychiatry";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService";
import Chatbot from "./Components/Chatbot";
import Bipolar from "./Pages/Bipolar";
import Depression from "./Pages/Depression";
import Anxiety from "./Pages/Anxiety";
import Adhd from "./Pages/Adhd";
import Ptsd from "./Pages/Ptsd";
import MoodDisorders from "./Pages/MoodDisorders";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/psychiatry" element={<Psychiatry />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/conditions/bipolar" element={<Bipolar />} />
          <Route path="/conditions/depression" element={<Depression />} />
          <Route path="/conditions/anxiety" element={<Anxiety />} />
          <Route path="/conditions/adhd" element={<Adhd />} />
          <Route path="/conditions/ptsd" element={<Ptsd />} />
          <Route path="/conditions/mood-disorders" element={<MoodDisorders />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </Router>
    </div>
  );
}

export default App;

