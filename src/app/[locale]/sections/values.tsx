import Wrapper from "@/utils/wrapper";
import React from "react";
import imgtest from "../../../../public/img/brand.jpg";
import Image from "next/image";
import { LineY } from "@/utils/line";

const Values = () => {
  return (
    <section id="values">
      <div className="values__section">
        <Wrapper id="values__section-title" type="div">
          <div className="title__content">
            <h2 className="title-header">My Values</h2>
          </div>
        </Wrapper>
        <Wrapper id="values__section-content" type="div">
          <div className="content__values">
            <div className="content__values-picture">
              <Image src={imgtest} alt="imgtest picture" />
            </div>
            <LineY />
            <div className="content__values-grid">
              <Wrapper id="vision" type="div">
                <div className="value__content">
                  <div className="logo">
                    <span>01</span>
                  </div>
                  <div className="info">
                    <h3 className="title-md">USER-CENTRIC</h3>
                    <p className="desc-sm">
                      From designing intuitive interfaces to optimizing
                      performance, every step in the process aims to improve
                      user satisfaction and deliver an exceptional experience. I
                      believe that a positive user experience is essential to
                      the success of any website or application.
                    </p>
                  </div>
                </div>
              </Wrapper>
              <Wrapper id="innovation" type="div">
                <div className="value__content">
                  <div className="logo">
                    <span>02</span>
                  </div>
                  <div className="info">
                    <h3 className="title-md">INNOVATION</h3>
                    <p className="desc-sm">
                      At the forefront of technological trends, transcending the
                      ordinary with innovative web solutions, opening up new
                      opportunities for my clients. I believe in challenging the
                      established and constantly looking for more creative and
                      efficient ways to face challenges.
                    </p>
                  </div>
                </div>
              </Wrapper>
              <div className="quality">
                <div className="value__content">
                  <div className="logo">
                    <span>03</span>
                  </div>
                  <div className="info">
                    <h3 className="title-md">QUALITY</h3>
                    <p className="desc-sm">
                      Exceed expectations with excellence in quality. My
                      commitment is to offer superior products and services.
                      Through rigorous control processes and meticulous
                      attention to detail, each project is carried out to the
                      highest standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Values;
