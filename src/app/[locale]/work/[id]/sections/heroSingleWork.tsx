import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import Link from "next/link";
import React from "react";

const HeroSingleWork = () => {
  return (
    <Wrapper id="herosinglework">
      <div className="herosinglework__section">
        <div className="herosinglework__section-title">
          <h1 className="title-header">DANCING STARS</h1>
          <p className="desc-lg">
            Discover how we reimagined their brand identity, crafting a
            compelling narrative that authentically connects with their audience
            and propels their business forward.
          </p>
        </div>
        <LineY id="intern"/>
        <div className="herosinglework__section-details">
          <div className="details__content">
            <div className="label-title">CLIENT</div>
            <div className="label-desc">LOREM IPSUN</div>
          </div>
          <div className="details__content">
            <div className="label-title">YEAR</div>
            <div className="label-desc">2022</div>
          </div>
          <div className="details__content">
            <div className="label-title">TIMELINE</div>
            <div className="label-desc">3 MONTHS</div>
          </div>
          <div className="details__content">
            <div className="label-title">SERVICES</div>
            <div className="label-desc link-group">
              <Link href={"/services"} className="link">DESIGN</Link>
              <Link href={"/services"} className="link">DESIGN</Link>
              <Link href={"/services"} className="link">DESIGN</Link>
            </div>
          </div>
          <div className="details__content">
            <div className="label-title">WEBSITE</div>
            <div className="label-desc">
              <Link href={"/"} className="link">WEBSITE.COM</Link>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSingleWork;
