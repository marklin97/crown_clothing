import React from "react";
import "./CustomButton.styles.scss";

interface ButtonProps {
  label: string;
  type: "submit" | "reset" | "button";
  onClick?: any;
}

const CustomButton: React.FC<ButtonProps> = ({
  label,
  type,
  onClick,
}): JSX.Element => {
  return (
    <button className="custom-button" type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
