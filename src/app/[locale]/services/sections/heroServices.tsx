import Wrapper from "@/utils/wrapper";
import { useTranslations } from "next-intl";
import React from "react";

const HeroServices = () => {
  const t = useTranslations("Services");
  return (
    <Wrapper id="heroservices">
      <div className="heropage__section">
        <div className="heropage__section-title">
          <h1 className="title-header">{t("title")}</h1>
        </div>
        <div className="heropage__section-subnav">
          <a href="#branding">BRANDING</a>
          <a href="#design">DESIGN</a>
          <a href="#content">CONTENT</a>
          <a href="#support">SUPPORT</a>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroServices;
