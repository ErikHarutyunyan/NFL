import React from "react";

export const CheckBoxInputSecond = ({
  checked=false,
  onInputChange,
  label,
  value,
  nameClass,
  disabled=false
}) => {
 
  
  return (
    <div className={nameClass}>
      <label>
        <input
          disabled={disabled}
          type="checkbox"
          checked={checked}
          value={value}
          onChange={(e) => onInputChange(e)}
          className={checked ? "checked setting-checkbox" : "setting-checkbox"}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 24 24"
          style={{ cursor: "pointer" }}
        >
          <polygon
            width={18}
            height={18}
            fillRule="evenodd"
            points="9.707 14.293 19 5 20.414 6.414 9.707 17.121 4 11.414 5.414 10"
          />
        </svg>
      </label>
      <span>{label}</span>
    </div>
  );
};
