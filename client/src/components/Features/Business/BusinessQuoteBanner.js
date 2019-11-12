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

function BusinessQuoteBanner() {
  return (
    <>
        <div className="section-quote" style={{backgroundImage:"url(" + require("../../../assets/img/business_pic.png") + ")"}}>
          <div className="content-center">
            <Container>
                <div className="typography-line">
                    <h3 className="strong-title font-white">Our business challenges to discover the uncovered</h3>
                    <br />
                    <h5 className="strong-title font-white">- Redbridge Soft -</h5>
                </div>
            </Container>
          </div>
        </div>
    </>
  );
}

export default BusinessQuoteBanner;