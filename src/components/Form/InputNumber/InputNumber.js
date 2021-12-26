import React, { useState } from "react";
import propTypes from "prop-types";
import "./InputNumber.scss";

const InputNumber = (props) => {
  const { value, placeholder, name, min, max, prefix, suffix, isSuffixPlural } =
    props;

  const [inputValue, setInputValue] = useState(
    `${prefix}${value}${suffix}${isSuffixPlural && value > 1 ? "s" : ""}`
  );

  const handleOnChange = (e) => {
    let val = String(e.target.value);

    // if (prefix) val = val.replace(prefix, "");
    // if (suffix) val = val.replace(suffix, "");

    const patternNumeric = new RegExp("[0-9]*");
    const isNumeric = patternNumeric.test(val);

    if (isNumeric && +val <= max && +val >= min) {
      props.onChange({
        target: {
          name,
          value: +val,
        },
      });

      setInputValue(
        `${prefix}${val}${suffix}${isSuffixPlural && val > 1 ? "s" : ""}`
      );
    }
  };

  const handleMinus = () => {
    value > min &&
      handleOnChange({
        target: {
          name,
          value: +value - 1,
        },
      });
  };
  const handlePlus = () => {
    value < max &&
      handleOnChange({
        target: {
          name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={handleMinus}>
            -
          </span>
        </div>

        <input
          min={min}
          max={max}
          name={name}
          pattern="[0-9]*"
          className="form-control"
          placeholder={placeholder ? placeholder : "0"}
          value={String(inputValue)}
          onChange={handleOnChange}
        />

        <div className="input-group-append">
          <span className="input-group-text plus" onClick={handlePlus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
};

InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

InputNumber.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  isSuffixPlural: propTypes.bool,
};

export default InputNumber;
