import { INode } from '@/models/interfaces';

export const revealNodeRecursively = ({
  currentNode,
  id,
}: {
  currentNode: INode;
  id: string;
}): INode => {
  if (currentNode.id === id) {
    return {
      ...currentNode,
      revealChildren: !currentNode.revealChildren,
    };
  }

  if (currentNode.children) {
    return {
      ...currentNode,
      children: currentNode.children.map((child) =>
        revealNodeRecursively({ currentNode: child, id }),
      ),
    };
  }

  return currentNode;
};
