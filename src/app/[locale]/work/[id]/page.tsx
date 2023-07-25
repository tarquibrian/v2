import React from "react";
import HeroSingleWork from "./sections/heroSingleWork";
import SingleContent from "./sections/singleContent";
import Contact from "../../sections/contact";

const SingleProject = ({ params }) => {
  console.log(params);
  return (
    <main>
      <HeroSingleWork />
      <SingleContent />
      <Contact />
    </main>
  );
};

export default SingleProject;
