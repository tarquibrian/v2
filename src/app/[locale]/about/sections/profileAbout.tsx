import Wrapper from "@/utils/wrapper";
import React from "react";
import imgtest from "../../../../../public/img/brand.jpg";
import Image from "next/image";
import { LineY } from "@/utils/line";

const ProfileAbout = () => {
  console.log(process.env.API_URL);
  return (
    <Wrapper id="profileabout">
      <div className="profileabout__section">
        <div className="profileabout__section-picture">
          <div className="picture__content">
            <Image src={imgtest} alt="about profile picture" />
          </div>
        </div>
        <LineY id="intern" />
        <div className="profileabout__section-info">
          <div className="info__content">
            <h2 className="title-md">ABOUT ME</h2>
            <p className="desc-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              numquam illum ratione, odit nostrum quam, architecto minima
              cupiditate aperiam reprehenderit placeat suscipit sequi? Quos
              molestiae, optio molestias maxime et quidem!
            </p>
          </div>
          <div className="info__resume">
            <a
              href={process.env.API_URL + "/resumeV1en.pdf"}
              target="_blank"
              rel="noopener noreferrer"
            >
              GET RESUME
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfileAbout;
