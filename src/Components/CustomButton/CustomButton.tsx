import React from "react";
import "./CustomButton.styles.scss";

interface ButtonProps {
  label: string;
  type: "submit" | "reset" | "button";
  onClick?: any;
  isGoogleSignIn?: boolean;
}

const CustomButton: React.FC<ButtonProps> = ({
  label,
  type,
  onClick,
  isGoogleSignIn,
}): JSX.Element => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default CustomButton;
