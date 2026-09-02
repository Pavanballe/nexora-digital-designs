import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function CinematicTransition() {
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest("a, button");

      if (!target) return;

      const href = target.getAttribute("href");

      const x = event.clientX;
      const y = event.clientY;

      const id = Date.now();

      setBursts((current) => [
        ...current,
        { id, x, y },
      ]);

      setTimeout(() => {
        setBursts((current) =>
          current.filter((burst) => burst.id !== id)
        );
      }, 900);

      if (href && href.startsWith("#") && href !== "#") {
        const destination = document.querySelector(href);

        if (destination) {
          event.preventDefault();

          setTimeout(() => {
            destination.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 180);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <AnimatePresence>
      {bursts.map((burst) => (
        <motion.div
          key={burst.id}
          className="click-smoke"
          style={{
            left: burst.x,
            top: burst.y,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="click-smoke__cloud click-smoke__cloud--one"
            initial={{ scale: 0.15, opacity: 0 }}
            animate={{ scale: 1.5, opacity: [0, 0.7, 0] }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          />

          <motion.div
            className="click-smoke__cloud click-smoke__cloud--two"
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{
              scale: 1.9,
              opacity: [0, 0.55, 0],
              x: -35,
              y: -18,
            }}
            transition={{
              duration: 0.85,
              delay: 0.03,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="click-smoke__cloud click-smoke__cloud--three"
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{
              scale: 1.7,
              opacity: [0, 0.5, 0],
              x: 42,
              y: 16,
            }}
            transition={{
              duration: 0.82,
              delay: 0.06,
              ease: "easeOut",
            }}
          />

          <motion.div
            className="click-smoke__flash"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.4, 0],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
            }}
          />

          <div className="click-smoke__particles">
            {Array.from({ length: 12 }).map((_, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: 0,
                  y: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  x: Math.cos(index * 1.8) * (35 + index * 4),
                  y: Math.sin(index * 1.8) * (30 + index * 5),
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.015,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

export default CinematicTransition;
