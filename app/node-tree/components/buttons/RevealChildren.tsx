import React from 'react';
import ButtonComponent from '@/components/button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { INodeProps } from '@/models/interfaces';
import useRevealChildren from '../../hooks/useRevealChildren';
import { languageStore } from '@/store';

const RevealActions: React.FC<INodeProps> = ({ node }) => {
  const { toggleRevealChildren } = useRevealChildren();
  const { strings } = languageStore();

  const iconStyles = {
    width: '20px',
    color: '#667eea',
    transition: 'transform 0.2s ease',
  };

  return (
    <ButtonComponent
      onClick={() => toggleRevealChildren({ nodeId: node.id })}
      display={true}
      variant="text"
      title={`${node.revealChildren ? strings.collapseNodeToolTip : strings.revealNodeTooltip}`}
    >
      {node.revealChildren ? (
        <ExpandLessIcon sx={iconStyles} />
      ) : (
        <ExpandMoreIcon sx={iconStyles} />
      )}
    </ButtonComponent>
  );
};

export default RevealActions;
