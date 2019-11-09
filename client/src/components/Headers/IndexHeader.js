/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
      <div className="page-header section-dark">
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
          <source src={require("../../assets/video/ChalkboardTypography.mp4")} type="video/mp4" />
        </video>
      </div>

      <div className="overlay">
        <Container>
          <div className="title-brand">
          <img alt="Redbridge Soft Logo" src={require("../../assets/img/RedbridgeLogo.png")} />
            <h1 className="presentation-title">Creation, Innovation, Transition</h1>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
