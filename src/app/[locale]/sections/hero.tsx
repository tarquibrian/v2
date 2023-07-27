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
              width="82"
              height="83"
              viewBox="0 0 82 83"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M41.5 41.5H1L9 49.5H41.5V41.5Z" fill="black" />
              <path d="M81 41.5L73.1975 33.5H41.5V41.5H81Z" fill="black" />
              <path d="M41.5 57.5H17L25 65.5H41.5V57.5Z" fill="black" />
              <path
                d="M41.5 25.5H65.3951L57.5926 17.5H41.5V25.5Z"
                fill="black"
              />
              <path d="M41.5 82V73.5H33L41.5 82Z" fill="black" />
              <path d="M41.5 1V9.5H49.7901L41.5 1Z" fill="black" />
              <path
                d="M41.5 1V9.5M41.5 1L49.7901 9.5M41.5 1L33 9.5M41.5 82V73.5M41.5 82L33 73.5M41.5 82L49.7901 73.5M1 41.5L9 49.5M1 41.5L9 33.5M1 41.5H41.5M81 41.5L73.1975 33.5M81 41.5L73.1975 49.5M81 41.5H41.5M41.5 49.5H9M41.5 49.5V53.5V57.5M41.5 49.5H73.1975M41.5 49.5V41.5M9 49.5L17 57.5M41.5 57.5H17M41.5 57.5V65.5M41.5 57.5H65.3951M17 57.5L25 65.5M41.5 65.5H25M41.5 65.5V73.5M41.5 65.5H57.5926M25 65.5L33 73.5M41.5 73.5H33M41.5 73.5H49.7901M41.5 33.5H73.1975M41.5 33.5V25.5M41.5 33.5H9M41.5 33.5V41.5M73.1975 33.5L65.3951 25.5M41.5 25.5H65.3951M41.5 25.5V17.5M41.5 25.5H17M65.3951 25.5L57.5926 17.5M41.5 17.5H57.5926M41.5 17.5V9.5M41.5 17.5H25M57.5926 17.5L49.7901 9.5M41.5 9.5H49.7901M41.5 9.5H33M73.1975 49.5L65.3951 57.5M65.3951 57.5L57.5926 65.5M57.5926 65.5L49.7901 73.5M9 33.5L17 25.5M17 25.5L25 17.5M25 17.5L33 9.5"
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
