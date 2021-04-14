import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
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
export default function Contact() {
  return (
    <motion.div
      variants={baseVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container"
    >
      <div className="row" style={{ margin: "40px 0" }}>
        <div className="col-12">
          <div className="card homecard">
            <div className="card-body">
              <h1>Vinay Sarilla</h1>
              <p className="text-secondary">
                Frontend Developer | UI Designer | Freelancer{" "}
              </p>
              <span>
                Hi there, Welcome. I really appreciate you taking your time
                visiting my profile.
              </span>
              <span>I am </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
