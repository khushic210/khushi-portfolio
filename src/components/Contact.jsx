import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal.jsx";
import Eyebrow from "./Eyebrow.jsx";
import SocialRow from "./SocialRow.jsx";
import { CONTACT } from "../data/content.js";

const INFO = [
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: MapPin, label: "Location", value: CONTACT.location, href: null },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    // No backend is wired up here — this just confirms submission in the UI.
    // Hook this up to Formspree, EmailJS, or your own API route to actually
    // deliver messages to your inbox.
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section">
      <Reveal><Eyebrow>07 · Contact</Eyebrow></Reveal>
      <Reveal delay={60}><h2 className="section-title">Let's build something together</h2></Reveal>

      <div className="contact-grid">
        <Reveal delay={100}>
          <div className="glass card contact-info">
            {INFO.map((it) => (
              <div className="contact-info-row" key={it.label}>
                <span className="contact-icon">
                  <it.icon size={17} strokeWidth={1.8} />
                </span>
                <div>
                  <span className="contact-label">{it.label}</span>
                  {it.href ? (
                    <a className="contact-value" href={it.href}>
                      {it.value}
                    </a>
                  ) : (
                    <span className="contact-value">{it.value}</span>
                  )}
                </div>
              </div>
            ))}
            <div className="contact-socials">
              <SocialRow size="sm" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <form className="glass card contact-form" onSubmit={submit}>
            <div className="form-row">
              <label>
                Name
                <input required value={form.name} onChange={update("name")} placeholder="Your name" />
              </label>
              <label>
                Email
                <input required type="email" value={form.email} onChange={update("email")} placeholder="you@email.com" />
              </label>
            </div>
            <label>
              Subject
              <input required value={form.subject} onChange={update("subject")} placeholder="What's this about?" />
            </label>
            <label>
              Message
              <textarea required rows={5} value={form.message} onChange={update("message")} placeholder="Write your message..." />
            </label>
            <button className="btn btn-primary" type="submit">
              {sent ? (
                <>
                  <CheckCircle2 size={16} /> Message sent
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
