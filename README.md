# Konark Energy — React + Node/Twilio Website

Full rebuild of the Konark Energy site: React (Vite + Tailwind CSS v4) frontend,
Node/Express backend, and Twilio SMS + WhatsApp notifications for new contact
form inquiries. Same content, copy and images as the original site — new
design, animation and stack.

```
konark-app/
├── frontend/   React (Vite) + Tailwind + Framer Motion + Embla Carousel
└── backend/    Express API + Twilio (SMS/WhatsApp) + JSON inquiry store
```

## 1. Quick start — run both together

From the project root (`konark-app/`), one-time setup then a single command
starts frontend + backend together:

```bash
npm run setup   # installs deps for root, backend and frontend, creates backend/.env
npm run dev     # starts backend (http://localhost:5000) + frontend (http://localhost:5173)
```

You'll see `[BACKEND]` and `[FRONTEND]` logs interleaved in the same
terminal. Stop both with `Ctrl+C`. Open **http://localhost:5173** in your
browser — the frontend proxies any `/api/*` request to the backend
automatically.

Add your real Twilio credentials to `backend/.env` any time (see below) —
just restart `npm run dev` after editing it.

## 1b. Running them separately (optional)

If you'd rather run each on its own (e.g. separate terminals/logs):

```bash
# Terminal 1
cd backend
npm install
cp .env.example .env
npm run dev         # http://localhost:5000 (nodemon)

# Terminal 2
cd frontend
npm install
npm run dev          # http://localhost:5173
```

To build the frontend for production: `cd frontend && npm run build`
(outputs to `frontend/dist`).

## 2. Twilio setup (for contact-form SMS + WhatsApp alerts)

1. Create a free account at https://www.twilio.com/try-twilio and grab your
   **Account SID** and **Auth Token** from the console.
2. Buy/enable a Twilio phone number for SMS, and join/enable the Twilio
   WhatsApp sandbox (or an approved WhatsApp sender) for WhatsApp.
3. Fill these into `backend/.env`:

```
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_SMS_FROM=+1XXXXXXXXXX          # your Twilio number
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
NOTIFY_SMS_TO=+1XXXXXXXXXX            # business phone to alert
NOTIFY_WHATSAPP_TO=whatsapp:+1XXXXXXXXXX
```

Without these set, the contact form still works and inquiries are still
saved — the backend just logs a warning and skips the Twilio send, so local
development doesn't require live credentials.

Submitted inquiries are stored in `backend/data/inquiries.json` and can be
viewed at `GET /api/contact` (add auth before exposing this publicly).

## 3. What's included

- Home page: hero, "Who We Are", Mission, Solar PV Modules & Energy Storage
  feature sections, "Sectors We Power" carousel, certification strip, closing
  CTA — all using your original Konark copy and product/certification images.
- About, Solar Modules, Energy Storage, Battery Cells, Contact — routed pages
  in the same design system, ready for you to drop in final copy (they're
  marked with a "Content Placeholder" note where the real subpage content
  from the live site wasn't included in the original export).
- Contact page with a working form wired to the backend.
- Design: warm paper background, sun-orange + forest-green palette (drawn
  from the Konark logo), Space Grotesk / Inter / IBM Plex Mono type system,
  scroll-reveal animations, a rotating "sunburst" motif, and button shine
  effects.

## Note on hero background images

The original site's large hero background photos were hotlinked from
`jaitaramani.com` and weren't included in your exported files, so they
couldn't be carried over. They've been replaced with an animated
gradient/sunburst treatment. Every product photo, logo and certification
image from your export is used as-is.
