import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Rocket,
  Target,
  Zap,
  Layers3,
} from "lucide-react";

const principles = [
  {
    icon: Target,
    title: "Purpose First",
    text: "Every design decision starts with what your business actually needs.",
  },
  {
    icon: Zap,
    title: "Built to Perform",
    text: "Fast, responsive experiences that feel smooth across every device.",
  },
  {
    icon: Layers3,
    title: "Designed as a System",
    text: "Strategy, design, and technology work together instead of separately.",
  },
];

function About() {
  return (
    <section id="about" className="about about--cosmic">
      <div className="about__stars" aria-hidden="true">
        {Array.from({ length: 26 }, (_, index) => (
          <span
            key={index}
            style={{
              "--star-left": `${(index * 47) % 100}%`,
              "--star-top": `${(index * 59) % 100}%`,
              "--star-delay": `${(index % 8) * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="about__nebula about__nebula--one" />
      <div className="about__nebula about__nebula--two" />

      <div className="about__container">
        <motion.div
          className="about__intro cinematic-reveal"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about__eyebrow">
            <span />
            WHY NEXORA
            <span />
          </div>

          <h2>
            We don't just build
            <strong>websites.</strong>
          </h2>

          <p>
            We build digital experiences that give ambitious businesses
            somewhere better to go.
          </p>
        </motion.div>

        <div className="about__mission">
          <motion.div
            className="about__visual cinematic-reveal"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9 }}
          >
            <div className="about__planet" />
            <div className="about__energy energy--one" />
            <div className="about__energy energy--two" />

            <motion.div
              className="about__rocket"
              animate={{
                y: [0, -13, 0],
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Rocket size={34} strokeWidth={1.4} />
            </motion.div>

            <div className="about__visual-label">
              <span>NX</span>
              <div>
                <small>DIGITAL</small>
                <strong>JOURNEY</strong>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about__copy cinematic-reveal"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="about__mini-label">THE NEXORA APPROACH</span>

            <h3>
              From the first idea
              <br />
              to the final launch.
            </h3>

            <p>
              Nexora Digital Designs exists to help businesses move from
              scattered ideas to polished digital products. We combine
              creative thinking with modern technology to create experiences
              that are beautiful, useful, and built for growth.
            </p>

            <p>
              No unnecessary complexity. No generic templates. Just thoughtful
              digital work designed around the business behind it.
            </p>

            <a href="#contact" className="about__cta">
              Build your next destination
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        <div className="about__principles">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="about-principle cinematic-reveal"
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
              >
                <div className="about-principle__icon">
                  <Icon size={20} strokeWidth={1.6} />
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="about__statement cinematic-reveal"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>THE NEXT DESTINATION</span>
          <strong>Starts with an idea.</strong>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
