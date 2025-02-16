import React from "react";
const btnType = {
  green: "btn--greenBase",
  outline: "btn--outline",
};
const Button = ({ onClick, variant, className, children, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnType[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
