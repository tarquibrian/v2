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
          <a href="#branding">{t("projects.project1.title")}</a>
          <a href="#design">{t("projects.project2.title")}</a>
          <a href="#content">{t("projects.project3.title")}</a>
          <a href="#support">{t("projects.project4.title")}</a>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroServices;
