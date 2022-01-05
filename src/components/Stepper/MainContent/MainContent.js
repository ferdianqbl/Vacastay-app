import React from "react";
// import { Fade } from "react-awesome-reveal";

const MainContent = ({ data, current }) => {
  // console.log(data[current]);
  // console.log(data[current].content);
  // console.log(data, current);
  return (
    <div className="main-content">{data[current] && data[current].content}</div>
  );
};

export default MainContent;
