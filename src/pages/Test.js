import InputNumber from "components/Form/InputNumber/InputNumber";
import React, { useState } from "react";

const Test = () => {
  const [input, setInput] = useState("1");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <InputNumber max={30} onChange={handleChange} name="value" value={input} suffix=" night" isSuffixPlural />
  );
};

export default Test;
