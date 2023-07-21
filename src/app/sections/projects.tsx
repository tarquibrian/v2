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
          <h2 className="title-lg">FEATURED WORK</h2>
          <p className="desc-md">
            Showcasing our standout projects that blend creativity, strategy,
            and cutting-edge design.
          </p>
          <Link href={"/"}>SEE ALL WORK</Link>
        </div>
        <LineY />
        <div className="projects__section-grid">
          <Wrapper id="picture" type="div">
            <div className="picture__content">
              <Image src={imgtest} alt="img test picture" />
            </div>
            <div className="picture__title">
              <h3 className="title-sm">Dancing Stars</h3>
              <span className="title-sm">2022</span>
            </div>
          </Wrapper>
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
