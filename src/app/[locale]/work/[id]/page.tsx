import React from "react";
import HeroSingleWork from "./sections/heroSingleWork";
import SingleContent from "./sections/singleContent";

const SingleProject = ({ params }) => {
  console.log(params);
  return (
    <main>
      <HeroSingleWork />
      <SingleContent />
    </main>
  );
};

export default SingleProject;
