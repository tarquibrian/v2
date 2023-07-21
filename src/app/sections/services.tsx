import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import React from "react";
import logotest from "../../../public/img/logotest.svg";
import Image from "next/image";

const Services = () => {
  return (
    <Wrapper id="services">
      <div className="services__section">
        <div className="services__section-title">
          <h2 className="title-sm">WHAT I DO</h2>
        </div>
        <LineY />
        <div className="services__section-grid">
          <Wrapper id="grid" type="div">
            <div className="grid__content">
              <div className="grid__content-group">
                <div className="logo">
                  <Image src={logotest} alt="logotest groupt" />
                </div>
                <div className="content">
                  <h3 className="title-md">BRANDING</h3>
                  <p>
                    We craft compelling brand identities that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
              <LineY />
              <div className="grid__content-group">
                <div className="logo">
                  <Image src={logotest} alt="logotest groupt" />
                </div>
                <div className="content">
                  <h3 className="title-md">BRANDING</h3>
                  <p>
                    We craft compelling brand identities that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
            </div>
          </Wrapper>
          <div className="grid">
            <div className="grid__content">
              <div className="grid__content-group">
                <div className="logo">
                  <Image src={logotest} alt="logotest groupt" />
                </div>
                <div className="content">
                  <h3 className="title-md">BRANDING</h3>
                  <p>
                    We craft compelling brand identities that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
              <LineY />
              <div className="grid__content-group">
                <div className="logo">
                  <Image src={logotest} alt="logotest groupt" />
                </div>
                <div className="content">
                  <h3 className="title-md">BRANDING</h3>
                  <p>
                    We craft compelling brand identities that leave a lasting
                    impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
