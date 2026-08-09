import React, {useState} from "react";
import { Button, TextField } from "@mui/material";
import {emailMessage} from "../../services/Configuration";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailBody = { name, email, message }

    try {
      await emailMessage(emailBody).then((response) => {
        console.log("Email sent successfully:", response)
        handleReset();
      })
    } catch (error) {
      console.error("Error sending email:", error);
    }

  }

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
        />

        <Button type="reset" variant="outlined" size="large" className="contact-button" onClick={handleReset}>
          Reset Form
        </Button>

        <Button
          type="submit"
          variant="contained"
          size="large"
          className="contact-button"
          onClick={handleSubmit}
        >
          Submit Message
        </Button>
      </form>
    </section>
  );
}