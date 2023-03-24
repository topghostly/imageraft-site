import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImagePlaceholder from "../component/ImagePlaceholder";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
function Details() {
  const navigate = useNavigate();
  const params = useParams();
  const [getIMG, setGetIMG] = useState("");
  const [getName, setGetName] = useState("photoGrapher");
  const [getWorks, setGetWorks] = useState([]);
  const [originalImageSRC, setOriginalImageSRC] = useState("");
  const [imageWidth, setImageWidth] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  const [placeHolder, setPlaceHolder] = useState(true);

  // Get The Image to Download
  const prevPage = () => {
    navigate(-1);
  };
  const getDownloadIMG = async (idd) => {
    const options = {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    };
    const url = `https://api.pexels.com/v1/photos/${idd}`;

    const request = await fetch(url, options);
    const data = await request.json();
    setGetIMG(data.src.large);
    setGetName(data.photographer);
    setOriginalImageSRC(data.src.original);
    setImageHeight(data.height);
    setImageWidth(data.height);
  };
  const downloadHandler = () => {
    const link = document.createElement("a");
    link.target = "_blank";
    link.href = `${originalImageSRC}?cs=srgb&amp;dl=pexels-${getName}-${params.imageid}.jpg&amp;fm=jpg&amp;w=${imageWidth}&amp;h=${imageHeight}&amp;fit=crop`;
    link.download = `imageRaft${params.imageid}.jpg`;
    link.click();
  };

  //Get Photographer work stuff
  let photographerName = getName;
  let queryName = photographerName.replace(/\s+/g, "+");

  const getPhotographerWorks = async () => {
    const options = {
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    };
    const url = `https://api.pexels.com/v1/search?query=${queryName}&per_page=80&page=1`;

    const workRequest = await fetch(url, options);
    const workData = await workRequest.json();
    setGetWorks(workData.photos);
    setPlaceHolder(false);
  };
  useEffect(() => {
    getDownloadIMG(params.imageid);
  }, [params.imageid]);
  useEffect(() => {
    getPhotographerWorks();
  }, [getName]);
  return (
    <PageWrapper
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
    >
      <div className="container-sm">
        <WholeTab AnimateSharedLayout className="mt-2">
          <div
            className="home-link"
            onClick={() => {
              prevPage();
            }}
          >
            <BsFillArrowLeftCircleFill />
          </div>
          <DownloadIMG src={getIMG} alt="" />
          <DownloadTab className="mt-4">
            <div className="photo-name">
              <p style={{ marginBottom: "0px" }}>{getName}</p>
              <p className="small" style={{ marginBottom: "0px" }}>
                #{params.imageid}
              </p>
            </div>
            <button
              onClick={() => {
                downloadHandler();
              }}
            >
              Download
            </button>
          </DownloadTab>
        </WholeTab>
        <p className="mt-5">Other Pictures by {getName}</p>
        {placeHolder && <ImagePlaceholder />}
        <WorkGallery>
          {getWorks.map((photo) => {
            return (
              <WorkImageHolder
                key={photo.id}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo(0, 0);
                  navigate(`/imageraft-site/details/${photo.id}`);
                }}
              >
                <WorkGalleryIMG src={photo.src.large} />
                <div className="photo-description">
                  <p className="small">{photo.photographer}</p>
                </div>
              </WorkImageHolder>
            );
          })}
        </WorkGallery>
      </div>
    </PageWrapper>
  );
}

const PageWrapper = styled(motion.div)`
  margin-top: 5px;
  max-width: 100vw;
  overflow-x: hidden;

  @media screen and (max-width: 767px) {
  }
`;
const WholeTab = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .home-link {
    position: absolute;
    top: 10px;
    left: 15px;
    scale: 2;
    z-index: 10;
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 20px;
    border-radius: 20px;
    border: solid 1px #e6e6e6;
    background: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
const DownloadTab = styled.div`
  height: 80px;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 0px;
  background-color: white;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0px 10px;
  }

  button {
    background-color: #559455;
    height: 35px;
    border: none;
    color: white;
    border-radius: 5px;
  }
`;
const DownloadIMG = styled.img`
  position: relative;
  max-width: 80%;
  max-height: 90vh;
  border-radius: 20px 20px 0px 0px;

  @media screen and (max-width: 767px) {
    max-width: 100%;
    max-height: 100vh;
  }
`;

//Gallery stuff starts here
const WorkGallery = styled.div`
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

const WorkImageHolder = styled.div`
  position: relative;
  border-radius: 20px;
  margin-bottom: 20px;
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
      pointer-events: none;
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
const WorkGalleryIMG = styled.img`
  width: 100%;
  position: relative;
  border-radius: 20px;

  @media screen and (max-width: 767px) {
    border-radius: 12px;
  }
`;
export default Details;
