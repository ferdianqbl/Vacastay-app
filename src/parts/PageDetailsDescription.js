import React from "react";
import HTMLReactParser from "html-react-parser";
import { Zoom } from "@stahl.luke/react-reveal";

const PageDetailsDescription = ({ data }) => {
  return (
    <Zoom cascade>
      <h4 className="feature-heading">About the Place</h4>
      {HTMLReactParser(data.description)}
      <div className="row" style={{ marginTop: "2rem" }}>
        {data.features.map((feature, index) => {
          return (
            <div
              key={`feature-${index}`}
              className="col-md-3"
              style={{ marginBottom: "1.875rem" }}
            >
              <img
                width={40}
                height={40}
                src={feature.imageUrl}
                alt={feature.name}
                className="d-block mb-2"
              />
              <span className="feature-qty">{feature.qty}</span>{" "}
              <span className="feature-name">{feature.name}</span>
            </div>
          );
        })}
      </div>
    </Zoom>
  );
};

export default PageDetailsDescription;
