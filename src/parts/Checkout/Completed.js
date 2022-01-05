import React from "react";
// import { Fade } from "react-awesome-reveal";
import completedIllustration from "../../assets/images/completed-illustration.png";
import "./Checkout.scss";

const Completed = () => {
  return (
    <div
      className="completed container"
      id="completed"
      style={{ marginBottom: "1.875rem" }}
    >
      <div className="row justify-content-center text-center">
        <div className="col-4">
          <img
            src={completedIllustration}
            alt="completed checkout"
            className="img-fluid"
          />

          <p className="text-gray" style={{ marginTop: "1.25rem" }}>
            We will inform you via email later once the transaction has been
            accepted
          </p>
        </div>
      </div>
    </div>
  );
};

export default Completed;
