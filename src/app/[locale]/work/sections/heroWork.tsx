import Wrapper from "@/utils/wrapper";
import React from "react";

const HeroWork = () => {
  return (
    <Wrapper id="herowork">
      <div className="heropage__section">
        <div className="heropage__section-title">
          <div className="title-sm">MY WORK</div>
          <h1 className="title-header">We create your brand together.</h1>
        </div>
        <div className="heropage__section-subnav">
          <a href="#branding">
            <span>BRANDING</span>
          </a>
          <a href="#design">
            <span>DESIGN</span>
          </a>
          <a href="#content">
            <span>CONTENT</span>
          </a>
          <a href="#support">
            <span>SUPPORT</span>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroWork;
