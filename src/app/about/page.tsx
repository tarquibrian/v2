import React from "react";
import HeroAbout from "./sections/heroAbout";
import ProfileAbout from "./sections/profileAbout";
import Values from "../sections/values";
import Contact from "../sections/contact";

const AboutPage = () => {
  return (
    <main>
      <HeroAbout />
      <ProfileAbout />
      <Values />
      <Contact />
    </main>
  );
};

export default AboutPage;
