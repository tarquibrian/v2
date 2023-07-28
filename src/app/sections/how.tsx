import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import Link from "next/link";
import React from "react";

const How = () => {
  return (
    <Wrapper id="how">
      <div className="how__section">
        <div className="how__section-title">
          <div className="title__content">
            <span className="title-sm">HOW I WORK</span>
            <h2 className="title-header">
              Result-driven web strategies that yield positive outcomes.
            </h2>
          </div>
          <div className="title__logo">L</div>
        </div>
        <LineY id="inter" />
        <div className="how__section-desc">
          <p className="desc-lg">
            With meticulous analysis, creative expertise, and a profound
            understanding of your goals, my web services empower businesses to
            exceed expectations and thrive in the dynamic, competitive digital
            landscape.
          </p>
          <Link href={"/"}>OUR SERVICES</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default How;
