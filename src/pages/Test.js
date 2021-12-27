import Breadcrumb from "components/Breadcrumb/Breadcrumb";
// import InputDate from "components/Form/InputDate/InputDate";
// import InputNumber from "components/Form/InputNumber/InputNumber";
import React, { useState } from "react";

// const Test = () => {
//   const [input, setInput] = useState("1");

//   const handleChange = (e) => {
//     setInput(e.target.value);
//   };

//   return (
//     <InputNumber max={30} onChange={handleChange} name="value" value={input} suffix=" night" isSuffixPlural />
//   );
// };

// const Test = () => {
//   const [value, setValue] = useState({
//     startDate: new Date(),
//     endDate: new Date(),
//     key: "selection",
//   });

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <InputDate max={30} onChange={handleChange} name="value" value={value} />
//   );
// };

const Test = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];
  return <Breadcrumb data={breadcrumbList} />;
};

export default Test;
