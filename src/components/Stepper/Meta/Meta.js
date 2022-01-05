import React from "react";
import "./Meta.scss";
// import { Fade } from "react-awesome-reveal";

const Meta = ({ data, current }) => {
  return (
    <div className="text-center container" style={{ marginBottom: "1.875rem" }}>
      <h1 className="meta-heading">{data[current] && data[current].title}</h1>
      <p className="meta-text">{data[current] && data[current].description}</p>
    </div>
  );
};

export default Meta;
