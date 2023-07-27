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

import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Index");
  return (
    <Wrapper id="hero" py="4rem">
      <div className="hero__section">
        <div className="hero__section-main">
          <div className="main__content">
            <h1 className="title-header">{t("title")}</h1>
            <p className="desc-lg">
              I am a continuous learning enthusiast and keep up to date with the
              latest trends in web design and user experience. This allows me to
              solutions in my projects.
            </p>
          </div>
          <div className="main-logo">
            {/* <Image src={logotest} alt="logo test" /> */}
            <svg
              width="69"
              height="94"
              viewBox="0 0 69 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M30.0421 51.0297H1L30.0421 92V51.0297Z" fill="black" />
              <path
                d="M38.881 42.9703H67.9231L38.881 2V42.9703Z"
                fill="black"
              />
              <path
                d="M10.8077 42.9703H1L30.0421 2V15.8359M10.8077 42.9703H30.0421V30.4857M10.8077 42.9703L30.0421 15.8359M30.0421 15.8359V30.4857M21.1923 42.9703L30.0421 30.4857M47.7308 51.0297H38.881V63.7308M47.7308 51.0297L38.881 63.7308M47.7308 51.0297H57.8269M38.881 63.7308V78.1538M57.8269 51.0297H67.9231L38.881 92V78.1538M57.8269 51.0297L38.881 78.1538M1 51.0297H30.0421V92L1 51.0297ZM67.9231 42.9703L38.881 2V42.9703H67.9231Z"
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
