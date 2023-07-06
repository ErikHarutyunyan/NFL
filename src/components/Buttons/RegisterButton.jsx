import React from "react";
import { CircularProgress } from "@mui/material"
// Styles
import { RegisterBtn } from "./Button.styles";

export const RegisterButton = ({
   buttonClassName,
   buttonType,
   buttonDisabled,
   onClickButton,
   buttonLoader = false,
   children,
}) => {
   return (
      <RegisterBtn
         type={buttonType}
         className={`button ${buttonClassName}`}
         disabled={buttonDisabled}
         onClick={onClickButton}
      >
         {buttonLoader ? <CircularProgress size={17} color={"inherit"} /> : children}
      </RegisterBtn>
   );
};
