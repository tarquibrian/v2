import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <Wrapper id="footer__section" type="div">
        <div className="footer__section-grid">
          <div className="grid__info">
            <div className="grid__info-content">
              <div className="logo">L</div>
              <span>Brian Tarqui Rojas</span>
              <span>Bolivia</span>
            </div>
            <div className="grid__info-socials">a</div>
          </div>
          <LineY />
          <div className="grid__right">
            <div className="grid__right-list">
              <span className="title-sm">PAGES</span>
              <Link href={"/"}>HOME</Link>
              <Link href={"/"}>HOME</Link>
              <Link href={"/"}>HOME</Link>
              <Link href={"/"}>HOME</Link>
            </div>
            <div className="grid__right-list">
              <span className="title-sm">PAGES</span>
              <Link href={"/"}>HOME</Link>
              <Link href={"/"}>HOME</Link>
              <Link href={"/"}>HOME</Link>
              <Link href={"/"}>HOME</Link>
            </div>
            <div className="grid__right-list">
              <span className="title-sm">PAGES</span>
              <Link href={"/"}>HOME</Link>
              <Link href={"/"}>HOME</Link>
              <Link href={"/"}>HOME</Link>
              <Link href={"/"}>HOME</Link>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="author">
        <div className="author-info">© POWERED BY TARQUI BRIAN</div>
      </div>
    </footer>
  );
};

export default Footer;
