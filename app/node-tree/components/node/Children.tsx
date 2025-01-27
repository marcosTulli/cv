import React from "react";
import { Box } from "@mui/material";
import { INodeProps } from "@/models/interfaces";
import Node from "./index";

const Children: React.FC<INodeProps> = ({ node }) => {
  return (
    <Box component="ul" sx={{ listStyleType: "none", pl: "2rem", margin: 0 }}>
      {node.revealChildren &&
        node.children?.map((childNode) => (
          <li key={childNode.id}>
            <Node node={childNode} />
          </li>
        ))}
    </Box>
  );
};

export default Children;
