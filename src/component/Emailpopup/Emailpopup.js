import React, { useState } from "react";
import "../Emailpopup/Emailpopup.scss";

const Emailpopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Add logic to handle email submission (e.g., send to server)
    setSubmitted(true);
  };

  return (
    <div className={`email-popup ${submitted ? "submitted" : ""}`}>
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {!submitted ? (
          <>
            <h2>Email Subscription</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <button onClick={handleSubmit}>Submit</button>
          </>
        ) : (
          <>
            <h2>Thank you!</h2>
            <p>You have successfully subscribed to our email list!</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Emailpopup;