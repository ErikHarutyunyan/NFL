import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


const MySelect = ({
  label,
  name = "",
  dataValue = [],
  customWidth= '100%',
  handleChange = (f) => f,
}) => {

  const styleForm = {
    border: "none",
    borderRadius: 3,
    fontFamily: "'Saira Semi Condensed'",
    color: "#46484A",
    fontSize: 16,
    backgroundColor: "#fff",
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: customWidth,
      },
    },
  };

  return (
    <FormControl sx={{ m: 1, minWidth: customWidth, margin: 0, ...styleForm }}>
      <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={name}
        label={label}
        // autoWidth
        onChange={(e) => handleChange(e.target)}
        sx={{ ...styleForm, borderRadius: "none" }}
        MenuProps={MenuProps}
      >
        <MenuItem value="">{label}</MenuItem>
        {dataValue && dataValue.length > 0 ? (
          dataValue.map((item, idx) => {
            if (idx !== 0) {
              return (
                <MenuItem value={item} key={idx}>
                  {item}
                </MenuItem>
              );
            } else {
              return null;
            }
          })
        ) : (
          <MenuItem value={name}>{name}</MenuItem>
        )}
      </Select>
    </FormControl>
  );
};

export default MySelect;
