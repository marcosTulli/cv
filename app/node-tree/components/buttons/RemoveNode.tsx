import React from 'react';
import { useNode } from '../../hooks';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonComponent from '@/components/button';
import { INodeProps } from '@/models/interfaces';
import { languageStore } from '@/store';

const RemoveNode: React.FC<INodeProps> = ({ node }) => {
  const { id } = node;
  const { handleRemoveNodeClick, enableEdit } = useNode();
  const isParent = id === 'root';
  const { strings } = languageStore();

  return (
    <ButtonComponent
      onClick={() => handleRemoveNodeClick({ node })}
      display={!isParent && enableEdit}
      variant={'outlined'}
      title={strings.removeNodeButtonTooltip as string}
    >
      <RemoveIcon color="secondary" sx={{ fontSize: '12px' }} />
    </ButtonComponent>
  );
};

export default RemoveNode;
