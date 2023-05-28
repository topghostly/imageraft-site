import styled from "styled-components";
import BackgroundIMG from "./static/backGround.jpg";
import Logo from "./static/navLogo-07.png";
import "bootstrap/dist/css/bootstrap.min.css";

function ImageBanner() {
  return (
    <Banner>
      <BannerText className="container-sm">
        <LogoIMG className="logo-image" src={Logo} alt="Imageraft_Logo" />
        <p>The one-stop art work collection on the internet</p>
        <p className="referance">Powered By Pexels</p>
      </BannerText>
      <Bannerimg src={BackgroundIMG} alt="background_image" />
    </Banner>
  );
}

const Banner = styled.div`
  position: relative;
  height: 85vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  z-index: -1;

  .referance {
    position: absolute;
    bottom: 10px;
    scale: 0.4;
    z-index: 2;
    opacity: 0.6;
  }
  @media screen and (max-width: 1000px) {
    height: 40vh;
  }
  p {
    color: #353535;
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0);
    opacity: 0.1;
    pointer-events: none;
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
  pointer-events: none;
  text-align: center;

  @media screen and (max-width: 1000px) {
    scale: 0.6;
  }
  .referance {
    position: absolute;
    bottom: 0px;
    scale: 0.4;
    z-index: 2;
  }
  p {
    z-index: 2;
  }
  input {
    position: relative;
    width: 800px;
    height: 40px;
    border: none;
    border-radius: 100px;
    padding: 0px 25px;
    display: none;

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
