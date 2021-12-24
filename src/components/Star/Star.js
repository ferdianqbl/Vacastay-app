import React from "react";
import propTypes from "prop-types";
import "./Star.scss";

const Star = ({ className, value, height, width, spacing }) => {
  const decimals = Number(value) % 1; // mengambil nilai decimalnya
  const star = [];
  let leftPos = 0;

  // for integer value's star
  for (let i = 0; i < 5 && i < value - decimals; i++) {
    leftPos += width;
    star.push(
      <div
        className="star"
        key={`star-${i}`}
        style={{ left: i * width, height: height, width: width, marginRight: spacing }}
      ></div>
    );
  }

  if (decimals > 0 && value <= 5) {
    star.push(
      <div
        className="star"
        key={`starWithDecimals`}
        style={{ left: leftPos, height: height, width: decimals * width - spacing }}
      ></div>
    );
  }

  const starPlaceholder = [];
  for (let i = 0; i < 5; i++) {
    star.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${i}`}
        style={{ left: i * width, height: height, width: width, marginRight: spacing }}
      ></div>
    );
  }


  return (
    <div className={[`stars`, className].join(" ")} style={{ height: height }}>
      {starPlaceholder}
      {star}
    </div>
  );
};

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
  spacing: propTypes.number,
};

export default Star;
