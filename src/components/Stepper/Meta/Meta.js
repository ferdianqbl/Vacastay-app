import React from "react";
// import { Fade } from "react-awesome-reveal";

const Meta = ({ data, current }) => {
  return (
    <div className="text-center" style={{ marginBottom: "1.875rem" }}>
      <h1 className="h2">{data[current] && data[current].title}</h1>
      <p className="lead text-gray-500">
        {data[current] && data[current].description}
      </p>
    </div>
  );
};

export default Meta;
