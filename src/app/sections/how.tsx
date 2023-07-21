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
            <h2>We help our clients succeed with innovative strategies.</h2>
          </div>
          <div className="title__logo">L</div>
        </div>
        <LineY />
        <div className="how__section-desc">
          <p className="desc-lg">
            Through careful analysis, creative thinking, and a deep
            understanding of their goals, we empower businesses to surpass
            expectations and thrive in today's dynamic and competitive
            landscape.
          </p>
          <Link href={"/"}>OUR SERVICES</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default How;
