import React from "react";
import { LineX } from "./line";

interface Props {
  children?: React.ReactNode;
  id: string;
  px?: string;
  py?: string;
  type?: string;
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
      <div id={id} className="wrapper">
        <div className="wrapper-px" style={{ padding: `0 ${px}` }}>
          <div className="wrapper-py" style={{ padding: `${py} 0` }}>
            <div className="wrapper-content">{children}</div>
          </div>
          <LineX />
        </div>
      </div>
    );
  }
  return (
    <section id={id} className="wrapper">
      <div className="wrapper-px" style={{ padding: `0 ${px}` }}>
        <div className="wrapper-py" style={{ padding: `${py} 0` }}>
          <div className="wrapper-content">{children}</div>
        </div>
        <LineX />
      </div>
    </section>
  );
};

export default Wrapper;
