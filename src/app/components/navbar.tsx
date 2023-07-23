"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/img/darvy-icon.png";
import { motion } from "framer-motion";
import { LineY } from "@/utils/line";
import LinkedinIcon from "./icons/linkedin";
import InstagramIcon from "./icons/instagram";
import GithubIcon from "./icons/github";

const Navbar = () => {
  return (
    <header id="navbar">
      <div className="navbar-padding">
        <div className="logo">
          <Image src={logo} alt="logo icon" width={50} height={50} />
        </div>
        <div className="navbar-content-main">
          <div className="main__menu">
            <nav>
              <Link href={"/"}>HOME</Link>
              <Link href={"/"}>HOME</Link>
              <Link href={"/"}>HOME</Link>
            </nav>
            <Link href={"/"} className="main__menu-contact">
              CONTACT
            </Link>
          </div>
          <div className="liney"></div>
          <div className="main__socials">
            <div className="main__socials-icons">
              <LinkedinIcon />
              <InstagramIcon />
              <GithubIcon />
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="line"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: 0.3 }}
      ></motion.div>
    </header>
  );
};

export default Navbar;
