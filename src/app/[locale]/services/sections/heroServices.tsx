import Wrapper from "@/utils/wrapper";
import React from "react";

const HeroServices = () => {
  return (
    <Wrapper id="heroservices">
      <div className="heropage__section">
        <div className="heropage__section-title">
          <div className="title-sm"> MY SERVICES</div>
          <h1 className="title-header">We create your brand together.</h1>
        </div>
        <div className="heropage__section-subnav">
          <div className="subnav__icon">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40 78.5C50 49.3734 50 49.3734 79.5 39.5C50 29.6266 50 29.6266 40 0.5C30 29.6266 30 29.6266 0.5 39.5C30 49.3734 30 49.3734 40 78.5Z"
                stroke="black"
              />
              <path
                d="M50 40C42.5316 42.5316 42.5316 42.5316 40 50C37.4684 42.5316 37.4684 42.5316 30 40C37.4684 37.4684 37.4684 37.4684 40 30C42.5316 37.4684 42.5316 37.4684 50 40Z"
                fill="black"
                stroke="black"
              />
              <path
                d="M40 65C46.3291 46.3291 46.3291 46.3291 65 40C46.3291 33.6709 46.3291 33.6709 40 15C33.6709 33.6709 33.6709 33.6709 15 40C33.6709 46.3291 33.6709 46.3291 40 65Z"
                stroke="black"
              />
            </svg>
          </div>
          <div className="subnav__labels">
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
      </div>
    </Wrapper>
  );
};

export default HeroServices;
