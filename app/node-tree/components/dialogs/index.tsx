import React from 'react';
import { useNode } from '../../hooks';
import CreateNodeDialog from './CreateNodeDialog';
import RemoveNodeDialog from './RemoveNodeDialog';
import { INode } from '@/models/interfaces';
import { ClearTreeDialog } from './ClearTreeDialog';

const Dialogs: React.FC = () => {
  const { selectedNode } = useNode();
  return (
    <>
      <CreateNodeDialog node={selectedNode as INode} />
      <RemoveNodeDialog node={selectedNode as INode} />
      <ClearTreeDialog />
    </>
  );
};

export default Dialogs;
