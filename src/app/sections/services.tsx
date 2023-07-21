import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import React from "react";

const Services = () => {
  return (
    <Wrapper id="services">
      <div className="services__section">
        <div className="services__section-title">
          <h2>WHAT I DO</h2>
        </div>
        <LineY />
        <div className="services__section-grid">
          <Wrapper id="grid" type="div" px="2rem" py="3rem">
            <div className="grid__content">
              <div className="grid__content-group">
                <div className="logo">L</div>
                <div className="content">
                  <h3>BRANDING</h3>
                  <p>
                    We craft compelling brand identities that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
              <LineY />
              <div className="grid__content-group">a</div>
            </div>
          </Wrapper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
