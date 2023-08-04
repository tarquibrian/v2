import { LineY } from "@/utils/line";
import Wrapper from "@/utils/wrapper";
import Link from "next/link";
import React from "react";
import LogoIcon from "./icons/logo";
import DribbbleIcon from "./icons/dribbble";
import InstagramIcon from "./icons/instagram";
import GithubIcon from "./icons/github";
import LinkedinIcon from "./icons/linkedin";

const Footer = () => {
  return (
    <footer id="footer">
      <Wrapper id="footer__section" type="div">
        <div className="footer__section-grid">
          <Wrapper id="item" type="div">
            <div className="grid__info">
              <div className="grid__info-content">
                <div className="logo">
                  <LogoIcon />
                </div>
                <span>Brian Tarqui Rojas</span>
                <span>tarquibrian@gmail.com</span>
                <span>Bolivia</span>
              </div>
              <div className="grid__info-socials">
                <a
                  href="http://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="linkeding social icon"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href="http://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="instagram social icon"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="http://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="dribbble instagram social icon"
                >
                  <DribbbleIcon />
                </a>
                <a
                  href="http://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="github social icon"
                >
                  <GithubIcon />
                </a>
              </div>
            </div>
          </Wrapper>

          <LineY />
          <div className="grid__right">
            <div className="grid__right-list">
              <span className="title-sm">PAGES</span>
              <Link href={"/"}>Services</Link>
              <Link href={"/"}>Work</Link>
              <Link href={"/"}>About</Link>
              <Link href={"/"}>Contact</Link>
            </div>
            <div className="grid__right-list">
              <span className="title-sm">NEWS</span>
              <Link href={"/"}>Blog</Link>
              <Link href={"/"}>NewsLetter</Link>
            </div>
            <div className="grid__right-list">
              <span className="title-sm">Contact</span>
              <Link href={"/"}>Terms and Conditions</Link>
              <Link href={"/"}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </Wrapper>
      <div className="author">
        <div className="author-info">
          © 2023 DARVY STUDIO - ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
