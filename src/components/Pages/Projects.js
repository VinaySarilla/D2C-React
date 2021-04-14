import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
const Card = () => {
  const [shadow, setshadow] = useState(true);

  return (
    <div class="col-sm-4">
      <div
        class={`card homecard ${shadow ? "shadow-sm" : ""}`}
        onMouseEnter={() => setshadow(!shadow)}
        onMouseLeave={() => setshadow(!shadow)}
      >
        <div class="card-body">
          <h5 class="card-title">Project 1</h5>
          <p class="card-text">PWA</p>
          <div style={{ textAlign: "right" }}>
            <a
              href="#"
              class="btn"
              style={{ backgroundColor: "#8c7dff", color: "white" }}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
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
    transition:{
        ease:"easeInOut"        
    }
  },
};

export default function Projects() {
  return (
      <motion.div
        variants={baseVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="container"
      >
        <div className="row" style={{ margin: "40px 0" }}>
          <Card />
          <Card />
          <Card />
        </div>
        <div className="row" style={{ margin: "15px 0" }}>
          <Card />
          <Card />
          <Card />
        </div>
      </motion.div>
  );
}
