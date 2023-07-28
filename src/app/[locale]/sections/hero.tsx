import Wrapper from "@/utils/wrapper";
import Image from "next/image";
import React from "react";
import imgHero11 from "../../../images/hero11.png";
import imgHero12 from "../../../images/hero12.png";
import imgHero13 from "../../../images/hero13.png";
import imgHero14 from "../../../images/hero14.png";

import imgHero21 from "../../../images/hero21.png";
import imgHero22 from "../../../images/hero22.png";
import imgHero23 from "../../../images/hero23.png";

import imgHero31 from "../../../images/hero31.png";
import imgHero32 from "../../../images/hero32.png";
import imgHero33 from "../../../images/hero33.png";
import imgHero34 from "../../../images/hero34.png";

import imgHero41 from "../../../images/hero41.png";
import imgHero42 from "../../../images/hero42.png";

import logotest from "../../../../public/img/logotest.svg";
import OneIcon from "../components/icons/icon1";

const Hero = () => {
  return (
    <Wrapper id="hero" py="4rem">
      <div className="hero__section">
        <div className="hero__section-main">
          <div className="main__content">
            <h1 className="title-header">
              Elevate your brand level with one-of-a-kind web creations.
              {/* Building user-centric and intuitive web interfaces. */}
            </h1>
            <p className="desc-lg">
              I am a design and development enthusiast and keep up with the
              latest trends in web design and user experience. This allows me to
              implement innovative solutions in my projects.
            </p>
          </div>
          <div className="main-logo">
            <OneIcon />
          </div>
        </div>
        <div className="hero__section-picture">
          <div className="picture__card">
            <div className="picture__card-carousel">
              <div className="carousel__content">
                <div className="column">
                  <Image
                    src={imgHero12}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero22}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero32}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero42}
                    alt="img from hero"
                    placeholder="blur"
                  />

                  <Image
                    src={imgHero12}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero22}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero32}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero42}
                    alt="img from hero"
                    placeholder="blur"
                  />
                </div>
                <div
                  className="column"
                  style={{ animationName: "downAnimation" }}
                >
                  <Image
                    src={imgHero34}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero21}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero41}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero31}
                    alt="img from hero"
                    placeholder="blur"
                  />

                  <Image
                    src={imgHero34}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero21}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero41}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero31}
                    alt="img from hero"
                    placeholder="blur"
                  />
                </div>
                <div className="column">
                  <Image
                    src={imgHero23}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero14}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero33}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero11}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero13}
                    alt="img from hero"
                    placeholder="blur"
                  />

                  <Image
                    src={imgHero23}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero14}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero33}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero11}
                    alt="img from hero"
                    placeholder="blur"
                  />
                  <Image
                    src={imgHero13}
                    alt="img from hero"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
