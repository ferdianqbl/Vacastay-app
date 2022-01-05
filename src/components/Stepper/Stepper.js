import React, { useState } from "react";
import propTypes from "prop-types";

const Stepper = (props) => {
  const { steps, initialStep } = props;
  const stepKeys = Object.keys(steps);
  // console.log(stepKeys);
  // console.log(initialStep);
  // console.log(stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]);

  const [CurrentStep, setCurrentStep] = useState(
    stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]
  );
  // console.log(CurrentStep);

  const totalStep = stepKeys.length;
  const indexStep = stepKeys.indexOf(CurrentStep);
  // console.log(totalStep, indexStep);

  const prevStep = () => {
    if (+indexStep > 0) setCurrentStep(stepKeys[indexStep - 1]);
  };

  const nextStep = () => {
    if (+indexStep < totalStep) setCurrentStep(stepKeys[indexStep + 1]);
  };

  return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
};

Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string,
};

export default Stepper;
export { default as MainContent } from "./MainContent/MainContent";
export { default as Controller } from "./Controller/Controller";
export { default as Meta } from "./Meta/Meta";
export { default as Numbering } from "./Numbering/Numbering";
