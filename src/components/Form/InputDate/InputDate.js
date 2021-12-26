import React, { useState, useEffect, useRef } from "react";
import propTypes from "prop-types";
import { DateRange } from "react-date-range";

import formatDate from "../../../utils/formatDate";
import IconCalendar from "../../../assets/images/icons/ic_calendar.svg";
import "./InputDate.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const InputDate = (props) => {
  const { value, placeholder, name } = props;
  const [isShowed, setIsShowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name,
      },
    };

    props.onChange(target);
  };

  const refDate = useRef(null);

  const handleClickOutside = (e) => {
    if (refDate && !refDate.current.contains(e.target)) {
      setIsShowed(false);
    }
  };

  useEffect(() => {
    // when we click the outside of date picker
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div
      ref={refDate}
      className={["input-date mb-3", props.outerClassName].join(" ")}
    >
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <img src={IconCalendar} alt="icon calendar" />
          </span>
        </div>

        <input
          readOnly
          type="text"
          className="form-control"
          value={displayDate}
          placeholder={placeholder}
          onClick={() => setIsShowed(!isShowed)}
        />

        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              moveRangeOnFirstSelection={false}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

InputDate.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};

export default InputDate;
