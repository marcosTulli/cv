import React from 'react';
import { TreeControl } from './TreeControl';
import ButtonComponent from '@/components/button';
import { useNode } from '../../hooks';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export const ClearTree: React.FC = () => {
  const { enableEdit } = useNode();

  return (
    <TreeControl label={'Clear'}>
      <ButtonComponent
        disabled={!enableEdit}
        onClick={() => {}}
        display={true}
        variant={'text'}
        title={'Clear'}
      >
        <DeleteOutlineIcon
          color={`${enableEdit ? 'primary' : 'disabled'}`}
          sx={{ fontSize: { xs: '16px', sm: '20px' } }}
        />
      </ButtonComponent>
    </TreeControl>
  );
};
