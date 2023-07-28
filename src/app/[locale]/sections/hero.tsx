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

const Hero = () => {
  return (
    <Wrapper id="hero" py="4rem">
      <div className="hero__section">
        <div className="hero__section-main">
          <div className="main__content">
            <h1 className="title-header">
              Elevate your brand level with <span>one-of-a-kind</span> web
              creations.
              {/* Building user-centric and intuitive web interfaces. */}
            </h1>
            <p className="desc-lg">
              I am a continuous learning enthusiast and keep up to date with the
              latest trends in web design and user experience. This allows me to
              solutions in my projects.
            </p>
          </div>
          <div className="main-logo">
            {/* <Image src={logotest} alt="logo test" /> */}
            <svg
              width="86"
              height="106"
              viewBox="0 0 86 106"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1.28084"
                y="53"
                width="59"
                height="59"
                transform="rotate(-45 1.28084 53)"
                stroke="black"
              />
              <rect
                x="1.28084"
                y="43"
                width="59"
                height="59"
                transform="rotate(-45 1.28084 43)"
                stroke="black"
              />
              <path
                d="M37.3433 41.7869L43.0001 36.1301L48.657 41.7869L43.0001 47.4438L37.3433 41.7869Z"
                fill="black"
              />
              <path
                d="M36.9897 41.4334L36.6362 41.7869L36.9897 42.1405L42.6466 47.7973L43.0001 48.1509L43.3537 47.7973L49.0106 42.1405L49.3641 41.7869L49.0106 41.4334L43.3537 35.7765L43.0001 35.423L42.6466 35.7765L36.9897 41.4334ZM1.28084 63.0001L43.0001 21.2808L84.7195 63.0001L43.0001 104.719L1.28084 63.0001ZM43.0001 46.7367L38.0504 41.7869L43.0001 36.8372L47.9499 41.7869L43.0001 46.7367Z"
                stroke="black"
              />
            </svg>
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
