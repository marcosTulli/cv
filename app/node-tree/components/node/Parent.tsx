import React from "react";
import { Box, Typography } from "@mui/material";
import CreateActions from "./CreateActions";
import { INodeProps } from "@/models/interfaces";
import RevealActions from "./RevealActions";
import { useNode } from "../../hooks";

const Parent: React.FC<INodeProps> = ({ node }) => {
  const { setCurrentNodeOnHover, clearCurrentNodeOnHover } = useNode();
  return (
    <Box
      sx={{
        width: "fit-content",
        marginTop: "0.5rem",
        display: "flex",
        alignItems: "center",
        borderRadius: "4px",
      }}
      onMouseEnter={() => {
        setCurrentNodeOnHover({ node });
      }}
      onMouseLeave={() => {
        clearCurrentNodeOnHover();
      }}
    >
      <RevealActions node={node} />
      <Typography
        variant="body1"
        fontSize={"13px"}
        px="1rem"
        py="0.2rem"
        borderRadius={"0.4rem"}
        bgcolor={"primary.main"}
        color="secondary.main"
      >
        {node.title}
      </Typography>
      <CreateActions node={node} />
    </Box>
  );
};

export default Parent;
