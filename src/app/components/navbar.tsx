"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/img/darvy-icon.png";
import { motion } from "framer-motion";
import { LineY } from "@/utils/line";

const Navbar = () => {
  return (
    <header id="navbar">
      <div className="navbar-padding">
        <div className="logo">
          <Image src={logo} alt="logo icon" width={50} height={50} />
        </div>
        <div className="navbar-content-main">
          <nav className="links-menu">
            <Link href={"/"}>
              <span>SERVICES</span>
            </Link>
            <Link href={"/"}>
              <span>HOME</span>
            </Link>
            <Link href={"/"}>
              <span>HOME</span>
            </Link>
          </nav>
          <div className="options">
            <Link href={"/"}>
              <span>CONTACT</span>
            </Link>
          </div>
          <div className="liney"></div>
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
