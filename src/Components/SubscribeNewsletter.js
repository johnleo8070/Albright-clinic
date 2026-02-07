import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubscribeNewsletter() {
  const [inputEmail, setInputEmail] = React.useState("");
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(false);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const handleEmailInput = (event) => {
    setInputEmail(event.target.value);
  };

  const handleBookAppointmentClick = async () => {
    if (!isButtonDisabled) {
      if (emailRegex.test(inputEmail)) {
        setIsButtonDisabled(true);
        try {
          const response = await fetch("https://m593zws0-5000.uks1.devtunnels.ms/api/newsletter", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: inputEmail }),
          });

          if (response.ok) {
            toast.success("Subscribed to Newsletter !", {
              position: toast.POSITION.TOP_CENTER,
              onOpen: () => setInputEmail(""),
              onClose: () => setIsButtonDisabled(false),
            });
          } else {
            toast.error("Subscription failed. Please try again.");
            setIsButtonDisabled(false);
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("Server error. Please try again later.");
          setIsButtonDisabled(false);
        }
      } else {
        toast.error("Invalid Email Address !", {
          position: toast.POSITION.TOP_CENTER,
          onOpen: () => setIsButtonDisabled(true),
          onClose: () => setIsButtonDisabled(false),
        });
      }
    }
  };

  return (
    <div className="ft-info-p2">
      <p className="ft-input-title">Stay Updated with our Newsletter</p>
      <input
        type="text"
        inputMode="email"
        className="ft-input"
        placeholder="Enter your email address"
        name="email"
        value={inputEmail}
        onChange={handleEmailInput}
        autoComplete="true"
      />
      <button
        className="text-appointment-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleBookAppointmentClick}
      >
        Subscribe
      </button>

      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
}

export default SubscribeNewsletter;
