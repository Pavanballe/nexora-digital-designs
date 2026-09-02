import { motion } from "framer-motion";

const stars = Array.from({ length: 38 }, (_, index) => ({
  id: index,
  x: ((index * 37) % 100) - 50,
  y: ((index * 61) % 100) - 50,
  size: 1 + (index % 3),
  duration: 3.5 + (index % 7) * 0.45,
  delay: -(index % 12) * 0.35,
}));

const distantStars = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  x: ((index * 47) % 100) - 50,
  y: ((index * 73) % 100) - 50,
  size: 1 + (index % 2),
  duration: 6 + (index % 6) * 0.6,
  delay: -(index % 10) * 0.5,
}));

function StarLayer({ items, className }) {
  return (
    <div className={className}>
      {items.map((star) => (
        <motion.span
          key={star.id}
          className="space-star"
          style={{
            "--star-x": `${star.x}vw`,
            "--star-y": `${star.y}vh`,
            "--star-size": `${star.size}px`,
          }}
          initial={{
            opacity: 0,
            scale: 0.05,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 0.8, 1, 0],
            scale: [0.05, 0.35, 1.8, 3.2],
            x: [0, star.x * 0.18, star.x * 0.75, star.x * 1.45],
            y: [0, star.y * 0.18, star.y * 0.75, star.y * 1.45],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

function AnimatedBackground() {
  return (
    <div className="space-background" aria-hidden="true">
      <div className="space-background__deep" />

      <div className="space-nebula space-nebula--purple" />
      <div className="space-nebula space-nebula--blue" />
      <div className="space-nebula space-nebula--cyan" />

      <div className="space-planet space-planet--left" />
      <div className="space-planet space-planet--right" />

      <div className="space-dust space-dust--one" />
      <div className="space-dust space-dust--two" />

      <StarLayer
        items={distantStars}
        className="space-star-layer space-star-layer--far"
      />

      <StarLayer
        items={stars}
        className="space-star-layer space-star-layer--near"
      />

      <motion.div
        className="space-comet space-comet--one"
        animate={{
          x: ["-20vw", "120vw"],
          y: ["20vh", "80vh"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 7,
          ease: "easeIn",
        }}
      />

      <motion.div
        className="space-comet space-comet--two"
        animate={{
          x: ["110vw", "-20vw"],
          y: ["10vh", "55vh"],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatDelay: 11,
          delay: 4,
          ease: "easeIn",
        }}
      />

      <div className="space-vignette" />
    </div>
  );
}

export default AnimatedBackground;
