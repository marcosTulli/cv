"use client";
import React from "react";
import { Box, Button, TextField, Tooltip, Typography } from "@mui/material";
import { usePasswordGenerator } from "@/hooks";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const PasswordGenerator: React.FC = () => {
  const {
    password,
    tooltipTitle,
    displayCopyButton,
    disableGenerate,
    generatePassword,
    handleInputChange,
    handleCopy,
    resetTooltip,
  } = usePasswordGenerator();

  return (
    <Box
      sx={{
        bgcolor: "defaultBackground.main",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        overflow: "auto",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
          alignSelf: "flex-start",
          ml: 2,
          mt: "8rem",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={generatePassword}
      >
        <TextField
          id="standard-number"
          label="Length"
          type="number"
          variant="outlined"
          focused
          onChange={(e) => handleInputChange(e)}
          color="secondary"
          sx={{
            input: {
              color: "secondary.main",
              "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
                appearance: "none",
                margin: 0,
              },
            },
          }}
        />
        <Button variant={"contained"} type="submit" disabled={disableGenerate}>
          Generate
        </Button>
        {displayCopyButton && (
          <Tooltip title={tooltipTitle}>
            <Button
              type="button"
              onClick={handleCopy}
              onMouseOut={resetTooltip}
              variant="contained"
            >
              <ContentCopyIcon />
            </Button>
          </Tooltip>
        )}
      </Box>
      <Typography
        sx={{
          wordBreak: "break-word",
          overflowWrap: "break-word",
          width: "100%",
          color: "secondary.main",
          mb: 2,
          p: "3rem",
          textAlign: "center",
        }}
      >
        {password}
      </Typography>
    </Box>
  );
};

export default PasswordGenerator;
