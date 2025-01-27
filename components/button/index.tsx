"use client";
import React from "react";
import { Button, Tooltip } from "@mui/material";

interface IButtonComponentProps {
  onClick: () => void;
  display: boolean;
  variant: "outlined" | "contained" | "text";
  title: string;
}
const ButtonComponent: React.FC<
  React.PropsWithChildren & IButtonComponentProps
> = ({ children, onClick, display, variant, title }) => {
  return (
    display && (
      <Tooltip title={title}>
        <Button
          type="button"
          onClick={onClick}
          variant={variant}
          sx={{
            minWidth: "2px",
            minHeight: "2px",
            p: "5px",
            m: "0",
          }}
        >
          {children}
        </Button>
      </Tooltip>
    )
  );
};

export default ButtonComponent;
