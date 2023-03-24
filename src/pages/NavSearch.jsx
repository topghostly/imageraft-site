import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import { motion } from "framer-motion";
import ImagePlaceholder from "../component/ImagePlaceholder";

function NavSearch() {
  const navigate = useNavigate();
  const [searchIMG, getSearchedIMG] = useState([]);
  const [placeHolder, setPlaceHolder] = useState(true);
  let params = useParams();
  let searchKeyword = params.navlink;

  const getSearchedItem = async (query) => {
    const options = {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    };

    const url = `https://api.pexels.com/v1/search?query=${query}&per_page=80&page=1`;
    const request = await fetch(url, options);
    const data = await request.json();
    getSearchedIMG(data.photos);
    setPlaceHolder(false);
  };

  useEffect(() => {
    getSearchedItem(searchKeyword);
  }, [searchKeyword]);
  return (
    <StyledWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <Navbar />
      <div className="container-sm">
        <HeadingText>Results on "{params.navlink}"</HeadingText>
        {placeHolder && <ImagePlaceholder />}
        <NavSearchGallery>
          {searchIMG.map((photo) => {
            return (
              <NavSearchImageHolder
                key={photo.id}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/imageraft-site/details/${photo.id}`);
                }}
              >
                <NavSearchGalleryIMG src={photo.src.large} />
                <div className="photo-description">
                  <p className="small">{photo.photographer}</p>
                </div>
              </NavSearchImageHolder>
            );
          })}
        </NavSearchGallery>
      </div>
    </StyledWrapper>
  );
}
const StyledWrapper = styled(motion.div)`
  margin-top: 100px;
  max-width: 100vw;
  overflow-x: hidden;
`;
const HeadingText = styled.p`
  padding-top: 50px;
  font-size: 20px;
`;

const NavSearchGallery = styled.div`
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
const NavSearchImageHolder = styled.div`
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
      position: absolute;
      pointer-events: none;
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
      color: #000000;
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
        color: #000000;
        padding-left: 0px;
        padding-bottom: 0px;
      }
    }
  }
`;
const NavSearchGalleryIMG = styled.img`
  width: 100%;
  position: relative;
  border-radius: 20px;

  @media screen and (max-width: 767px) {
    border-radius: 12px;
  }
`;
export default NavSearch;
