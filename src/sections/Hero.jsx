import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const stars = Array.from({ length: 36 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${(i * 61) % 100}%`,
  size: 1 + (i % 3),
  delay: (i % 12) * 0.35,
  duration: 2.5 + (i % 7) * 0.7,
}));

const meteors = Array.from({ length: 4 }, (_, i) => ({
  left: `${10 + ((i * 17) % 80)}%`,
  top: `${8 + ((i * 29) % 65)}%`,
  delay: i * 2.8,
}));

const titleWords = [
  "We",
  "Build",
  "Digital",
  "Experiences",
  "That",
  "Grow",
  "Businesses.",
];

export default function Hero() {
  return (
    <section id="home" className="hero hero--cosmic">

      {/* =================================================
          COSMIC BACKGROUND
         ================================================= */}

      <div className="cosmic-bg">

        <div className="cosmic-bg__deep" />
        <div className="cosmic-bg__nebula cosmic-bg__nebula--blue" />
        <div className="cosmic-bg__nebula cosmic-bg__nebula--purple" />
        <div className="cosmic-bg__nebula cosmic-bg__nebula--violet" />

        <div className="cosmic-bg__stars">
          {stars.map((star, i) => (
            <motion.span
              key={i}
              className="cosmic-star"
              style={{
                left: star.left,
                top: star.top,
                width: `${star.size}px`,
                height: `${star.size}px`,
              }}
              animate={{
                opacity: [0.15, 1, 0.25],
                scale: [0.5, 1.5, 0.6],
              }}
              transition={{
                duration: star.duration,
                delay: star.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="cosmic-bg__meteor-field">
          {meteors.map((meteor, i) => (
            <motion.span
              key={i}
              className="cosmic-meteor"
              style={{
                left: meteor.left,
                top: meteor.top,
              }}
              animate={{
                x: [-80, 280],
                y: [70, -160],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2.2,
                delay: meteor.delay,
                repeat: Infinity,
                repeatDelay: 5 + i,
                ease: "easeIn",
              }}
            />
          ))}
        </div>

        <motion.div
          className="cosmic-bg__forward-particles"
          animate={{
            scale: [1, 1.18, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="cosmic-bg__vignette" />

      </div>


      {/* =================================================
          CONTENT
         ================================================= */}

      <div className="hero__container hero__container--cosmic">

        <motion.div
          className="hero__content hero__content--cosmic"
          initial={{
            opacity: 0,
            x: -70,
            filter: "blur(18px)",
          }}
          animate={{
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <motion.div
            className="hero__eyebrow"
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
          >
            <Sparkles size={14} />
            <span>WE DESIGN Ãƒâ€šÃ‚Â· WE BUILD Ãƒâ€šÃ‚Â· WE LAUNCH</span>
          </motion.div>


          <h1 className="hero__title hero__title--cosmic">

            <span className="cosmic-title-line">
              <motion.span
                className="cosmic-title-word"
                initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                We
              </motion.span>{" "}

              <motion.span
                className="cosmic-title-word"
                initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Build
              </motion.span>{" "}

              <motion.span
                className="cosmic-title-word"
                initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Digital
              </motion.span>
            </span>

            <span className="cosmic-title-line">
              <motion.span
                className="cosmic-title-word cosmic-title-word--gradient"
                initial={{ opacity: 0, x: -70, scale: 0.75, filter: "blur(24px)" }}
                animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 0.7, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                Experiences
              </motion.span>
            </span>

            <span className="cosmic-title-line">
              <motion.span
                className="cosmic-title-word"
                initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                That
              </motion.span>{" "}

              <motion.span
                className="cosmic-title-word"
                initial={{ opacity: 0, y: 80, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.95, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                Grow
              </motion.span>
            </span>

            <span className="cosmic-title-line">
              <motion.span
                className="cosmic-title-word"
                initial={{ opacity: 0, y: 80, scale: 0.8, filter: "blur(20px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                transition={{ delay: 1.05, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                Businesses.
              </motion.span>
            </span>

          </h1>


          <motion.p
            className="hero__description hero__description--cosmic"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.25,
              duration: 0.9,
            }}
          >
            Modern websites and custom digital solutions designed to make your
            business stand out, connect with customers, and grow online.
          </motion.p>


          <motion.div
            className="hero__actions"
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.45,
              duration: 0.8,
            }}
          >

            <motion.a
              href="#contact"
              className="hero__primary-button"
              whileHover={{
                y: -5,
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.94,
              }}
            >
              <span>Start a Project</span>
              <ArrowRight size={18} />
            </motion.a>


            <motion.a
              href="#work"
              className="hero__secondary-button"
              whileHover={{
                y: -5,
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.94,
              }}
            >
              <span className="hero__play-icon">
                <Play size={13} fill="currentColor" />
              </span>

              <span>View Our Work</span>
            </motion.a>

          </motion.div>

        </motion.div>


        {/* =================================================
            COSMIC N / ENERGY PORTAL
           ================================================= */}

        <div className="cosmic-hero-visual">

          {/* curved energy trajectory */}
          <motion.div
            className="cosmic-trajectory"
            animate={{
              opacity: [0.65, 1, 0.7],
              scale: [0.98, 1.02, 0.98],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* portal */}
          <motion.div
            className="cosmic-portal"
            animate={{
              scale: [0.94, 1.06, 0.94],
              opacity: [0.55, 1, 0.55],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="cosmic-portal__ring cosmic-portal__ring--1" />
            <div className="cosmic-portal__ring cosmic-portal__ring--2" />
            <div className="cosmic-portal__ring cosmic-portal__ring--3" />
          </motion.div>


          {/* explosion particles */}
          <motion.div
            className="cosmic-explosion"
            animate={{
              scale: [0.7, 1.15, 0.7],
              opacity: [0.65, 1, 0.65],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="cosmic-explosion__particle"
                style={{
                  "--angle": `${i * 12}deg`,
                  "--distance": `${55 + (i % 5) * 18}px`,
                }}
              />
            ))}
          </motion.div>


          {/* floating N */}
          <motion.div
            className="cosmic-n"
            animate={{
              y: [0, -25, 0, -12, 0],
              rotateZ: [-2, 2, -1, 1, -2],
              scaleX: [1, 0.98, 1.03, 0.99, 1],
              scaleY: [1, 1.03, 0.96, 1.02, 1],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: [0.36, 0, 0.64, 1],
            }}
          >

            <div className="cosmic-n__glow" />

            <div className="cosmic-n__card">

              <svg
                className="cosmic-n__logo"
                viewBox="0 0 120 130"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="cosmicNGradient"
                    x1="15"
                    y1="5"
                    x2="110"
                    y2="125"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stopColor="#ffffff" />
                    <stop offset="0.3" stopColor="#ddd5ff" />
                    <stop offset="0.58" stopColor="#7b6cff" />
                    <stop offset="0.82" stopColor="#5869ff" />
                    <stop offset="1" stopColor="#00e5ff" />
                  </linearGradient>

                  <filter id="cosmicNGlow">
                    <feGaussianBlur
                      stdDeviation="2.5"
                      result="blur"
                    />

                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  d="M20 108V22C20 14.3 26.3 8 34 8H40L88 82V22C88 14.3 94.3 8 102 8H104V108C104 115.7 97.7 122 90 122H84L36 48V108H20Z"
                  fill="url(#cosmicNGradient)"
                  filter="url(#cosmicNGlow)"
                />

                <path
                  d="M31 18L89 105"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.8"
                />

              </svg>

            </div>

          </motion.div>


          {/* nearby floating sparks */}
          <motion.div
            className="cosmic-local-sparks"
            animate={{
              x: [-15, 25, -10],
              y: [10, -25, 8],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <span
                key={i}
                style={{
                  "--spark-angle": `${i * 25.7}deg`,
                  "--spark-distance": `${45 + (i % 3) * 20}px`,
                }}
              />
            ))}
          </motion.div>

        </div>

      </div>

    </section>
  );
}
