import { Router } from "express";
import { notifyNewInquiry } from "../lib/twilioClient.js";
import { saveInquiry, listInquiries } from "../lib/store.js";

const router = Router();

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }
  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const entry = saveInquiry({ name, email, phone: phone || "", message });

  try {
    await notifyNewInquiry({ name, email, phone, message });
  } catch (err) {
    // Notification failure should not fail the request — the inquiry is already saved.
    console.error("[contact] Twilio notification error:", err.message);
  }

  return res.status(201).json({ success: true, id: entry.id });
});

// Lightweight admin listing endpoint (protect this behind auth before production use)
router.get("/", (_req, res) => {
  res.json(listInquiries());
});

export default router;
