import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import imgtest from "../../../public/img/brand.jpg";

const Projects = () => {
  return (
    <Wrapper id="projects">
      <div className="projects__section">
        <div className="projects__section-title">
          <div className="title__content">
            <h2 className="title-lg">FEATURED WORK</h2>
            <p className="desc-md">
              I present to you some outstanding projects that combine
              creativity, strategy and cutting-edge design.
            </p>
            <Link href={"/"}>SEE ALL WORK</Link>
          </div>
        </div>
        <LineY id="intern" />
        <div className="projects__section-grid">
          <Wrapper id="picture" type="div">
            <div className="picture__content">
              <Link href={"/"}>
                <Image
                  src={imgtest}
                  alt="img test picture"
                  placeholder="blur"
                />
              </Link>
            </div>
            <div className="picture__title">
              <h3 className="title-sm">Dancing Stars</h3>
              <span className="title-sm">2022</span>
            </div>
          </Wrapper>
          <div className="grid__subgrid">
            <div className="grid__subgrid-group one">
              <Wrapper id="item" type="div">
                <div className="group__picture">
                  <div className="img">
                    <Link href={"/"}>
                      <Image
                        src={imgtest}
                        alt="img test picture"
                        placeholder="blur"
                      />
                    </Link>
                  </div>
                  <div className="title">
                    <h3 className="title-sm">Dancing Stars</h3>
                    <span className="title-sm">2022</span>
                  </div>
                </div>
              </Wrapper>
              <LineY />
              <Wrapper id="item" type="div">
                <div className="group__picture">
                  <div className="img">
                    <Link href={"/"}>
                      <Image
                        src={imgtest}
                        alt="img test picture"
                        placeholder="blur"
                      />
                    </Link>
                  </div>
                  <div className="title">
                    <h3 className="title-sm">Dancing Stars</h3>
                    <span className="title-sm">2022</span>
                  </div>
                </div>
              </Wrapper>
            </div>
            <div className="grid__subgrid-group two">
              <Wrapper id="item" type="div">
                <div className="group__picture">
                  <div className="img">
                    <Link href={"/"}>
                      <Image
                        src={imgtest}
                        alt="img test picture"
                        placeholder="blur"
                      />
                    </Link>
                  </div>
                  <div className="title">
                    <h3 className="title-sm">Dancing Stars</h3>
                    <span className="title-sm">2022</span>
                  </div>
                </div>
              </Wrapper>

              <LineY />
              <Wrapper id="item" type="div">
                <div className="group__picture">
                  <div className="img">
                    <Link href={"/"}>
                      <Image
                        src={imgtest}
                        alt="img test picture"
                        placeholder="blur"
                      />
                    </Link>
                  </div>
                  <div className="title">
                    <h3 className="title-sm">Dancing Stars</h3>
                    <span className="title-sm">2022</span>
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

export default Projects;
