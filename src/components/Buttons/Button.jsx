import React from 'react';

// Styles
import { Btn } from './Button.styles';

function Button({btnType,btnClassName,onBtnClick,btnDisable,btnText,btnIcon}) {
    return (
      <Btn
        type={btnType || "button"}
        className={`button ${btnClassName}`}
        onClick={onBtnClick}
        disabled={btnDisable}
      >
        {btnText}
        {btnIcon && <img src={btnIcon} alt="icon" />}
      </Btn>
    );
}

export default Button;