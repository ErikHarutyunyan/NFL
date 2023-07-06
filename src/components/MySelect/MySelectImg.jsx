import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const MySelectImg = ({
  label,
  name = "",
  dataValue = [],
  handleChange = (f) => f,
  backgroundColor = "#022142",
}) => {
  const styleForm = {
    border: "none",
    borderRadius: 4,
    fontFamily: "'Saira Semi Condensed'",
    color: "#fff",
    fontSize: 16,
    backgroundColor,
    width: "100%",
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 180,
      },
    },
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 180, margin: 0, ...styleForm }}>
      <Select
        value={name}
        label={name}
        autoWidth
        onChange={(e) => handleChange(e.target)}
        sx={{
          ...styleForm,
          borderRadius: "none",
          border: "1px solid #fff",
          icon: {
            fill: "white",
          },
          "& .MuiSvgIcon-root": {
            fill: "#fff",
          },
          "&& fieldset": {
            border: "none",
          },
          "&.Mui-focused": {
            color: "#fff",
          },
          "&:active": {
            "&& fieldset": {
              border: "none",
            },
          },
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">{label}</MenuItem>
        {dataValue.map((name) => (
          <MenuItem key={name} value={name}>
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MySelectImg;
