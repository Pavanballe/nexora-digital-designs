import React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Route,
  PenTool,
  Code2,
  Rocket,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    text: "We understand your business, audience, goals, and the destination you want to reach.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Strategy",
    text: "We map the experience, features, structure, and technology needed to get there.",
    icon: Route,
  },
  {
    number: "03",
    title: "Design",
    text: "We turn the strategy into a distinctive visual experience built around your brand.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Build",
    text: "We engineer the experience with modern technology, responsiveness, and performance in mind.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Launch",
    text: "We take your finished digital experience into the real world and set it in motion.",
    icon: Rocket,
  },
];

function Process() {
  return (
    <section id="process" className="process process--cosmic">
      <div className="process__stars" aria-hidden="true">
        {Array.from({ length: 30 }, (_, index) => (
          <span
            key={index}
            style={{
              "--star-left": `${(index * 43) % 100}%`,
              "--star-top": `${(index * 67) % 100}%`,
              "--star-delay": `${(index % 9) * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="process__nebula process__nebula--one" />
      <div className="process__nebula process__nebula--two" />

      <div className="process__container">
        <motion.div
          className="process__intro cinematic-reveal"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="process__eyebrow">
            <span />
            THE JOURNEY
            <span />
          </div>

          <h2>
            From first idea
            <strong>to final launch.</strong>
          </h2>

          <p>
            A simple, focused process designed to keep your project moving
            forward without unnecessary complexity.
          </p>
        </motion.div>

        <div className="process__journey">
          <div className="process__path" aria-hidden="true">
            <div className="process__path-line" />
            <motion.div
              className="process__path-light"
              animate={{
                top: ["0%", "100%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.article
                key={step.number}
                className={`process-step ${
                  isEven ? "process-step--reverse" : ""
                } cinematic-reveal`}
                initial={{
                  opacity: 0,
                  y: 45,
                  x: isEven ? 25 : -25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="process-step__content">
                  <span className="process-step__number">
                    {step.number}
                  </span>

                  <h3>{step.title}</h3>

                  <p>{step.text}</p>
                </div>

                <motion.div
                  className="process-step__node"
                  whileInView={{
                    scale: [0.75, 1.08, 1],
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65 }}
                >
                  <span />
                  <Icon size={20} strokeWidth={1.5} />
                </motion.div>

                <div className="process-step__space">
                  <span>{`MISSION ${step.number}`}</span>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="process__destination cinematic-reveal"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="process__destination-glow" />

          <div className="process__destination-icon">
            <Rocket size={25} strokeWidth={1.4} />
          </div>

          <div>
            <span>DESTINATION REACHED</span>
            <strong>Your digital experience is ready.</strong>
          </div>

          <a href="#contact">
            Begin your journey
            <ArrowDown size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Process;
