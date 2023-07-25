import React from "react";
import HeroServices from "./sections/heroServices";
import BrandingServices from "./sections/brandingServices";
import DesignService from "./sections/design";
import ContentService from "./sections/contentService";
import SupportService from "./sections/supportService";
import Contact from "../sections/contact";

const ServicesPage = () => {
  return (
    <main>
      <HeroServices />
      <BrandingServices />
      <DesignService />
      <ContentService />
      <SupportService />
      <Contact />
    </main>
  );
};

export default ServicesPage;
