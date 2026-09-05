import React, { useState } from "react";
import "./threeui-home.css";
import {
  NebulaBackground,
  ParticleNetwork,
  WarpFieldBackground,
} from "@designcodeio/threeui";

const WHATSAPP_NUMBER = "917995692429";
const BUSINESS_EMAIL = "nexoradigitaldesigns@gmail.com";

export default function ThreeUIHome() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const business = String(data.get("business") || "").trim();
    const message = String(data.get("message") || "").trim();

    setSending(true);
    setSent(false);
    setError("");

    const enquiry = [
      "NEXORA DIGITAL DESIGNS - NEW CLIENT ENQUIRY",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Business / Brand: ${business}`,
      "",
      "Project requirements:",
      message,
    ].join("\n");

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry)}`;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "67b4c0d2-590f-4539-8f8d-3d761ed6f027",
          subject: `New Nexora Project Enquiry - ${business || name}`,
          from_name: "Nexora Digital Designs Website",
          name,
          email,
          business,
          message,
          replyto: email,
        }),
      });

      const result = await response.json();

      console.log("Web3Forms response:", result);

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message || "Web3Forms could not deliver the enquiry."
        );
      }

      setSent(true);
      form.reset();

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    } catch (err) {
      console.error("Web3Forms error:", err);

      setError(
        err?.message ||
        "Email delivery failed. Please try again or contact us directly."
      );

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    } finally {
      setSending(false);
    }
  }
  return (
    <main className="nx-site">
      <nav className="nx-nav">
        <a href="#home" className="nx-brand">NEXORA<span></span></a>

        <div className="nx-nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nx-nav-cta">
          Start a project <span></span>
        </a>
      </nav>

      <section id="home" className="nx-hero">
        <div className="nx-hero-visual">
          <NebulaBackground />
        </div>
        <div className="nx-hero-shade" />

        <div className="nx-hero-content">
          <p className="nx-eyebrow">NEXORA DIGITAL DESIGNS</p>

          <h1>
            WE DESIGN
            <br />
            WHAT'S
            <br />
            <em>NEXT.</em>
          </h1>

          <p className="nx-hero-copy">
            Websites, digital products and business experiences built to
            make your brand look better, work smarter and move forward.
          </p>

          <div className="nx-actions">
            <a href="#work" className="nx-button nx-button-light">
              Explore our work <span></span>
            </a>
            <a href="#contact" className="nx-button nx-button-ghost">
              Tell us your idea
            </a>
          </div>
        </div>

        <div className="nx-ticker">
          <span>WEB DESIGN</span>
          <b></b>
          <span>DEVELOPMENT</span>
          <b></b>
          <span>E-COMMERCE</span>
          <b></b>
          <span>BUSINESS SYSTEMS</span>
          <b></b>
          <span>BRAND EXPERIENCES</span>
          <b></b>
          <span>WEB DESIGN</span>
          <b></b>
        </div>
      </section>

      <section className="nx-intro nx-section">
        <div className="nx-intro-main">
          <p className="nx-eyebrow">THE STUDIO</p>
          <h2>
            IDEAS
            <br />
            DESIGNED
            <br />
            TO <em>MOVE.</em>
          </h2>
        </div>

        <div className="nx-intro-side">
          <div className="nx-orbit">
            <div className="nx-orbit-ring" />
            <div className="nx-orbit-core">NX</div>
          </div>
          <p>
            We help businesses turn ideas into digital experiences that
            customers understand, remember and want to use.
          </p>
          <p>
            From strategy and interface design to development and launch,
            everything is created around the business behind the brand.
          </p>
        </div>
      </section>

      <section id="services" className="nx-section nx-services">
        <div className="nx-section-heading">
          <div>
            <p className="nx-eyebrow">WHAT WE BUILD</p>
            <h2>DESIGNED FOR <em>IMPACT.</em></h2>
          </div>
          <p className="nx-heading-note">
            Digital experiences with purpose  not just another pretty
            website.
          </p>
        </div>

        <div className="nx-services-stage">
          <img
            className="nx-brand-stage-image"
            src="/nexora-brand-stage.png"
            alt="Nexora Digital Designs"
          />
        </div>

        <div className="nx-service-grid">
          <article className="nx-service-card nx-service-web">
            <div className="nx-service-art">
              <div className="nx-browser">
                <i /><i /><i />
                <strong>YOUR BRAND</strong>
                <span>Beautiful on every screen.</span>
              </div>
            </div>
            <div className="nx-card-top"><span>01</span><span>CREATIVE</span></div>
            <h3>WEB DESIGN</h3>
            <p>
              High-end interfaces with clear structure, strong visual
              identity and a smooth customer journey.
            </p>
            <a href="#contact">Build a better website </a>
          </article>

          <article className="nx-service-card nx-service-dev">
            <div className="nx-service-art">
              <div className="nx-code-art">
                <span>&lt;digital /&gt;</span>
                <span>experience()</span>
                <span>launch: true</span>
              </div>
            </div>
            <div className="nx-card-top"><span>02</span><span>TECH</span></div>
            <h3>WEB DEVELOPMENT</h3>
            <p>
              Fast, responsive and scalable builds that turn the design
              into a real working product.
            </p>
            <a href="#contact">Build it properly </a>
          </article>

          <article className="nx-service-card nx-service-system">
            <div className="nx-service-art">
              <div className="nx-mini-dashboard">
                <div /><div /><div />
                <span>LIVE SYSTEM</span>
              </div>
            </div>
            <div className="nx-card-top"><span>03</span><span>OPERATIONS</span></div>
            <h3>BUSINESS SYSTEMS</h3>
            <p>
              Dashboards, billing workflows and custom tools that remove
              repetitive work from everyday operations.
            </p>
            <a href="#contact">Simplify your workflow </a>
          </article>

          <article className="nx-service-card nx-service-shop">
            <div className="nx-service-art">
              <div className="nx-shop-art">
                <div>PRODUCT</div>
                <strong>ADD TO CART</strong>
              </div>
            </div>
            <div className="nx-card-top"><span>04</span><span>COMMERCE</span></div>
            <h3>E-COMMERCE</h3>
            <p>
              Product experiences designed to make browsing, discovering
              and buying feel effortless.
            </p>
            <a href="#contact">Create your store </a>
          </article>
        </div>
      </section>

      <section id="work" className="nx-section nx-work">
        <div className="nx-section-heading">
          <div>
            <p className="nx-eyebrow">SELECTED WORK</p>
            <h2>WORK THAT <em>SPEAKS.</em></h2>
          </div>
          <p className="nx-heading-note">
            A few digital experiences built for real businesses.
          </p>
        </div>

        <article className="nx-project nx-ohm">
          <div className="nx-project-info">
            <span className="nx-project-tag">JEWELLERY / E-COMMERCE</span>
            <h3>OHM<br />JEWELLERS</h3>
            <p>
              A premium jewellery experience designed to bring the elegance
              of the brand into a modern digital space.
            </p>
            <a
              href="https://ohm-jewellers.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="nx-project-link"
            >
              View live project <span></span>
            </a>
          </div>

          <div className="nx-ohm-visual">
            <div className="nx-ohm-lines" />
            <div className="nx-ohm-mark">OHM</div>
            <div className="nx-ohm-name">JEWELLERS</div>
            <div className="nx-ohm-est">EST. 1978</div>
          </div>
        </article>

        <article className="nx-project nx-bhanu">
          <div className="nx-project-info">
            <span className="nx-project-tag">BUSINESS / BILLING</span>
            <h3>BHANU<br />VISUALS</h3>
            <p>
              A streamlined billing platform built to make business
              operations faster, clearer and easier to manage.
            </p>
            <a
              href="https://bhanu-visuals-billing.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="nx-project-link"
            >
              View live project <span></span>
            </a>
          </div>

          <div className="nx-bhanu-visual">
            <div className="nx-dashboard-head">
              <strong>BHANU VISUALS</strong>
              <span>BUSINESS DASHBOARD</span>
            </div>
            <div className="nx-dashboard-stats">
              <div><strong>124</strong><span>CLIENTS</span></div>
              <div><strong>84K</strong><span>REVENUE</span></div>
              <div><strong>38</strong><span>INVOICES</span></div>
            </div>
            <div className="nx-dashboard-chart">
              <i /><i /><i /><i /><i /><i /><i />
            </div>
          </div>
        </article>
      </section>

      <section id="process" className="nx-section nx-process">
        <div className="nx-section-heading">
          <div>
            <p className="nx-eyebrow">HOW IT WORKS</p>
            <h2>IDEA TO <em>IMPACT.</em></h2>
          </div>
          <p className="nx-heading-note">
            A simple process that keeps the project clear from day one.
          </p>
        </div>

        <div className="nx-process-grid">
          <article>
            <div className="nx-process-number">01</div>
            <div className="nx-process-icon nx-icon-discover">
              <i /><i /><i />
            </div>
            <h3>DISCOVER</h3>
            <strong>UNDERSTAND  DEFINE  PLAN</strong>
            <p>
              We learn about your business, customers and goals before
              deciding what the experience needs to do.
            </p>
          </article>

          <article>
            <div className="nx-process-number">02</div>
            <div className="nx-process-icon nx-icon-design">
              <i /><i />
            </div>
            <h3>DESIGN</h3>
            <strong>CONCEPT  UI  EXPERIENCE</strong>
            <p>
              We shape the visual direction, interface and customer
              journey into one clear design system.
            </p>
          </article>

          <article>
            <div className="nx-process-number">03</div>
            <div className="nx-process-icon nx-icon-build">
              <i /><i /><i /><i />
            </div>
            <h3>BUILD</h3>
            <strong>CODE  TEST  REFINE</strong>
            <p>
              We turn the approved design into a responsive, functional
              product ready for real users.
            </p>
          </article>

          <article>
            <div className="nx-process-number">04</div>
            <div className="nx-process-icon nx-icon-launch">
              <i />
            </div>
            <h3>LAUNCH</h3>
            <strong>SHIP  MEASURE  GROW</strong>
            <p>
              We launch, check the details and make sure your new digital
              experience is ready to perform.
            </p>
          </article>
        </div>
      </section>

      <section className="nx-cta">
        <div className="nx-cta-bg"><WarpFieldBackground /></div>
        <div className="nx-cta-shade" />
        <div className="nx-cta-content">
          <p className="nx-eyebrow">YOUR NEXT MOVE</p>
          <h2>
            LET'S MAKE
            <br />
            SOMETHING
            <br />
            <em>MATTER.</em>
          </h2>
          <a href="#contact" className="nx-button nx-button-light">
            Start a project <span></span>
          </a>
        </div>
      </section>

      <section id="contact" className="nx-section nx-contact">
        <div className="nx-contact-copy">
          <p className="nx-eyebrow">LET'S WORK TOGETHER</p>
          <h2>
            READY TO BUILD
            <br />
            WHAT COMES <em>NEXT?</em>
          </h2>
          <p>
            Tell us what you're building, what you need and where you want
            to go. We'll take it from there.
          </p>

          <div className="nx-contact-info">
            <a href="mailto:nexoradigitaldesigns@gmail.com">
              nexoradigitaldesigns@gmail.com
            </a>
            <a href="tel:+917995692429">+91 799 569 2429</a>
          </div>
        </div>

        <form className="nx-form" onSubmit={handleSubmit}>
          <div className="nx-form-row">
            <label>
              <span>YOUR NAME</span>
              <input name="name" placeholder="Enter your name" required />
            </label>

            <label>
              <span>EMAIL ADDRESS</span>
              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                required
              />
            </label>
          </div>

          <label>
            <span>BUSINESS / BRAND</span>
            <input
              name="business"
              placeholder="Your business name"
              required
            />
          </label>

          <label>
            <span>TELL US ABOUT THE PROJECT</span>
            <textarea
              name="message"
              rows="7"
              placeholder="What are you looking to build?"
              required
            />
          </label>

          <button
            type="submit"
            className="nx-submit"
            disabled={sending}
          >
            {sending
              ? "SENDING..."
              : sent
                ? "TRANSMISSION SENT "
                : "SEND TRANSMISSION "}
          </button>

          {sent && (
            <p className="nx-form-status nx-form-success">
              Enquiry sent to Nexora and WhatsApp has been opened with the
              same details.
            </p>
          )}

          {error && (
            <p className="nx-form-status nx-form-error">{error}</p>
          )}
        </form>
      </section>

      <footer className="nx-footer">
        <div>
          <strong>NEXORA DIGITAL DESIGNS</strong>
          <span>THE JOURNEY DOESN'T END HERE.</span>
        </div>
        <div className="nx-footer-links">
          <a href="#home">Back to top </a>
          <a href="#contact">Start a project </a>
        </div>
      </footer>
    </main>
  );
}
