import React from "react";
import styled from "styled-components";
import logo from "./static/navLogo-07.png";
import { motion } from "framer-motion";
function Preloader() {
  // const [isReverse, setIsReverse] = useState(false);

  // const forwardMotion = {
  //   scale: 0.7,
  //   transition: {
  //     duration: 1.5,
  //     ease: "easeInOut",
  //   },
  // };

  // const reverseMotion = {
  //   scale: 0.5,
  //   transition: {
  //     duration: 1.5,
  //     ease: "easeInOut",
  //   },
  // };
  // const animationComplete = () => {
  //   setIsReverse(!isReverse);
  // };
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
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{
          ease: "easeInOut",
          duration: 0.4,
        }}
      >
        <motion.img
          initial={{ opacity: 1, x: 90, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 0.4 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          // onAnimationComplete={[animationComplete]}
          src={logo}
          alt=""
        />
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 2.04,
            duration: 1,
          }}
          style={{
            fontSize: "18px",
            fontWeight: "bolder",
            marginBottom: "0px",
            width: "90.03",
          }}
        >
          imageRaft
        </motion.p>
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
  position: absolute;
  top: 0;
  z-index: 9999;
  overflow-x: hidden;
`;
const View = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  gap: 0px;
  align-items: center;
  background-color: white;

  img {
    display: relative;
    margin-left: 10px;
    width: 60px;
  }
`;
export default Preloader;
