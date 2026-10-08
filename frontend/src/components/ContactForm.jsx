import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

const initial = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      await axios.post("/api/contact", form);
      setStatus("success");
      setForm(initial);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.response?.data?.error || "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-semibold tracking-wide text-slate mb-2">
            Full Name
          </label>
          <input
            required
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Your name"
            className="w-full border-0 border-b border-line bg-transparent px-0 py-3 text-base text-ink placeholder:text-slate/50 focus:outline-none focus:border-forest"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-wide text-slate mb-2">
            Phone
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            placeholder="+1 (___) ___-____"
            className="w-full border-0 border-b border-line bg-transparent px-0 py-3 text-base text-ink placeholder:text-slate/50 focus:outline-none focus:border-forest"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold tracking-wide text-slate mb-2">
          Email
        </label>
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          placeholder="you@company.com"
          className="w-full border-0 border-b border-line bg-transparent px-0 py-3 text-base text-ink placeholder:text-slate/50 focus:outline-none focus:border-forest"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold tracking-wide text-slate mb-2">
          Message
        </label>
        <textarea
          required
          rows={5}
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Tell us about your project..."
          className="w-full border-0 border-b border-line bg-transparent px-0 py-3 text-base text-ink placeholder:text-slate/50 focus:outline-none focus:border-forest resize-none"
        />
      </div>

      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-sm bg-sun text-forest font-semibold px-8 py-3.5 hover:bg-forest hover:text-white disabled:opacity-60"
      >
        {status === "loading" && <Loader2 size={16} className="animate-spin" />}
        {status === "loading" ? "Sending..." : "Send Inquiry"}
      </motion.button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-forest">
          <CheckCircle2 size={16} /> Thanks! We've received your inquiry and will reach out shortly.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle size={16} /> {errorMsg}
        </p>
      )}
    </form>
  );
}
