import React from "react";
import Line from "./line";

interface Props {
  children?: React.ReactNode;
  id: string;
  px?: string;
  py?: string;
}

const Wrapper = ({ children, id, px = "3rem", py = "3rem" }: Props) => {
  return (
    <section id={id} className="wrapper">
      <div className="wrapper-px" style={{ padding: `0 ${px}` }}>
        <div className="wrapper-py" style={{ padding: `${py} 0` }}>
          <div className="wrapper-content">{children}</div>
        </div>
        <Line />
      </div>
    </section>
  );
};

export default Wrapper;
