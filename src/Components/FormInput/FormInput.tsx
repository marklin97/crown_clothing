import React from "react";

import "./FormInput.styles.scss";

interface FormInputProps {
  handleChange: any;
  label: string;
  type: string;
  value: string;
}

const FormInput: React.FC<FormInputProps> = ({
  handleChange,
  label,
  type,
  value,
}): JSX.Element => {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        name={type}
        type={type}
        value={value}
      ></input>
      {label ? (
        <label
          className={`${value?.length > 0 ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
