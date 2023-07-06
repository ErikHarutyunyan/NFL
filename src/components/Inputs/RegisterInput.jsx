import React from "react";
// Styles
import { RegisterWrap } from "./Inputs.styles";

export const RegisterInput = ({
   register,
   registerTarget,
   inputPlaceholder,
   isRequired,
   labelText,
   inputType,
}) => {
   return (
      <RegisterWrap>
         <label htmlFor={registerTarget}>{labelText}</label>
         <input
            id={registerTarget}
            {...register(registerTarget)}
            required={isRequired}
            type={inputType}
            placeholder={inputPlaceholder}
         />
      </RegisterWrap>
   );
};
