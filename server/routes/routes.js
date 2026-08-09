import express from "express";
import { sendContactEmail } from "../services/services.js";

const router = express.Router();

router.post("/config/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    await sendContactEmail({ name, email, message });
    res.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
});

export default router;