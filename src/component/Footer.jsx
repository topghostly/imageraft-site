import React from "react";
import "../App.css";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./static/imageraft.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterWrapper>
      <div className="container-lg">
        <div className="row">
          <Link className="col-md-3 columns" to={"/imageraft-site"}>
            <img src={Logo} alt="theLogo" />
          </Link>
          <div className="col-md-4 columns p-1">
            <div className="footer-links text-muted">About</div>
            <div className="footer-links text-muted">Name</div>
            <div className="footer-links text-muted">Terms</div>
            <div className="footer-links text-muted">Terms</div>
          </div>
          <div className="col-md-5 columns">
            <form action="POST">
              <input type="mail" placeholder="Example@email.com" />
            </form>
          </div>
        </div>
        <p className="m-3 mb-3 text-muted text-center">
          <small>© 2023. All Rights Reserved.</small>
        </p>
      </div>
    </FooterWrapper>
  );
}
const FooterWrapper = styled.div`
  max-width: 100vw;
  margin: 0px;
  padding: 0px;
  height: 100px;
  background-color: #ffffff;
  position: relative;
  border-top: solid 1px #e6e6e6;

  .columns {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    @media screen and (max-width: 767px) {
      height: 50px;
    }

    img {
      width: 100px;
    }

    .footer-links {
      margin: 0px 5px;
    }
    input {
      background-color: aliceblue;
      width: 300px;
      height: 38px;
      border-radius: 50px;
      position: relative;
      padding: 0px 30px;
      outline: none;
      border: none;
      font-size: 17px;
      background-color: #e6e6e6;
    }
  }
`;

export default Footer;
