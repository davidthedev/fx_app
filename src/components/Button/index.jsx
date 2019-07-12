import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Button = ({ text, handleOnClickEvent }) => {
  const classes = classNames("c-button");

  return (
    <button className={classes} onClick={handleOnClickEvent}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string
};
