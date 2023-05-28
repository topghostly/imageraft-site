import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import initimage from "../component/static/texe2image.png";
import ImagePlaceholder from "../component/ImagePlaceholder";
import { useState, useEffect } from "react";
function TextToImage() {
  const [placeholder, setPlaceHolder] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("1024x1024");

  const showPlaceHolder = () => {
    setPlaceHolder(true);
    getImage();
  };
  const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  const getImage = async () => {
    const url = "https://api.openai.com/v1/images/generations";
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        size: size,
      }),
    };
    try {
      const responce = await fetch(url, options);
      const data = await responce.json();
      console.log(data);
    } catch (error) {}
  };
  return (
    <ViewPort
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{
        ease: "easeInOut",
        duration: 0.2,
      }}
    >
      <div className="container-sm">
        <div className="row mb-5">
          <div className="col-md-3 co-1">
            <div className="description-container">
              <label htmlFor="image-description">Image description</label>
              <textarea
                onChange={(e) => {
                  setPrompt(e.target.value);
                }}
                name="image-description"
                className="image-description"
                placeholder="E.g Storm troppers in suit"
              ></textarea>
              <label htmlFor="size">Image size</label>
              <input
                type="text"
                placeholder="256x256"
                name="size"
                onChange={(e) => {
                  setSize(e.target.value);
                }}
              />
              <small>The default size is 1024x1024</small>
              <button
                type="submit"
                onClick={() => {
                  showPlaceHolder();
                }}
              >
                Generate
              </button>
            </div>
          </div>
          <div className="col-md-9 co-2">
            {!placeholder && (
              <div className="init-image-container">
                <img src={initimage} alt="" />
              </div>
            )}
            {placeholder && <ImagePlaceholder />}
          </div>
        </div>
      </div>
    </ViewPort>
  );
}
const ViewPort = styled(motion.div)`
  max-width: 100vw;
  min-height: 60vh;
  /* overflow: hidden; */
  padding-top: 50px;
  margin-top: 100px;
  margin-bottom: 100px;
  @media screen and (max-width: 575px) {
    margin-top: 0px;
  }

  .co-1 {
    padding: "5px";

    button {
      width: 100%;
      background-color: #353535;
      color: white;
      border: none;
      height: 35px;
      font-weight: lighter;
      margin-top: 20px;
      transition: all 0.2s ease-in-out;
      :hover {
        background-color: #d3d3d3;
        color: #353535;
        transition: all 0.2s ease-in-out;
      }
    }
    .image-description {
      position: relative;
      width: 100%;
      border: solid 2px #d3d3d3;
      min-height: 150px;
      outline: none;
      padding: 10px;
      color: #353535;
    }
    input {
      position: relative;
      width: 100%;
      border: solid 2px #d3d3d3;
      height: 35px;
      outline: none;
      padding: 10px;
      color: #353535;
    }
    small {
      font-size: 12px;
      font-weight: bolder;
      color: #d3d3d3;
    }
    label {
      font-size: 14px;
      font-weight: bolder;
      color: #353535;
    }
  }
  .co-2 {
    .init-image-container {
      position: relative;
      height: 650px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 350px;
        opacity: 0.5;
        pointer-events: none;
      }
    }
  }
`;
export default TextToImage;
