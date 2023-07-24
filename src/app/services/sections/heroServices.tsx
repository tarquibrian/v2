import Wrapper from "@/utils/wrapper";
import React from "react";

const HeroServices = () => {
  return (
    <Wrapper id="heroservices">
      <div className="heroservices__section">
        <div className="heroservices__section-title">
          <h1 className="title-header">We create your brand together.</h1>
        </div>
        <div className="heroservices__section-subnav">
          <a href="#branding">BRANDING</a>
          <a href="http://">DESIGN</a>
          <a href="http://">CONTENT</a>
          <a href="http://">SUPPORT</a>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroServices;
