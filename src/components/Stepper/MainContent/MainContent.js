import React from "react";
import { Fade } from "react-awesome-reveal";

const MainContent = ({ data, current }) => {
  return <Fade cascade>{data[current] && data[current].content}</Fade>;
};

export default MainContent;
