import Wrapper from "@/utils/wrapper";
import React from "react";

const HeroAbout = () => {
  return (
    <Wrapper id="heroabout">
      <div className="heroabout__section">
        <div className="heroabout__section-title">
          <div className="title-sm">ABOUT ME</div>
          <h1 className="title-header">N</h1>
        </div>
        <div className="heroabout__section-features">
          <div className="feature">DIGITAL FRELANCER</div>
          <div className="feature">WEB DESIGNER</div>
          <div className="feature">WEB DEVELOPER</div>
          <div className="feature">SYSTEM ENGINEER</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroAbout;
