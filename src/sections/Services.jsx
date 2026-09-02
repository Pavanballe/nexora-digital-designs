import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    text: "High-performance websites engineered to turn ideas into powerful digital experiences.",
    tags: ["React", "Vite", "Supabase"],
  },
  {
    number: "02",
    icon: Palette,
    title: "UI / UX Design",
    text: "Clean, premium interfaces designed around your brand, your users, and your goals.",
    tags: ["UI Design", "UX", "Prototyping"],
  },
  {
    number: "03",
    icon: ShoppingBag,
    title: "E-Commerce",
    text: "Conversion-focused online stores built to make discovering and buying effortless.",
    tags: ["Stores", "Payments", "Products"],
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Responsive Design",
    text: "One seamless experience across phones, tablets, laptops, and every screen in between.",
    tags: ["Mobile", "Tablet", "Desktop"],
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Brand & Digital",
    text: "A stronger digital identity that makes your business recognizable, memorable, and modern.",
    tags: ["Branding", "Identity", "Strategy"],
  },
];

function Services() {
  return (
    <section id="services" className="services services--cosmic">
      <div className="services__stars" aria-hidden="true">
        {Array.from({ length: 24 }, (_, index) => (
          <span
            key={index}
            style={{
              "--star-left": `${(index * 41) % 100}%`,
              "--star-top": `${(index * 67) % 100}%`,
              "--star-delay": `${(index % 8) * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="services__nebula services__nebula--one" />
      <div className="services__nebula services__nebula--two" />

      <div className="services__container">
        <motion.div
          className="services__intro cinematic-reveal"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="services__eyebrow">
            <span />
            WHAT WE BUILD
            <span />
          </div>

          <h2>
            Your next digital
            <strong>destination.</strong>
          </h2>

          <p>
            We combine strategy, design, and technology to build digital
            experiences that move your business forward.
          </p>
        </motion.div>

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                className="service-card cinematic-reveal"
                key={service.number}
                initial={{ opacity: 0, y: 55, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="service-card__top">
                  <span className="service-card__number">
                    {service.number}
                  </span>

                  <motion.div
                    className="service-card__icon"
                    whileHover={{ rotate: 8, scale: 1.08 }}
                  >
                    <Icon size={22} strokeWidth={1.7} />
                  </motion.div>
                </div>

                <div className="service-card__content">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>

                <div className="service-card__tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <div className="service-card__arrow">
                  <ArrowUpRight size={18} />
                </div>

                <div className="service-card__glow" />
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="services__bottom cinematic-reveal"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div>
            <span className="services__signal">
              <i />
              SYSTEM READY
            </span>
            <p>Have something bigger in mind?</p>
          </div>

          <a href="#contact" className="services__cta">
            Start the journey
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
