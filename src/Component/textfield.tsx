/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { type FC, type ReactNode } from "react";

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  helperText?: ReactNode;
  icon?: ReactNode;
  validation?: any;
}

const Textfield: FC<TextfieldProps> = ({
  id,
  label,
  helperText,
  icon,
  validation,
  ...restProps
}) => {
  return (
    <div>
      {Boolean(label) && (
        <label htmlFor={id} className="font-medium">
          {" "}
          {label}{" "}
        </label>
      )}
      <div className="flex border-2 rounded-md items-center">
        {Boolean(icon) && <span>{icon}</span>}
        <input
          className="w-full h-full bg-transparent outline-none px-2 py-2"
          {...restProps}
          id={id}
          {...validation}
        />
      </div>
      {Boolean(helperText) && (
        <p className="text-rose-600 pt-0.5"> {helperText} </p>
      )}
    </div>
  );
};

export default Textfield;
