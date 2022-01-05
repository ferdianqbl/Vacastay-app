import React from "react";
import { Fade } from "react-awesome-reveal";
import completedIllustration from "../../assets/images/completed-illustration.png";

const Completed = () => {
  return (
    <Fade>
      <div className="completed" id="completed">
        <div className="row justify-content-center rext-center">
          <div className="col-4">
            <img
              src={completedIllustration}
              alt="completed checkout"
              className="img-fluid"
            />

            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Completed;
