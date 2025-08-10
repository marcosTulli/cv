import { INode } from '@/models/interfaces';

interface IAddNodeProps {
  currentNode: INode;
  parentId: string;
  node: INode;
}

export const addNodeRecursively = ({
  currentNode,
  parentId,
  node,
}: IAddNodeProps): INode => {
  if (currentNode.id === parentId) {
    return {
      ...currentNode,
      children: [...currentNode.children, node],
    };
  }
  return {
    ...currentNode,
    children: currentNode.children.map((child) =>
      addNodeRecursively({ currentNode: child, parentId, node }),
    ),
  };
};
