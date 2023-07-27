"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../../public/img/darvy-icon.png";
import { motion, useAnimation } from "framer-motion";
import { LineY } from "@/utils/line";
import { usePathname } from "next/navigation";
import Link from "next-intl/link";
import LogoIcon from "./icons/logo";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const controls = useAnimation();
  const pathname = usePathname();

  useEffect(() => {
    if (toggleMenu) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [toggleMenu]);

  useEffect(() => {
    setToggleMenu(false);
  }, [pathname]);

  return (
    <header id="navbar">
      <div className="navbar-padding">
        <div className="logo">
          <LogoIcon />
        </div>
        <div className="navbar-content-main">
          <div className="main__menu">
            <nav>
              <Link
                href={"/"}
                className={pathname.split("/")[1] === "" ? "active" : ""}
              >
                HOME
              </Link>
              <Link
                href={"/services"}
                className={
                  pathname.split("/")[1] === "services" ? "active" : ""
                }
              >
                SERVICES
              </Link>
              <Link
                href={"/work"}
                className={pathname.split("/")[1] === "work" ? "active" : ""}
              >
                WORK
              </Link>
              <Link
                href={"/about"}
                className={pathname.split("/")[1] === "about" ? "active" : ""}
              >
                ABOUT
              </Link>
            </nav>
            <Link href={"/"} className="main__menu-contact">
              LET'S TALK
            </Link>
          </div>
          <LineY id="lineone" />
          <div className="main__socials">
            <div className="main__socials-icons">
              <Link href={`/`} locale="en" className="en">
                <span>EN</span>
              </Link>
              <Link href={`/${pathname}`} locale="es" className="es">
                <span>ES</span>
              </Link>
            </div>
          </div>
          <LineY id="linetwo" />
          <button
            className="iconmenu"
            onClick={() => {
              setToggleMenu(!toggleMenu);
              console.log(toggleMenu);
            }}
          >
            <div className="iconmenu__line"></div>
            <div className="iconmenu__line"></div>
            <div className="iconmenu__line"></div>
          </button>
        </div>
        <motion.div
          className={`sidebar`}
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              display: "block",
              transform: "translateY(100%)",
              opacity: 1,
              transition: {
                duration: 0.2,
              },
            },
            hidden: {
              opacity: 0,
              transform: "translateY(105%)",
              transition: {
                duration: 0.2,
              },
              transitionEnd: {
                display: "none",
              },
            },
          }}
        >
          <div className="sidebar-links">
            <Link href={"/"} className="link">
              HOME
            </Link>
            <Link href={"/services"} className="link">
              SERVICES
            </Link>
            <Link href={"/work"} className="link">
              WORK
            </Link>
            <Link href={"/about"} className="link">
              ABOUT
            </Link>
            <div className="contactt">
              <div className="">CONTACT</div>
              <Link href={"/"} className="contact-link">
                LETS TALK
              </Link>
            </div>
          </div>
        </motion.div>
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
