import { generateRandomString } from '@/utils';
import useDialogsStore from '../store/useDialogsStore';
import { INode } from '@/models/interfaces/';
import useRootNode from './useRootNode';
import useCreateNode from './useCreateNode';
import useRemoveNode from './useRemoveNode';
import useRevealChildren from './useRevealChildren';

const useTree = () => {
  const { closeCreateDialog, closeRemoveDialog } = useDialogsStore();
  const { rootNode, isLoading } = useRootNode();
  const { createNode } = useCreateNode();
  const { removeNode } = useRemoveNode();
  const { toggleRevealChildren } = useRevealChildren();

  const create = ({
    title,
    node,
    rootNode,
  }: {
    title: string;
    node: INode;
    rootNode: INode;
  }) => {
    const id = generateRandomString({ length: 20 });
    const newNode: INode = { id, title, children: [], revealChildren: false };
    createNode({ newNode, parentId: node.id, rootNode });
    if (!node.revealChildren) {
      toggleRevealChildren({ nodeId: node.id });
    }
    closeCreateDialog();
  };

  const remove = (id: string) => {
    removeNode({ nodeId: id });
    closeRemoveDialog();
  };

  return {
    isLoading,
    rootNode,
    create,
    remove,
  };
};

export default useTree;
