import React from "react";

const HeadingText = ({ children, className }) => {
  return (
    <h1 className={`${className} text-secondary-900 text-bold text-3xl`}>
      {children}
    </h1>
  );
};

export default HeadingText;
