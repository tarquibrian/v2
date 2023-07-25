import Wrapper from "@/utils/wrapper";
import React from "react";
import { projectsData } from "@/data/workData";
import Link from "next/link";
import img from "../../../../../public/img/brand.jpg";
import Image from "next/image";

const WorkList = () => {
  console.log(projectsData);
  return (
    <Wrapper id="worklist">
      {projectsData.en.projects.map((project) => {
        return (
          <Wrapper id="project" key={project.title} type="div">
            <div className="project__content">
              <div className="project__content-title">
                <div className="title__content">
                  <h2>{project.title}</h2>
                  <div className="services">
                    {project.services.map((service, i) => (
                      <div key={i} className="service">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={`/${project.title}`}>{project.button}</Link>
              </div>
              <div className="project__content-picture">
                <div className="picture__content">
                  <Image src={img} alt="picture project" />
                </div>
              </div>
            </div>
          </Wrapper>
        );
      })}
    </Wrapper>
  );
};

export default WorkList;
