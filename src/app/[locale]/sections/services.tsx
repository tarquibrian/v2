import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import React from "react";
import logotest from "../../../../public/img/logotest.svg";
import Image from "next/image";

const Services = () => {
  return (
    <Wrapper id="services">
      <div className="services__section">
        <div className="services__section-title">
          <h2 className="title-sm">WHAT I DO</h2>
        </div>
        <LineY id="intern" />
        <div className="services__section-grid">
          <Wrapper id="grid gridone" type="div">
            <div className="grid__content">
              <Wrapper id="item" type="div">
                <div className="grid__content-group">
                  <div className="logo">
                    {/* <Image src={logotest} alt="logotest groupt" /> */}
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M59.5 20.5V79.5H0.5V20.5H59.5ZM10.5 69.5V10.5H69.5V69.5H10.5ZM20.5 59.5V0.5H79.5V59.5H20.5Z"
                        stroke="black"
                      />
                    </svg>
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
                    {/* <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M40 79.5C50 50 50 50 79.5 40C50 30 50 30 40 0.5C30 30 30 30 0.5 40C30 50 30 50 40 79.5Z"
                        stroke="black"
                      />
                      <path
                        d="M40 50C42.5316 42.5316 42.5316 42.5316 50 40C42.5316 37.4684 42.5316 37.4684 40 30C37.4684 37.4684 37.4684 37.4684 30 40C37.4684 42.5316 37.4684 42.5316 40 50Z"
                        stroke="black"
                      />
                      <path
                        d="M40 65C46.3291 46.3291 46.3291 46.3291 65 40C46.3291 33.6709 46.3291 33.6709 40 15C33.6709 33.6709 33.6709 33.6709 15 40C33.6709 46.3291 33.6709 46.3291 40 65Z"
                        stroke="black"
                      />
                    </svg> */}
                    <svg
                      width="81"
                      height="81"
                      viewBox="0 0 81 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 80.5V21.5C30 31 50 51 59.5 80.5H0.5Z"
                        stroke="black"
                      />
                      <path
                        d="M10.5 70.5V11.5C40 21 60 41 69.5 70.5H10.5Z"
                        stroke="black"
                      />
                      <path
                        d="M20.5 60.5V1.5C50 11 70 31 79.5 60.5H20.5Z"
                        stroke="black"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h3 className="title-md">DESIGN</h3>
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
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="30" cy="50" r="29.5" stroke="black" />
                      <circle cx="40" cy="40" r="29.5" stroke="black" />
                      <circle cx="50" cy="30" r="29.5" stroke="black" />
                    </svg>
                  </div>
                  <div className="content">
                    <h3 className="title-md">CONTENT</h3>
                    <p>
                      We craft compelling brand identities that leave a lasting
                      impression.
                    </p>
                  </div>
                </div>
              </Wrapper>

              <LineY id="intern" />
              <Wrapper id="item" type="div">
                <div className="grid__content-group">
                  <div className="logo">
                    <svg
                      width="80"
                      height="80"
                      viewBox="0 0 80 80"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 79.5V20.5C10 70 10 70 59.5 79.5H0.5Z"
                        stroke="black"
                      />
                      <path
                        d="M10.5 69.5V10C20 59.5 20.5 60 70 69.5H10.5Z"
                        stroke="black"
                      />
                      <path
                        d="M20.5 59.5V0.5C30 50 30 50 79.5 59.5H20.5Z"
                        stroke="black"
                      />
                    </svg>
                  </div>
                  <div className="content">
                    <h3 className="title-md">SUPPORT</h3>
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
