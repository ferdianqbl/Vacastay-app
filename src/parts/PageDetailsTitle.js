import Breadcrumb from "components/Breadcrumb/Breadcrumb";
import React from "react";
import { Fade } from "react-awesome-reveal";

const PageDetailsTitle = ({ data, breadcrumb }) => {
  return (
    <Fade direction="down" cascade triggerOnce>
      <div className="page-details-title">
        <div className="row align-items-center justify-content-center">
          <div className="col-md">
            <Breadcrumb data={breadcrumb} />
          </div>

          <div className="col-md text-center">
            <h3
              className="section-heading"
              style={{ marginBottom: ".3125rem" }}
            >
              {data.name}
            </h3>
            <p
              className="page-details-text"
              style={{ marginBottom: `3.125rem` }}
            >
              {data.city}, {data.country}
            </p>
          </div>
          <div className="col-md"></div>
        </div>
      </div>
    </Fade>
  );
};

export default PageDetailsTitle;
