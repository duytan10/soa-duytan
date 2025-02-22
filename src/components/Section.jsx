import React from "react";

const Section = ({ children, className, ...props }) => {
  return (
    <div className={`w-[1240px] mx-auto ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Section;
