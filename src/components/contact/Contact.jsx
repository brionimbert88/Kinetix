import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { emailMessage } from "../../services/Configuration";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubmitStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailMessage({ name, email, message });
      handleReset();
      setSubmitStatus({
        type: "success",
        message: "Your message was sent successfully.",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.response?.status === 502
            ? "The contact service is unavailable. Please try again later."
            : error.response?.data?.error ||
              "We could not send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2 className="contact-subtitle">Initialize Connection</h2>
        <h1 className="contact-title">Contact the Group</h1>
        <p className="contact-copy">
          Drop us a transmission line to discuss deployments or network
          configurations.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <TextField
          fullWidth
          label="Your Name or Company Name"
          variant="outlined"
          size="small"
          className="contact-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <TextField
          fullWidth
          label="Email Address"
          type="email"
          variant="outlined"
          size="small"
          className="contact-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          fullWidth
          label="Your Message"
          multiline
          rows={4}
          placeholder="Outline your project scope or architectural request..."
          variant="outlined"
          className="contact-input"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        {submitStatus && (
          <p
            className={`contact-status contact-status-${submitStatus.type}`}
            role={submitStatus.type === "error" ? "alert" : "status"}
          >
            {submitStatus.message}
          </p>
        )}

        <Button
          type="reset"
          variant="outlined"
          size="large"
          className="contact-button"
          onClick={handleReset}
          disabled={isSubmitting}
        >
          Reset Form
        </Button>

        <Button
          type="submit"
          variant="contained"
          size="large"
          className="contact-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Submit Message"}
        </Button>
      </form>
        <Button
          component={Link}
          to="/"
          variant="outlined"
          size="large"
          className="contact-home-button"
        >
          Back to Home Page
        </Button>
    </section>
  );
}