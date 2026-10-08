import twilio from "twilio";

const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN } = process.env;

const isConfigured = Boolean(TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN);

const client = isConfigured ? twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN) : null;

/**
 * Sends a new-inquiry alert to the business via SMS and/or WhatsApp using Twilio.
 * Silently no-ops (with a console warning) when Twilio env vars are not set,
 * so local development works without live credentials.
 */
export async function notifyNewInquiry({ name, email, phone, message }) {
  const body =
    `New Konark Energy website inquiry\n` +
    `Name: ${name}\n` +
    `Email: ${email}\n` +
    (phone ? `Phone: ${phone}\n` : "") +
    `Message: ${message}`;

  if (!isConfigured) {
    console.warn("[twilio] Skipping notification — TWILIO_ACCOUNT_SID / TWILIO_AUTH_TOKEN not set.");
    return { sms: null, whatsapp: null, skipped: true };
  }

  const results = { sms: null, whatsapp: null, skipped: false };

  if (process.env.TWILIO_SMS_FROM && process.env.NOTIFY_SMS_TO) {
    try {
      results.sms = await client.messages.create({
        body,
        from: process.env.TWILIO_SMS_FROM,
        to: process.env.NOTIFY_SMS_TO,
      });
    } catch (err) {
      console.error("[twilio] SMS send failed:", err.message);
    }
  }

  if (process.env.TWILIO_WHATSAPP_FROM && process.env.NOTIFY_WHATSAPP_TO) {
    try {
      results.whatsapp = await client.messages.create({
        body,
        from: process.env.TWILIO_WHATSAPP_FROM,
        to: process.env.NOTIFY_WHATSAPP_TO,
      });
    } catch (err) {
      console.error("[twilio] WhatsApp send failed:", err.message);
    }
  }

  return results;
}

export default client;
