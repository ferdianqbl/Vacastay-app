import React from "react";

const Meta = ({ data, current }) => {
  return (
    <Fade delay={300}>
      <div class="text-center" style={{ marginBottom: "1.875rem" }}>
        <h1 class="h2">{data[current] && data[current].title}</h1>
        <p class="lead text-gray-500">
          {data[current] && data[current].description}
        </p>
      </div>
    </Fade>
  );
};

export default Meta;
