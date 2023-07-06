import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { PlayerName } from "./MySelect.styles";
const MySelectPlayer = ({
  label = "",
  name = "",
  dataValue = [],
  handleChange = (f) => f,
}) => {
  const styleForm = {
    border: "1px solid #989EA4",
    borderRadius: "4px",
    fontFamily: "'Saira Semi Condensed'",
    color: "red",
    fontSize: 16,
    backgroundColor: "transparent",
    width: "100%",
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 491,
      },
    },
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 491, margin: 0, ...styleForm }}>
      <Select
        value={name}
        label={name}
        autoWidth
        defaultValue="Select Value"
        onChange={(e) => handleChange(e.target)}
        sx={{
          ...styleForm,
          borderRadius: "none",
          border: "1px solid #fff",
          icon: {
            fill: "white",
          },
          "& .MuiSvgIcon-root": {
            fill: "#989EA4",
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
        
        {dataValue.map((item, idx) => {
          const { position, player } = item;
          return (
            <MenuItem
              key={idx}
              value={player}
              disabled={player === "Select Player"}
            >
              <PlayerName>
                <p>{player}</p>
                <span>{position} </span>
              </PlayerName>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default MySelectPlayer;
