import Wrapper from "@/utils/wrapper";
import React from "react";
import imgtest from "../../../../../public/img/brand.jpg";
import Image from "next/image";

const ProfileAbout = () => {
  return (
    <Wrapper id="profileabout">
      <div className="profileabout__section">
        <div className="profileabout__section-picture">
          <div className="picture__content">
            <Image src={imgtest} alt="about profile picture" />
          </div>
        </div>
        <div className="profileabout__section-info">
          <div className="info__content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              numquam illum ratione, odit nostrum quam, architecto minima
              cupiditate aperiam reprehenderit placeat suscipit sequi? Quos
              molestiae, optio molestias maxime et quidem!
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfileAbout;
