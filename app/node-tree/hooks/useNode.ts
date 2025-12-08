/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';
import { useEditModeStore, useNodeStore, useDialogsStore } from '../store';
import { INode } from '@/models/interfaces';

const useNode = () => {
  const [title, setTitle] = React.useState<string>('');
  const hasChildren = false;
  const disableSubmit = title.length === 0;

  const { enableEdit, toggleEdit } = useEditModeStore();

  const {
    displayOptions,
    selectedNode,
    currentNodeOnHover,
    setSelectedNode,
    clearSelectedNode,
    toggleOptions,
    setCurrentNodeOnHover,
    clearCurrentNodeOnHover,
  } = useNodeStore();

  const { openCreateDialog, openRemoveDialog, closeCreateDialog, closeRemoveDialog } =
    useDialogsStore();

  const handleAddNodeClick = ({ node }: { node: INode }) => {
    openCreateDialog();
    setSelectedNode({ node });
    displayOptions && toggleOptions();
  };

  const handleRemoveNodeClick = ({ node }: { node: INode }) => {
    openRemoveDialog();
    setSelectedNode({ node });
    displayOptions && toggleOptions();
  };

  const handleCloseCreateDialog = () => {
    closeCreateDialog();
    clearSelectedNode();
    setTitle('');
  };

  const handleCloseRemoveDialog = () => {
    closeRemoveDialog();
    clearSelectedNode();
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTitle(event.target.value);
  };

  return {
    hasChildren,
    selectedNode,
    disableSubmit,
    title,
    enableEdit,
    displayOptions,
    currentNodeOnHover,
    clearCurrentNodeOnHover,
    setCurrentNodeOnHover,
    toggleOptions,
    handleAddNodeClick,
    handleRemoveNodeClick,
    handleCloseRemoveDialog,
    handleCloseCreateDialog,
    handleInput,
    toggleEdit,
  };
};

export default useNode;
