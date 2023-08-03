import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import Link from "next/link";
import React from "react";
import OneIcon from "../components/icons/icon1";

const Contact = () => {
  return (
    <Wrapper id="contact">
      <div className="contact__section">
        <div className="contact__section-title">
          <div className="title__content">
            <span className="title-sm">CONTACT</span>
            <h2 className="title-header">
              Ready to dream above the competition? My web services will get you
              there.
            </h2>
          </div>
          <div className="title__logo">
            <OneIcon />
          </div>
        </div>
        <LineY id="intern" />
        <div className="contact__section-desc">
          <p className="desc-lg">
            Collaboratively, we'll elevate your brand to new heights, unlocking
            its full potential and captivating your target audience.
          </p>
          <Link href={"/"}>CONTACT</Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
