import { INode } from '@/models/interfaces';

export const clearNode = ({ currentNode, id }: { currentNode: INode; id: string }): INode => {
  return {
    ...currentNode,
    children: currentNode.children
      .filter((child) => child.id !== id)
      .map((child) => clearNode({ currentNode: child, id })),
  };
};
