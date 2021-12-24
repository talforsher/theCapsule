import clsx from "clsx";
import React, { useEffect } from "react";
import Box from "../../checkbox.svg";
import Checked from "../../checked.svg";

const CheckboxLabel = ({ children, className, ...props }) => {
  useEffect(() => {
    const img = new Image();
    img.src = Box;
    img.src = Checked;
  }, []);

  return (
    <label className={clsx(className, "checkbox flex gap-1 m-0")} {...props}>
      {children}
    </label>
  );
};

export default CheckboxLabel;