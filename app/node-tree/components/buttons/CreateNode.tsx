import React from 'react';
import { useNode } from '../../hooks';
import AddIcon from '@mui/icons-material/Add';
import ButtonComponent from '@/components/button/';
import { INodeProps } from '@/models/interfaces';
import { languageStore } from '@/store';

const CreateActions: React.FC<INodeProps> = ({ node }) => {
  const { handleAddNodeClick, enableEdit } = useNode();
  const { strings } = languageStore();

  return (
    <ButtonComponent
      onClick={() => handleAddNodeClick({ node })}
      display={enableEdit}
      variant="contained"
      title={strings.createNodeButtonTooltip as string}
    >
      <AddIcon color="secondary" sx={{ fontSize: '12px' }} />
    </ButtonComponent>
  );
};

export default CreateActions;
