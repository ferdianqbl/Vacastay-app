import React from "react";
import { Fade } from "@stahl.luke/react-reveal";

const FeaturedImage = ({ data }) => {
  return (
    <div className="container-grid sm">
      {data.map((item, index) => {
        return (
          <div
            key={`FeaturedImage-${index}`}
            className={`item ${index > 0 ? "column-5" : "column-7"} ${
              index > 0 ? "row-1" : "row-2"
            }`}
          >
            <Fade left delay={500 * index}>
              <div className="card h-100">
                <figure className="img-wrapper">
                  <img src={item.url} alt={item._id} className="img-cover" />
                </figure>
              </div>
            </Fade>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedImage;
