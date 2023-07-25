import Wrapper from "@/utils/wrapper";
import Image from "next/image";
import React from "react";
import logotest from "../../../../public/img/logotest.svg";
import { LineX, LineY } from "@/utils/line";

const Clients = () => {
  return (
    <Wrapper id="clients">
      <div className="clients__section">
        <div className="clients__section-title">
          <h2 className="title-sm">OUR CLIENTS</h2>
        </div>
        <LineY />
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
