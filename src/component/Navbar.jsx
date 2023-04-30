import React, { useState, memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./static/imageraft.png";
import SmallLogo from "./static/navLogo-07.png";
import styled from "styled-components";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
function Navibar() {
  const [input, setInput] = useState("");

  let navigate = useNavigate();
  const inputHandler = (e) => {
    e.preventDefault();
    navigate(`/imageraft-site/query/${input}`);
    setInput("");
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
          <motion.img
            variants={xMovement}
            src={Logo}
            alt="imageraftLogo"
            className="big-logo"
          />
          <img src={SmallLogo} alt="Logo" className="small-logo" />
        </ImageContainer>
        <div className="for-search">
          <form action="" onSubmit={inputHandler}>
            <motion.input
              type="text"
              required
              placeholder="Search for High Quality Stock images"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
            />
          </form>
        </div>
        <TTI to={"imageraft-site/imageai"}>Text To image</TTI>
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
  max-width: 100vw;
  height: auto;
  top: 0px;
  background-color: white;
  z-index: 100;
  border-bottom: solid 1px #e6e6e6;
  position: fixed;
  @media screen and (max-width: 575px) {
    position: relative;
  }
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
      width: 85%;
    }
  }
`;
const ImageContainer = styled(NavLink)`
  img.big-logo {
    width: 150px;
    cursor: pointer;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  img.small-logo {
    width: 10px;
    display: none;
  }
  @media screen and (max-width: 600px) {
    img.small-logo {
      width: 30px;
      padding-left: 5px;
      display: block;
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
    position: absolute;
    display: none;
    scroll-snap-align: center;
    bottom: 0px;
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
  color: #353535;
  transition: all 0.1s ease-in-out;
  :hover {
    color: #b8b7be;
    transition: all 0.1s ease-in-out;
  }
  &.active {
    background-color: #353535;
    border-radius: 50px;
    color: white;
    transition: all 0.1s ease-in-out;
  }

  p {
    display: inline-block;
    margin: 0px;
  }
`;
const TTI = styled(Link)`
  color: #353535;
  position: relative;
  background-color: white;
  text-decoration: none;
  padding: 5px 5px;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    bottom: 0;
    left: 0;
    background-color: #353535;
    transform: translateX(-110%);
    transition: all 0.6s cubic-bezier(0.47, 0, 0.745, 0.715);
  }
  :hover {
    color: #353535;
    ::before {
      transform: translateX(0);
      transition: all 0.6s cubic-bezier(0.47, 0, 0.745, 0.715);
    }
  }
  @media screen and (max-width: 767px) {
    padding: 1px 1px;
    width: 130px;
    padding-bottom: 5px;
  }
  @media screen and (max-width: 490px) {
    padding: 1px 1px;
    width: 200px;
    padding-bottom: 0px;

    ::before {
      display: none;
    }
    :hover {
      color: #8d8d8d;
    }
  }
`;
export default memo(Navibar);
