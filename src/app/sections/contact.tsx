import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="contact__section">
        <div className="contact__section-title">
          <div className="title__content">
            <span className="title-sm">CONTACT</span>
            <h2 className="title-header">LET'S BRING YOUR BRAND TO THE NEXT LEVEL</h2>
          </div>
          <div className="title__logo">L</div>
        </div>
        <LineY id="intern"/>
        <div className="contact__section-desc">
          <p className="desc-lg">
            Together, let's elevate your brand to new heights by unleashing its
            full potential and captivating your target audience.
          </p>
          <Link href={"/"}>CONTACT</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
