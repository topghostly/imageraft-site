import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

function ImagePlaceholder() {
  return (
    <div className="container-sm">
      <WholePage>
        <div style={{ height: "60vh" }}>
          {" "}
          <LoaderAnim delay={"0"} />{" "}
        </div>
        <div style={{ height: "20vh" }}>
          {" "}
          <LoaderAnim delay={".8"} />{" "}
        </div>
        <div style={{ height: "40vh" }}>
          {" "}
          <LoaderAnim delay={"0"} />{" "}
        </div>
        <div style={{ height: "50vh" }}>
          {" "}
          <LoaderAnim delay={".5"} />{" "}
        </div>
        <div style={{ height: "30vh" }}>
          {" "}
          <LoaderAnim delay={"1.2"} />{" "}
        </div>
        <div style={{ height: "70vh" }}>
          {" "}
          <LoaderAnim delay={".6"} />{" "}
        </div>

        <div style={{ height: "60vh" }}>
          {" "}
          <LoaderAnim delay={"0"} />{" "}
        </div>
        <div style={{ height: "20vh" }}>
          {" "}
          <LoaderAnim delay={".8"} />{" "}
        </div>
        <div style={{ height: "40vh" }}>
          {" "}
          <LoaderAnim delay={"0"} />{" "}
        </div>
        <div style={{ height: "50vh" }}>
          {" "}
          <LoaderAnim delay={".5"} />{" "}
        </div>
        <div style={{ height: "30vh" }}>
          {" "}
          <LoaderAnim delay={"1.2"} />{" "}
        </div>
        <div style={{ height: "70vh" }}>
          {" "}
          <LoaderAnim delay={".6"} />{" "}
        </div>
      </WholePage>
    </div>
  );
}
const WholePage = styled.div`
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
  min-height: 200vh;
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

  * {
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: #f1f1f1;
    margin-top: 20px;
    border-radius: 20px;
  }
`;
const LoaderAnim = styled.div`
  display: absolute;
  transform: skewX(200);
  width: 100%;
  top: -20px;
  left: 0;
  background: linear-gradient(
    90deg,
    #f3f3f3 10%,
    #e9e9e9 30%,
    #e9e9e9 70%,
    #f3f3f3 90%
  );
  height: 100%;
  animation: SwipeAnimation 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
  animation-delay: ${(props) => props.delay}s;
`;
export default ImagePlaceholder;
