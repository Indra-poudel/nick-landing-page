import React from "react";

import "./button.css";

function Button(props) {
  return (
    <div
      className={`button__wrapper ${props.variant} ${props.className}`}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
}

Button.defaultProps = {
  label: "Button",
  variant: "primary",
  onClick: () => {},
};

export default Button;
