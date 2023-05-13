import React, { useState, useEffect } from "react";
import ImageBanner from "../component/ImageBanner";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ImagePlaceholder from "../component/ImagePlaceholder";

function Index({ preloaders }) {
  let navigate = useNavigate();
  const [photos, setPhotos] = useState([]);
  const [placeHolder, setPlaceHolder] = useState(true);

  const renderComponent = () => {
    window.scrollTo(0, 0);
  };

  const getRandomPhotos = async () => {
    const url = "https://api.pexels.com/v1/curated?per_page=80&page=1";
    const options = {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    };
    const response = await fetch(url, options);
    const data = await response.json();
    setPhotos(data.photos);
    setPlaceHolder(false);
    preloaders(false);
  };

  useEffect(() => {
    renderComponent();
    getRandomPhotos();
  }, []);

  return (
    <TotalPage
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{
        ease: "easeInOut",
        duration: 0.2,
      }}
    >
      <ImageBanner />
      {placeHolder && <ImagePlaceholder />}

      {/* Code for the images gallery */}
      <div className="container-sm">
        <Gallery>
          {photos.map((photo) => {
            return (
              <ImageHolder
                key={photo.id}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/imageraft-site/details/${photo.id}`);
                }}
              >
                <GalleryIMG
                  layout
                  src={photo.src.large}
                  layoutId="main-animate"
                  loading="lazy"
                />
                <div className="photo-description">
                  <p className="small">{photo.photographer}</p>
                </div>
              </ImageHolder>
            );
          })}
        </Gallery>
      </div>
    </TotalPage>
  );
}

const TotalPage = styled(motion.div)`
  max-width: 100vw;
  overflow-x: hidden;
  margin-top: 100px;
  @media screen and (max-width: 575px) {
    margin-top: 0px;
  }
  * {
    color: #353535;
  }
`;
const Gallery = styled.div`
  max-width: 100vw;
  display: block;
  margin-top: 3rem;
  -webkit-column-count: 3;
  -moz-column-count: 3;
  column-count: 3;
  -webkit-column-width: 33%;
  -moz-column-width: 33%;
  column-width: 33%;
  padding: 0px;
  margin: 3rem 5px;

  @media screen and (max-width: 900px) {
    margin-top: 3rem;
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
    -webkit-column-width: 50%;
    -moz-column-width: 50%;
    column-width: 50%;
    margin: 3rem 5px;
  }
`;
const ImageHolder = styled.div`
  position: relative;
  border-radius: 20px;
  margin-bottom: 15px;
  cursor: help;
  transition: all 0.3s ease-in-out;

  ::before {
    content: "";
    pointer-events: none;
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 15px;
    top: 0px;
    left: 0px;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.5)
    );
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 3;

    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  :hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease-in-out;

    .photo-description {
      position: absolute;
      display: block;
      bottom: 0px;
      scale: 0.9;
      z-index: 4;
      margin: 0px;
      padding: 0px;
      color: white;
      padding-left: 5px;
      padding-bottom: 15px;
      transition: all 0.3s ease-in-out;

      p {
        padding: 0px;
        color: white;
        margin: 0px;
        transition: all 0.3s ease-in-out;
      }
      .small {
        margin: 0px;
        padding: 0px;
        transition: all 0.3s ease-in-out;
      }
      @media screen and (max-width: 767px) {
        display: none;
      }
    }

    ::before {
      content: "";
      pointer-events: none;
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      overflow: hidden;
      border-radius: 15px;
      top: 0px;
      left: 0px;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.5)
      );
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
      z-index: 3;

      @media screen and (max-width: 767px) {
        display: none;
      }
    }
  }
  .photo-description {
    position: absolute;
    display: none;
    bottom: 0px;
    scale: 0.9;
    z-index: 4;
    margin: 0px;
    padding: 0px;
    color: white;
    padding-left: 10px;
    padding-bottom: 10px;
    transition: all 0.3s ease-in-out;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
    .photo-description {
      position: relative;
      display: block;
      z-index: 4;
      margin: 0px;
      padding: 0px;
      color: #353535;
      padding-left: 0px;
      padding-bottom: 0px;
      font-size: 15px;
    }
    :hover {
      box-shadow: none;
      transition: none;

      .photo-description {
        position: relative;
        font-size: 15px;
        display: block;
        z-index: 4;
        margin: 0px;
        padding: 0px;
        color: #353535;
        padding-left: 0px;
        padding-bottom: 0px;
      }
    }
  }
`;
const GalleryIMG = styled.img`
  width: 100%;
  position: relative;
  border-radius: 20px;

  @media screen and (max-width: 767px) {
    border-radius: 12px;
  }
`;
export default Index;
