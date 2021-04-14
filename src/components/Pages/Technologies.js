import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TechCard = ({ name, exp }) => {
  const [shadow, setshadow] = useState(true);

  return (
    <div class="col-sm-4">
      <div
        class={`card homecard ${shadow ? "shadow-sm" : ""}`}
        onMouseEnter={() => setshadow(!shadow)}
        onMouseLeave={() => setshadow(!shadow)}
      >
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <p class="card-text text-secondary" style={{ fontSize: 12 }}>
            {exp} Years exp.
          </p>
        </div>
      </div>
    </div>
  );
};

const baseVariants = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      ease: "easeInOut",
    },
  },
};

export default function Technologies() {
  return (
      <motion.div
        variants={baseVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="container"
      >
        <div className="row" style={{ margin: "40px 0" }}>
          <TechCard name="React JS" exp="2" />
          <TechCard name="Figma" exp="2" />
          <TechCard name="Adobe XD" exp="2" />
        </div>
        <div className="row" style={{ margin: "40px 0" }}>
          <TechCard name="Materialize CSS" exp="2" />
          <TechCard name="Bootstrap" exp="1" />
          <TechCard name="Angular JS" exp="1" />
        </div>
        <div className="row" style={{ margin: "40px 0" }}>
          <TechCard name="Spring Boot" exp="1" />
        </div>
      </motion.div>
  );
}
