import React from "react";
import { LineX } from "./line";

interface Props {
  children?: React.ReactNode;
  id: string;
  px?: string;
  py?: string;
  type?: string;
  pyt?: string;
  pyb?: string;
}

const Wrapper = ({
  children,
  id,
  px = "3rem",
  py = "3rem",
  type = "section",
}: Props) => {
  if (type === "div") {
    return (
      <div className={`${id} wrapper`}>
        <div className="wrapper-px">
          <div className="wrapper-py">
            <div className="wrapper-content">{children}</div>
          </div>
          <LineX />
        </div>
      </div>
    );
  }
  return (
    <section id={id} className="wrapper">
      <div className="wrapper-px">
        <div className="wrapper-py">
          <div className="wrapper-content">{children}</div>
        </div>
        <LineX />
      </div>
    </section>
  );
};

export default Wrapper;
