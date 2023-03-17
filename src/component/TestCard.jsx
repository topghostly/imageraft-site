import React from "react";
import "../App.css";
import { motion } from "framer-motion";
function TestCard() {
  const containerVarient = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 200,
      },
    },
  };
  return (
    <motion.div
      variants={containerVarient}
      initial="hidden"
      animate="visible"
      className="card"
    >
      <img src="./one.jpg" alt="theImage" />
      <h3 className="title">The Fun doggy</h3>
    </motion.div>
  );
}

export default TestCard;
