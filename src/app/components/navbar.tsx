"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/img/darvy-icon.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header id="navbar">
      <div className="navbar-padding">
        <div className="navbar-content">
          <div className="nav">
            <div className="logo">
              <Image src={logo} alt="logo icon" width={50} height={50} />
            </div>
            <div className="navbar-content-main">
              <nav>
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
            </div>
          </div>
        </div>
        <motion.div
          className="line"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.3 }}
        ></motion.div>
      </div>
    </header>
  );
};

export default Navbar;
