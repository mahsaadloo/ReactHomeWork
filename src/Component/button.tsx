import React, { type FC, type ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: "contained" | "outline" | "text";
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, varient, ...restProps }) => {
  const buttonStyle = {
    contained:
      "w-full border-none bg-rose-600 text-slate-50 hover:bg-rose-700 active:bg-rose-900",
    outline:
      "w-full border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-slate-50 active:bg-rose-900 active:text-slate-50",
    text: "w-full border-none bg-rose-300 text-slate-800 hover:bg-rose-400 active:bg-rose-500",
  };
  return (
    <button
      {...restProps}
      className={`${buttonStyle[varient ?? "contained"]} !${
        restProps.className
      } py-3 px-5 rounded-md`}
    >
      {" "}
      {children}{" "}
    </button>
  );
};
export default Button;
