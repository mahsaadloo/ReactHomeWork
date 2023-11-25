/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useId, type FC, type ReactNode } from "react";

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label?: ReactNode;
    helperText?: ReactNode;
    icon?: ReactNode;
    validation?: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Textfield: FC<TextfieldProps> = ({label, helperText, icon, validation, ...restProps}) => {
    const id = useId();
    return (
        <div>
            {Boolean(label) && <label htmlFor={id}> {label} </label>}
            {Boolean(icon) && <span>{icon}</span>} <input id={id} {...restProps} />
            {Boolean(helperText) && <p> {helperText} </p>}
        </div>
    )
}
export default Textfield;