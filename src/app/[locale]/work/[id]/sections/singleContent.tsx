import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import React from "react";
import imgtest from "../../../../../../public/img/brand.jpg";
import Image from "next/image";

const SingleContent = () => {
  return (
    <Wrapper id="singlecontent">
      <div className="singlecontent__section">
        <div className="singlecontent__section-title">
          <div className="title__content">
            <div className="title__content-feature">
              <h2>CHALLENGE</h2>
              <p>
                Our client needed a brand refresh to better reflect their
                evolving business values and appeal to a younger demographic.
              </p>
              <div className="logo">L</div>
            </div>
            <div className="title__content-feature">
              <h2>CHALLENGE</h2>
              <p>
                Our client needed a brand refresh to better reflect their
                evolving business values and appeal to a younger demographic.
              </p>
              <div className="logo">L</div>
            </div>
            <div className="title__content-feature">
              <h2>CHALLENGE</h2>
              <p>
                Our client needed a brand refresh to better reflect their
                evolving business values and appeal to a younger demographic.
              </p>
              <div className="logo">L</div>
            </div>
          </div>
        </div>
        <LineY />
        <div className="singlecontent__section-pictures">
          <div className="pictures__content">
            <Image src={imgtest} alt="picture image" />
          </div>
          <div className="pictures__content">
            <Image src={imgtest} alt="picture image" />
          </div>
          <div className="pictures__content">
            <Image src={imgtest} alt="picture image" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleContent;
