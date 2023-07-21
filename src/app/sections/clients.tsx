import Wrapper from "@/utils/wrapper";
import Image from "next/image";
import React from "react";
import logotest from "../../../public/img/logotest.svg";

const Clients = () => {
  return (
    <Wrapper id="clients">
      <div className="clients__section">
        <div className="clients__section-title">
          <h2>OUR CLIENTS</h2>
        </div>
        <div className="clients__section-line"></div>
        <div className="clients__section-logos">
          <div className="logos__picture">
            <Image src={logotest} alt="logotest picture" />
          </div>
          <div className="logos__picture">
            <Image src={logotest} alt="logotest picture" />
          </div>
          <div className="logos__picture">
            <Image src={logotest} alt="logotest picture" />
          </div>
          <div className="logos__picture">
            <Image src={logotest} alt="logotest picture" />
          </div>
          <div className="logos__picture">
            <Image src={logotest} alt="logotest picture" />
          </div>
          <div className="logos__picture">
            <Image src={logotest} alt="logotest picture" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Clients;
