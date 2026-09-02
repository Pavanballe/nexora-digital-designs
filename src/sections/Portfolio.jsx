import React, { useState } from "react";
import projects from "../data/projects";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react";

function ProjectGallery({ project, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const screenshots = project?.screenshots ?? [];
  const active = screenshots[activeIndex];

  const previous = () =>
    setActiveIndex((i) =>
      i === 0 ? screenshots.length - 1 : i - 1
    );

  const next = () =>
    setActiveIndex((i) =>
      i === screenshots.length - 1 ? 0 : i + 1
    );

  if (!project || !active) return null;

  return (
    <motion.div
      className="bhanu-gallery"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bhanu-gallery__panel"
        initial={{ opacity: 0, scale: 0.94, y: 25 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.97, y: 15 }}
        transition={{ duration: 0.35 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="bhanu-gallery__close"
          onClick={onClose}
          aria-label="Close gallery"
        >
          <X size={20} />
        </button>

        <div className="bhanu-gallery__header">
          <div>
            <span>PROJECT SHOWCASE</span>
            <h3>{project.title}</h3>
          </div>

          <p>
            Screenshot showcase only. No connection to the live application.
          </p>
        </div>

        <div className="bhanu-gallery__viewer">
          {screenshots.length > 1 && (
            <button
              type="button"
              className="bhanu-gallery__arrow bhanu-gallery__arrow--left"
              onClick={previous}
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.img
              key={active.image}
              src={active.image}
              alt={`${project.title} ${active.title} screenshot`}
              className="bhanu-gallery__image"
              initial={{ opacity: 0, x: 18, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -18 }}
              transition={{ duration: 0.28 }}
            />
          </AnimatePresence>

          {screenshots.length > 1 && (
            <button
              type="button"
              className="bhanu-gallery__arrow bhanu-gallery__arrow--right"
              onClick={next}
              aria-label="Next screenshot"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        <div className="bhanu-gallery__caption">
          <div>
            <span>
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(screenshots.length).padStart(2, "0")}
            </span>

            <h4>{active.title}</h4>
            <p>{active.description}</p>
          </div>

          {screenshots.length > 1 && (
            <div className="bhanu-gallery__dots">
              {screenshots.map((screen, index) => (
                <button
                  key={screen.title}
                  type="button"
                  className={index === activeIndex ? "is-active" : ""}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View ${screen.title}`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
export default function Portfolio() {
  const [galleryProject, setGalleryProject] = useState(null);

  return (
    <section id="work" className="portfolio portfolio--cosmic">
      <div className="portfolio__stars" aria-hidden="true">
        {Array.from({ length: 28 }, (_, index) => (
          <span
            key={index}
            style={{
              "--star-left": `${(index * 43) % 100}%`,
              "--star-top": `${(index * 71) % 100}%`,
              "--star-delay": `${(index % 9) * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="portfolio__nebula portfolio__nebula--one" />
      <div className="portfolio__nebula portfolio__nebula--two" />

      <div className="portfolio__container">
        <motion.div
          className="portfolio__intro cinematic-reveal"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
        >
          <div className="portfolio__eyebrow">
            <span />
            SELECTED MISSIONS
            <span />
          </div>

          <h2>
            Work that
            <strong>moves businesses.</strong>
          </h2>

          <p>
            Every project is a new destination. We build digital experiences
            with purpose, personality, and measurable impact.
          </p>
        </motion.div>

        <div className="portfolio__grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              className={`portfolio-card ${project.visualClass} cinematic-reveal`}
              initial={{ opacity: 0, y: 65, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -10 }}
            >
              <div className="portfolio-card__visual">
                <div className="portfolio-card__grid-lines" />
                <div className="portfolio-card__planet" />

                <div className="portfolio-card__stars">
                  {Array.from({ length: 12 }, (_, starIndex) => (
                    <i
                      key={starIndex}
                      style={{
                        "--star-left": `${(starIndex * 37) % 100}%`,
                        "--star-top": `${(starIndex * 53) % 100}%`,
                      }}
                    />
                  ))}
                </div>

                <div className="portfolio-card__screen">
                  <div className="portfolio-card__screen-top">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="portfolio-card__screen-content">
                    <div className="portfolio-card__screen-line portfolio-card__screen-line--long" />
                    <div className="portfolio-card__screen-line" />
                    <div className="portfolio-card__screen-block" />
                  </div>
                </div>

                <div className="portfolio-card__orbit-glow" />

                <span className="portfolio-card__mission">
                  MISSION {project.number}
                </span>
              </div>

              <div className="portfolio-card__body">
                <div className="portfolio-card__category">
                  <Sparkles size={12} />
                  {project.category}
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                {project.type === "gallery" ? (
                  <button
                    type="button"
                    className="portfolio-card__link portfolio-card__button"
                    onClick={() => setGalleryProject(project)}
                  >
                    View project
                    <ArrowUpRight size={16} />
                  </button>
                ) : (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio-card__link"
                  >
                    View project
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <div className="portfolio-card__corner">
                <ArrowUpRight size={19} />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="portfolio__bottom cinematic-reveal"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span>
            <i />
            MORE DESTINATIONS COMING
          </span>
          <p>Your business could be our next mission.</p>
          <a href="#contact">
            Start a project
            <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>

      <AnimatePresence>
        {galleryProject && (
          <ProjectGallery project={galleryProject} onClose={() => setGalleryProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
