import React from "react";
import "./form-input.styles.scss";
const FormInput = ({ handleChange, label, ...otherProps }) => {
  const labelFor = label[0].toLowerCase() + label?.slice(1);

  const handleClass = () => {
    if (!otherProps.value) {
      return "";
    } else if (otherProps.value.length) {
      return "shrink";
    } else return "";
  };
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${handleClass()} form-input-label`}
          htmlFor={`${labelFor}`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
