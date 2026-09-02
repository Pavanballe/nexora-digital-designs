import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const WHATSAPP_NUMBER = "917995692429";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const business = String(data.get("business") || "").trim();
    const message = String(data.get("message") || "").trim();

    const whatsappMessage = [
      "NEW NEXORA PROJECT ENQUIRY",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Business: ${business || "Not provided"}`,
      "",
      "Project requirements:",
      message,
      "",
      "Sent from Nexora Digital Designs website.",
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(whatsappMessage);

    setSending(true);
    setError("");

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key:
              "d45e4a1a-14d9-47f2-99ff-201a2d8c1df0",
            name,
            email,
            business: business || "Not provided",
            message,
            subject:
              `New Nexora Project Enquiry â€” ${name}`,
            replyto: email,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message || "Email delivery failed"
        );
      }

      setSubmitted(true);
      form.reset();
    } catch (submitError) {
      console.error(submitError);
      setError(
        "WhatsApp was opened with your enquiry. Email delivery could not be confirmed yet."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact contact--cosmic">
      <div className="contact__stars" aria-hidden="true">
        {Array.from({ length: 32 }, (_, index) => (
          <span
            key={index}
            style={{
              "--star-left": `${(index * 47) % 100}%`,
              "--star-top": `${(index * 61) % 100}%`,
              "--star-delay": `${(index % 9) * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="contact__nebula contact__nebula--one" />
      <div className="contact__nebula contact__nebula--two" />

      <div className="contact__portal" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="contact__container">
        <motion.div
          className="contact__intro cinematic-reveal"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact__eyebrow">
            <span />
            FINAL DESTINATION
            <span />
          </div>

          <h2>
            Ready to build
            <strong>what comes next?</strong>
          </h2>

          <p>
            Tell us where you want to go. We'll help turn the idea into a
            digital experience built for the journey ahead.
          </p>
        </motion.div>

        <div className="contact__grid">
          <motion.div
            className="contact__info cinematic-reveal"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <span className="contact__mini-label">TRANSMISSION CHANNEL</span>

            <h3>
              Let's make
              <br />
              something
              <br />
              <span>remarkable.</span>
            </h3>

            <p>
              Whether you have a complete project brief or just the beginning
              of an idea, send us a message and let's start the conversation.
            </p>

            <div className="contact__details">
              <a href={`mailto:nexoradigitaldesign@gmail.com`}>
                <span className="contact__detail-icon">
                  <Mail size={17} />
                </span>
                <div>
                  <small>EMAIL</small>
                  <strong>{"nexoradigitaldesign@gmail.com"}</strong>
                </div>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact__detail-icon">
                  <Phone size={17} />
                </span>
                <div>
                  <small>PHONE / WHATSAPP</small>
                  <strong>+91 799 569 2429</strong>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form cinematic-reveal"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <Send size={22} />
                </div>
                <span>TRANSMISSION RECEIVED</span>
                <h3>Your message has been launched.</h3>
                <p>
                  Your enquiry was sent by email and prepared in WhatsApp.
                </p>
                <button
                  type="button"
                  className="contact__reset"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="contact__form-heading">
                  <span>
                    <Sparkles size={13} />
                    START A PROJECT
                  </span>
                  <small>01 / 04</small>
                </div>

                <div className="contact__fields">
                  <label>
                    <span>Your name</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                    />
                  </label>

                  <label>
                    <span>Email address</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@company.com"
                      required
                    />
                  </label>

                  <label>
                    <span>Business / brand</span>
                    <input
                      type="text"
                      name="business"
                      placeholder="Your business name"
                    />
                  </label>

                  <label>
                    <span>Tell us about the project</span>
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="What are you looking to build?"
                      required
                    />
                  </label>
                </div>

                {error && (
                  <p
                    style={{
                      marginTop: "12px",
                      color: "#ff9b9b",
                      fontSize: "12px",
                      lineHeight: 1.6,
                    }}
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="contact__submit"
                  disabled={sending}
                >
                  {sending ? "Launching..." : "Send transmission"}
                  <ArrowUpRight size={18} />
                </button>
              </>
            )}
          </motion.form>
        </div>

        <motion.div
          className="contact__footer-line cinematic-reveal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>
            <i />
            NEXORA DIGITAL DESIGNS
          </span>
          <p>THE JOURNEY DOESN'T END HERE.</p>
        </motion.div>
      </div>
    </section>
  );
}
