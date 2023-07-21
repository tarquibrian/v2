import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import Link from "next/link";
import React from "react";

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
          a
        </div>
      </div>
    </Wrapper>
  );
};

export default Projects;
