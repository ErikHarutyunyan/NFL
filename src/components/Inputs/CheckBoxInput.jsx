import React from "react";
import { CheckBoxLabel, CheckBoxWrap } from "./Inputs.styles";

export const CheckBoxInput = ({
  inputId,
  inputChecked,
  onInputChange,
  inputLabelText,
}) => {
  return (
    <CheckBoxWrap>
      <CheckBoxLabel htmlFor={inputId}>
        <input
          type="checkbox"
          id={inputId}
          // checked
          checked={inputChecked}
          onChange={onInputChange}
        />
        <div className="input-checkbox" />
        <span className="input-label-text">{inputLabelText}</span>
      </CheckBoxLabel>
    </CheckBoxWrap>
  );
};
