import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import footerImg from "./static/imageraft.png";
function Footer() {
  return (
    <FooterBody>
      <div className="container-sm">
        <div className="row first-row">
          <div className="col-md-3">
            <img src={footerImg} alt="" />
          </div>
          <div className="col-md-3">
            <div className="first">Use ImageRaft</div>
            <div>Pricing</div>
            <div>ImageRaft Boost</div>
            <div>ImageRaft Mobile Ticket App</div>
            <div>ImageRaft Registration Software</div>
            <div>Content Standard</div>
            <div>FAQs</div>
          </div>

          <div className="col-md-3">
            <div className="first">Image To Text</div>
            <div>Sell images Online</div>
            <div>Community Engagement</div>
            <div>Profile Management System</div>
          </div>
          <div className="col-md-3">
            <div className="first">Connect With Us</div>
            <div>Contact Support</div>
            <div>Twitter</div>
            <div>Instagram</div>
            <div>LinkedIn</div>
          </div>
        </div>
        <div className="row mt-5 second-r">
          <div className="col-md-12 flex-c">2023 ImageRaft</div>
        </div>
      </div>
    </FooterBody>
  );
}
const FooterBody = styled.div`
  position: relative;
  margin-top: 100px;
  bottom: 0px;
  background-color: white;
  padding: 30px 0px;
  border-top: solid 1px #e6e6e6;
  max-width: 100vw;
  overflow-x: hidden;
  * {
    color: #353535;
    font-size: 13px;
    margin-top: 10px;
    font-weight: bold;
  }
  .first-row {
    .first {
      color: #353535;
      font-weight: bolder;
      font-size: 15px;
      margin-bottom: 35px;
    }
    *,
    .second-r {
      color: #353535;
      font-size: 13px;
      font-weight: bold;
      :hover {
        color: #c5c5c5;
        transition: all 0.2s ease-in-out;
        cursor: pointer;
      }
    }
  }

  img {
    width: 150px;
    margin: 0px;
  }
  .flex-c {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default Footer;
