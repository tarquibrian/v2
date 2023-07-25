import Wrapper from "@/utils/wrapper";
import React from "react";
import { projectsData } from "@/data/work";
import Link from "next/link";

const WorkList = () => {
  console.log(projectsData);
  return (
    <Wrapper id="worklist">
      {projectsData.en.projects.map((project) => {
        return (
          <Wrapper id="project" key={project.title} type="div">
            <div className="project__content">
              <div className="project__content-title">
                <h2>{project.title}</h2>
                <div className="services">
                  {project.services.map((service, i) => (
                    <div key={i} className="service">
                      {service}
                    </div>
                  ))}
                </div>
                <Link href={"/"}>{project.button}</Link>
              </div>
            </div>
          </Wrapper>
        );
      })}
    </Wrapper>
  );
};

export default WorkList;
