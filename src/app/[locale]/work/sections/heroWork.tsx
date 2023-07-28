import Wrapper from "@/utils/wrapper";
import React from "react";

const HeroWork = () => {
  return (
    <Wrapper id="herowork">
      <div className="heropage__section">
        <div className="heropage__section-title">
          <div className="title-sm">MY WORK</div>
          <h1 className="title-header">
            Find inspiration in our showcased web projects for satisfied
            clients.
          </h1>
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
                d="M46.6548 50.6379L46.5482 50.7395L46.5136 50.8827L39.9996 77.8691L33.4857 50.8827L33.4496 50.7334L33.336 50.63L12.8862 32.039L39.867 39.482L40.0024 39.5193L40.1374 39.4808L66.184 32.0387L46.6548 50.6379Z"
                fill="black"
                stroke="black"
              />
              <path
                d="M40.1475 57.1705L40 57.1249L39.8525 57.1705L1.87184 68.8987L30.4221 41.5382L30.5279 41.4368L30.5623 41.2943L40 2.13408L49.4376 41.2945L49.472 41.437L49.5778 41.5383L78.1281 68.8987L40.1475 57.1705Z"
                stroke="black"
              />
            </svg>
          </div>
          <div className="subnav__labels">
            <div className="nav-link">BRANDING</div>
            <div className="nav-link">DESIGN</div>
            <div className="nav-link">CONTENT</div>
            <div className="nav-link">SUPPORT</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroWork;
