import React from "react";
import { AtTheHorizon } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export default function ThreeUIHero() {
  return (
    <div className="threeui-nexora-hero">
      <AtTheHorizon />

      <div className="threeui-nexora-overlay">
        <div className="threeui-nexora-eyebrow">
          IDEAS × DESIGN × TECHNOLOGY
        </div>

        <h1>
          We Build
          <span>Digital Experiences</span>
          That Matter
        </h1>

        <p>
          Nexora Digital Designs creates modern digital experiences
          that help ambitious businesses stand out, connect with customers,
          and grow online.
        </p>

        <div className="threeui-nexora-actions">
          <a href="#contact">Start Your Project</a>
          <a href="#portfolio">Explore Our Work</a>
        </div>

        <div className="threeui-nexora-stats">
          <div>
            <strong>20+</strong>
            <span>Projects</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>Businesses</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Commitment</span>
          </div>
        </div>
      </div>
    </div>
  );
}
