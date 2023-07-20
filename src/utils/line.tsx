"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Line = () => {
  const ref = useRef();
  const [refView, inView] = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      className="wrapper-line"
      ref={refView}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          width: "100%",
          transition: {
            duration: 1,
            delay: 0.3,
          },
        },
        hidden: { width: "0%" },
      }}
    ></motion.div>
  );
};

export default Line;
