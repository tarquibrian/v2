import Wrapper from "@/utils/wrapper";
import React from "react";
import imgtest from "../../../public/img/brand.jpg";
import Image from "next/image";
import { LineY } from "@/utils/line";

const Values = () => {
  return (
    <section id="values">
      <div className="values__section">
        <Wrapper id="values__section-title" type="div">
          <div className="title__content">
            <h2 className="title-header">MY VALUES</h2>
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
                    <h3 className="title-lg">USER-CENTRIC</h3>
                    <p className="desc-sm">
                      Our relentless pursuit of a shared vision fuels our
                      creativity and propels us forward. With clarity and
                      foresight, we craft strategies that align with our
                      clients' goals and aspirations, transforming their dreams
                      into reality and shaping a future worth embracing.
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
                    <h3 className="title-lg">INNOVATION</h3>
                    <p className="desc-sm">
                      Our relentless pursuit of a shared vision fuels our
                      creativity and propels us forward. With clarity and
                      foresight, we craft strategies that align with our
                      clients' goals and aspirations, transforming their dreams
                      into reality and shaping a future worth embracing.
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
                    <h3 className="title-lg">QUALITY</h3>
                    <p className="desc-sm">
                      Our relentless pursuit of a shared vision fuels our
                      creativity and propels us forward. With clarity and
                      foresight, we craft strategies that align with our
                      clients' goals and aspirations, transforming their dreams
                      into reality and shaping a future worth embracing.
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
