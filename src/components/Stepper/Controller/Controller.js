import React from "react";
import { Fade } from "react-awesome-reveal";

const Controller = (props) => {
  return (
    <Fade cascade>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-3">{props.children}</div>
        </div>
      </div>
    </Fade>
  );
};

export default Controller;
