import React from 'react';
import { useNode } from '../../hooks';
import ButtonComponent from '@/components/button';
import { INodeProps } from '@/models/interfaces';
import { MoreVert } from '@mui/icons-material';

const DisplayOptions: React.FC<INodeProps> = ({ node }) => {
  const { id } = node;
  const { toggleOptions, displayOptions, enableEdit } = useNode();
  const isParent = id === 'root';

  return (
    <ButtonComponent
      onClick={toggleOptions}
      display={!displayOptions && enableEdit && !isParent}
      variant="text"
      title="Opciones"
    >
      <MoreVert color="secondary" sx={{ fontSize: '15px' }} />
    </ButtonComponent>
  );
};

export default DisplayOptions;
