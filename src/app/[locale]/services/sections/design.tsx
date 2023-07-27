import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import imgtest from "../../../../../public/img/brand.jpg";
import DesignIcon from "../../components/icons/design";

const DesignService = () => {
  return (
    <Wrapper id="design">
      <div className="wrapperservice__section">
        <div className="wrapperservice__section-info">
          <div className="title__content">
            <div className="logo">
              <DesignIcon />
            </div>
            <h2>DESIGN</h2>
            <div className="">LOGO</div>
            <div className="">CORPORATE IDENTITY</div>
            <div className="">BRAND GUIDE</div>
            <Link href={"/contact"}>GET IN TOUGH</Link>
          </div>
        </div>
        <LineY id="intern" />
        <div className="wrapperservice__section-desc">
          <h3>
            A strong brand is a tool to connect people with your brand all
            around the world.
          </h3>
          <div className="desc__content ">
            <p>
              A strong brand serves as a powerful conduit, transcending borders
              and bringing people from all corners of the globe together. It
              acts as a universal language, fostering connections, and forging
              lasting relationships.
            </p>
            <p>
              By crafting a compelling brand identity, we equip you with the
              tools to resonate with diverse audiences, irrespective of
              geographical boundaries.
            </p>
            <p>
              Our strategic approach ensures that your brand story is
              authentically communicated, captivating hearts and minds across
              cultures.
            </p>
            <p>
              Let us guide you in harnessing the true potential of your brand,
              bridging gaps, and leaving an indelible mark on a global scale.
              Together, we can connect the world to your brand's unique essence.
            </p>
          </div>
          <div className="desc__picture">
            <Image src={imgtest} alt="picture brand sercivice" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default DesignService;
