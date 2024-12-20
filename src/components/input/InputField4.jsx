import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  InputBase,
  InputLabel as MuiInputLabel,
  FormControl as MuiFormControl,
  Typography,
} from "@mui/material";

const FormControl = styled(MuiFormControl)(({ border }) => ({
  width: "100%",
  display: "flex",
  flexFlow: "row",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "20px",
  border: border || "none",
  ":has(.Mui-focused)": {
    outline: "2px solid #D8D8D8",
    borderRadius: "13px",
  },
}));

const InputContainer = styled("div")(() => ({
  borderRadius: "13px",
  width: "100%",
  minHeight: "60px",
  position: "relative",
  display: "flex",
  alignItems: "center",
}));

const InputLabel = styled(MuiInputLabel)(() => ({
  color: "#D8D8D8",
  fontSize: "20px",
  fontWeight: 500,
  "&.Mui-focused": {
    color: "#D8D8D8",
  },
  "&.MuiInputLabel-shrink": {
    transform: "translate(14px, 10px) scale(0.65)",
  },
  "&.MuiFormLabel-filled": {
    color: "#D8D8D8",
  },
}));

const BootstrapInput = styled(InputBase)(() => ({
  width: "100%",
  borderRadius: "13px",
  "& .MuiInputBase-input": {
    padding: "0px 14px 0px 14px",
    borderRadius: "13px",
    width: "100%",
    fontSize: "16px",
    color: "gray",
    fontWeight: 500
  },
}));

const StartAdornment = styled("div")({
  display: "flex",
  paddingLeft: "20px",
  color: "#D8D8D8",
});

const EndAdornment = styled("div")({
  display: "flex",
  paddingRight: "20px",
  color: "#D8D8D8",
});

function InputField4({
  label,
  helperContent,
  updateFocusStatus = (status) => { },
  startAdornment,
  endAdornment,
  onKeyDown,
  border,
  error,
  ...props
}) {
  return (
    <>
      <FormControl border={border}>
   
        <InputContainer>
          <BootstrapInput
            adornment={startAdornment}
            onKeyDown={onKeyDown}
            onFocus={() => updateFocusStatus(true)}
            onBlur={() => updateFocusStatus(false)}
            autoComplete="off"
            {...props}
          />
        </InputContainer>
        {endAdornment && <EndAdornment>{endAdornment}</EndAdornment>}
      </FormControl>
      {(helperContent && !error) ? helperContent : null}
      {error ?
        <Typography sx={{
          color: "red", fontSize: "12px", pl: 2, mt: 0.5
        }}>{error}</Typography>
        : null}
    </>
  );
}

export default InputField4;

