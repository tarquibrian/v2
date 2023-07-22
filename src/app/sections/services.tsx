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
        <LineY id="intern"/>
        <div className="services__section-grid">
          <Wrapper id="grid gridone" type="div">
            <div className="grid__content">
              <Wrapper id="item" type="div">
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
              </Wrapper>

              <LineY />
              <Wrapper id="item" type="div">
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
              </Wrapper>
            </div>
          </Wrapper>
          <div className="grid gridtwo">
            <div className="grid__content">
              <Wrapper id="item" type="div">
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
              </Wrapper>

              <LineY id="intern"/>
              <Wrapper id="item" type="div">
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
              </Wrapper>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
