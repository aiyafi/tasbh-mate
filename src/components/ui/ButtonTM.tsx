import React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "primary" | "secondary";
}

const variantClasses = {
    default: "px-4 py-2 border rounded",
    primary: "px-4 py-2 border rounded bg-blue-500 text-white",
    secondary: "px-4 py-2 border rounded bg-gray-200 text-black",
};

const ButtonTM: React.FC<ButtonProps> = ({
    children,
    variant = "default",
    className = "",
    ...props
}) => {
    return (
        <button className={`${variantClasses[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default ButtonTM;