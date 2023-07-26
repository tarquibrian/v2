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
          <div className="nav-link">BRANDING</div>
          <div className="nav-link">DESIGN</div>
          <div className="nav-link">CONTENT</div>
          <div className="nav-link">SUPPORT</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroWork;
