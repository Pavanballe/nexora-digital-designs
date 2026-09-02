import React, { useEffect } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import AnimatedBackground from "./components/AnimatedBackground";
import CinematicTransition from "./components/CinematicTransition";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Portfolio from "./sections/Portfolio";
import About from "./sections/About";
import Process from "./sections/Process";
import Contact from "./sections/Contact";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      "section:not(.hero--cosmic) h1, " +
      "section:not(.hero--cosmic) h2, " +
      "section:not(.hero--cosmic) h3, " +
      "section:not(.hero--cosmic) h4, " +
      "section:not(.hero--cosmic) p, " +
      "section:not(.hero--cosmic) .card, " +
      "section:not(.hero--cosmic) article, " +
      "section:not(.hero--cosmic) button, " +
      "section:not(.hero--cosmic) a"
    );

    elements.forEach((element) => {
      element.classList.add("cinematic-reveal");

      const section = element.closest("section");

      if (section) {
        const siblings = Array.from(
          section.querySelectorAll(
            "h1, h2, h3, h4, p, .card, article, button, a"
          )
        );

        const position = siblings.indexOf(element);

        if (position >= 0) {
          element.style.setProperty(
            "--reveal-delay",
            `${Math.min(position * 0.08, 0.48)}s`
          );
        }
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <AnimatedBackground />
      <CinematicTransition />

      <Navbar />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Contact />
      </main>
    </div>
  );
}

export default App;
