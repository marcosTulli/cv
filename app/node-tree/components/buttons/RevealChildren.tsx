import React from "react";
import ButtonComponent from "@/components/button";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { INodeProps } from "@/models/interfaces";
import useRevealChildren from "../../hooks/useRevealChildren";
import { languageStore } from "@/store";

const RevealActions: React.FC<INodeProps> = ({ node }) => {
  const { toggleRevealChildren } = useRevealChildren();
  const { strings } = languageStore();

  return (
    <ButtonComponent
      onClick={() => toggleRevealChildren({ nodeId: node.id })}
      display={true}
      variant="text"
      title={`${
        node.revealChildren
          ? strings.collapseNodeToolTip
          : strings.revealNodeTooltip
      }`}
    >
      {node.revealChildren ? (
        <ExpandLessIcon color="secondary" sx={{ width: "20px" }} />
      ) : (
        <ExpandMoreIcon color="secondary" sx={{ width: "20px" }} />
      )}
    </ButtonComponent>
  );
};

export default RevealActions;
