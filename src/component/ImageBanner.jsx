import React from "react";
import styled from "styled-components";
import BackgroundIMG from "./static/dummyBackground.JPG";
import Logo from "./static/imageraftSingle-05.png";
import "bootstrap/dist/css/bootstrap.min.css";

function ImageBanner() {
  return (
    <Banner>
      <BannerText className="container-sm">
        <LogoIMG className="logo-image" src={Logo} alt="Imageraft_Logo" />
        <p>The one-stop art work collection on the internet</p>
        <input
          type="text"
          name="serch"
          placeholder="Search for High Quality Art works"
        />
        <p className="referance">Powered By Pexels</p>
      </BannerText>
      <Bannerimg src={BackgroundIMG} alt="background_image" />
    </Banner>
  );
}

const Banner = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  z-index: -1;
  @media screen and (max-width: 1000px) {
    height: 60vh;
  }
  p {
    color: white;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    opacity: 0.4;
  }
`;
const Bannerimg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  object-fit: cover;
`;
const BannerText = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;

  @media screen and (max-width: 1000px) {
    scale: 0.8;
  }
  .referance {
    position: absolute;
    bottom: 10px;
    scale: 0.8;
    z-index: 2;
  }
  p {
    z-index: 2;
  }
  input {
    z-index: 2;
    position: relative;
    width: 800px;
    height: 40px;
    border: none;
    border-radius: 100px;
    padding: 0px 25px;

    @media screen and (max-width: 1000px) {
      width: 500px;
    }
    @media screen and (max-width: 600px) {
      width: 350px;
      height: 35px;
    }
  }
`;
const LogoIMG = styled.img`
  margin-bottom: 30px;
  width: 100px;
  z-index: 2;
`;
export default ImageBanner;
