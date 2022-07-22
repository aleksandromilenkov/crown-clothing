import React from "react";
import "./form-input.styles.scss";
const FormInput = ({ handleChange, label, ...otherProps }) => {
  const labelFor = label[0].toLowerCase() + label?.slice(1);

  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor={`${labelFor}`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
