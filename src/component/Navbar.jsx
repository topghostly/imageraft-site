import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./static/imageraft.png";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Navibar() {
  const PlaceHolder = "This is the dummy placeHolder";
  const [input, setInput] = useState("");

  let navigate = useNavigate();
  const inputHandler = (e) => {
    e.preventDefault();
    navigate(`/imageraft-site/query/${input}`);
  };
  const containerVariant = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const xMovement = {
    initial: {
      x: -700,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        // dalay: 1,
      },
    },
  };

  const showUp = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {},
    },
  };
  return (
    <NavWrapper variants={containerVariant} initial="initial" animate="animate">
      <Navbar className="container-sm">
        <ImageContainer to={"/imageraft-site"}>
          <motion.img variants={xMovement} src={Logo} alt="imageraftLogo" />
        </ImageContainer>
        <div className="for-search">
          <form action="" onSubmit={inputHandler}>
            <motion.input
              type="text"
              placeholder={PlaceHolder}
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
          </form>
        </div>
      </Navbar>
      <SliderContainer>
        <ShadoeContainer
          transition={{
            staggerChildren: 0.2,
          }}
        >
          <Slider to={"/imageraft-site/query/art"} variants={showUp}>
            <p>Art</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/architecture"}>
            <p>Architecture</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/landscape"}>
            <p>Landscape</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/illustration"}>
            <p>Illustration</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/birds"}>
            <p>Birds</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/building"}>
            <p>Buildings</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/forest"}>
            <p>Forest</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/technology"}>
            <p>Technology</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/experimental"}>
            <p>Experimental</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/beauty"}>
            <p>Beauty</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/interior"}>
            <p>Interior</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/mountain"}>
            <p>Mountains</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/bread"}>
            <p>Bread</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/smile"}>
            <p>Smile</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/pineapple"}>
            <p>Pineapple</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/elephant"}>
            <p>Elephant</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/chemistry"}>
            <p>Chemistry</p>
          </Slider>
          <Slider variants={showUp} to={"/imageraft-site/query/engine"}>
            <p>Engine</p>
          </Slider>
        </ShadoeContainer>
      </SliderContainer>
    </NavWrapper>
  );
}

const NavWrapper = styled(motion.div)`
  width: 100vw;
  height: auto;
  position: fixed;
  top: -100px;
  top: 0px;
  background-color: white;
  z-index: 100;
  border-bottom: solid 1px #e6e6e6;
`;
const Navbar = styled.div`
  position: relative;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: solid 1px #e6e6e6;

  .for-search {
    width: 60%;
    position: relative;

    input {
      width: 100%;
      height: 40px;
      border-radius: 100px;
      padding: 0px 30px;
      outline: none;
      border: none;
      font-size: 17px;
      background-color: #e6e6e6;
    }

    @media screen and (max-width: 575px) {
      padding: 0px 10px;
      width: 65%;
    }
  }
`;
const ImageContainer = styled(NavLink)`
  img {
    width: 150px;
    cursor: pointer;

    @media screen and (max-width: 600px) {
      scale: 0.8;
    }
  }
`;
const SliderContainer = styled.div`
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  scroll-behavior: smooth;
  padding: 5px;
  background-color: #ffffff;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const ShadoeContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 45px;
  ::before {
    content: "";
    position: fixed;
    top: 4rem;
    left: 0px;
    width: 100vw;
    height: 50px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 5%,
      rgba(255, 255, 255, 0) 80%,
      rgba(255, 255, 255, 1) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`;

const Slider = styled(NavLink)`
  display: inline-block;
  padding: 10px 20px;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  color: black;
  transition: all 0.1s ease-in-out;
  :hover {
    color: #b8b7be;
    transition: all 0.1s ease-in-out;
  }
  &.active {
    background-color: black;
    border-radius: 50px;
    color: white;
    transition: all 0.1s ease-in-out;
  }

  p {
    display: inline-block;
    margin: 0px;
  }
`;
export default Navibar;
