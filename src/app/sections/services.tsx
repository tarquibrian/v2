import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import React from "react";
import BrandingIcon from "../components/icons/branding";
import DesignIcon from "../components/icons/design";
import ContentIcon from "../components/icons/content";
import SupportIcon from "../components/icons/support";
import Link from "next/link";

const Services = () => {
  return (
    <Wrapper id="services">
      <div className="services__section">
        <div className="services__section-title">
          <h2 className="title-sm">WHAT I DO</h2>
        </div>
        <LineY id="intern" />
        <div className="services__section-grid">
          <Wrapper id="grid gridone" type="div">
            <div className="grid__content">
              <Wrapper id="item" type="div">
                <div className="grid__content-group">
                  <div className="logo">
                    <BrandingIcon />
                  </div>
                  <div className="content">
                    <h3 className="title-md">
                      <Link href={"/services"}>BRANDING</Link>
                    </h3>
                    <p>
                      Get a compelling brand identity that leaves a lasting
                      impression.
                    </p>
                  </div>
                </div>
              </Wrapper>

              <LineY />
              <Wrapper id="item" type="div">
                <div className="grid__content-group">
                  <div className="logo">
                    <DesignIcon />
                  </div>
                  <div className="content">
                    <h3 className="title-md">
                      <Link href={"/services"}>DESIGN</Link>
                    </h3>
                    <p>
                      Bringing your ideas to life with innovative and aesthetic
                      designs.
                    </p>
                  </div>
                </div>
              </Wrapper>
            </div>
          </Wrapper>
          <div className="grid gridtwo">
            <div className="grid__content">
              <Wrapper id="item" type="div">
                <div className="grid__content-group">
                  <div className="logo">
                    <ContentIcon />
                  </div>
                  <div className="content">
                    <h3 className="title-md">
                      <Link href={"/services"}>CONTENT</Link>
                    </h3>
                    <p>
                      Engaging content that captivates attention and sparks
                      genuine connections.
                    </p>
                  </div>
                </div>
              </Wrapper>

              <LineY id="intern" />
              <Wrapper id="item" type="div">
                <div className="grid__content-group">
                  <div className="logo">
                    <SupportIcon />
                  </div>
                  <div className="content">
                    <h3 className="title-md">
                      <Link href={"/services"}>SUPPORT</Link>
                    </h3>
                    <p>
                      Overcome limitations and elevate your brand with dedicated
                      support.
                    </p>
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

export default Services;
