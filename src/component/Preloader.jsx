import React, { useState } from "react";
import styled from "styled-components";
import logo from "./static/navLogo-07.png";
import { motion } from "framer-motion";
function Preloader() {
  const [isReverse, setIsReverse] = useState(false);

  const forwardMotion = {
    scale: 0.7,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  };

  const reverseMotion = {
    scale: 0.5,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  };
  const animationComplete = () => {
    setIsReverse(!isReverse);
  };
  return (
    <PreloaderBody
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.4,
      }}
    >
      <View
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
        }}
      >
        <motion.img
          animate={isReverse ? reverseMotion : forwardMotion}
          onAnimationComplete={animationComplete}
          src={logo}
          alt=""
        />
      </View>
    </PreloaderBody>
  );
}
const PreloaderBody = styled(motion.div)`
  position: relative;
  background-color: white;
  z-index: 9999;
  max-width: 100vw;
  max-height: 100vh;
  overflow-x: hidden;
`;
const View = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  img {
    display: relative;
    width: 60px;
  }
`;
export default Preloader;
