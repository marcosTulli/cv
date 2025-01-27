import React from "react";
import { Box } from "@mui/material";
import { CreateNode, RemoveNode } from "../buttons";
import { INodeProps } from "@/models/interfaces";
import { useNode } from "../../hooks";

// TODO: Rename this
const CreateActions: React.FC<INodeProps> = ({ node }) => {
  const { currentNodeOnHover: hoverNode } = useNode();
  const { id: hoverId } = hoverNode || { id: "" };
  const { id: parentId } = node;
  const display = hoverId === parentId;

  return (
    display && (
      <Box sx={{ display: "flex", gap: "0.8rem", paddingLeft: "1rem" }}>
        <RemoveNode node={node} />
        <CreateNode node={node} />
      </Box>
    )
  );
};

export default CreateActions;
