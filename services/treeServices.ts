import { ICreateNodeProps, INode } from '@/models/interfaces';
import {
  addNodeRecursively,
  getLocalStorageData,
  removeNodeRecursively,
  revealNodeRecursively,
  setLocalStorageData,
} from '@/utils';

const LOCAL_STORAGE_KEY = 'root';

class TreeServices {
  private initializeRootNode: () => INode;
  private getRootNode: () => INode;
  private updateRootNode: (rootNode: INode) => INode;
  public createNode: (props: ICreateNodeProps) => Promise<INode>;
  public fetchRootNode: () => Promise<INode>;
  public removeNode: (props: { nodeId: string }) => Promise<INode>;
  public toggleRevealChildren: (props: { nodeId: string }) => Promise<INode>;
  public clearTree: () => Promise<void>;

  constructor() {
    this.initializeRootNode = () => {
      const defaultRootNode: INode = {
        id: 'root',
        title: 'Root',
        children: [],
      };
      setLocalStorageData(LOCAL_STORAGE_KEY, defaultRootNode);
      return defaultRootNode;
    };

    this.clearTree = () => {
      this.initializeRootNode();
      return Promise.resolve();
    };

    this.getRootNode = () => {
      return getLocalStorageData(LOCAL_STORAGE_KEY) || this.initializeRootNode();
    };

    this.updateRootNode = (rootNode: INode) => {
      setLocalStorageData(LOCAL_STORAGE_KEY, rootNode);
      return rootNode;
    };

    this.createNode = async ({ parentId, newNode, rootNode }: ICreateNodeProps): Promise<INode> => {
      const updatedRootNode = addNodeRecursively({
        currentNode: rootNode,
        node: newNode,
        parentId,
      });
      return this.updateRootNode(updatedRootNode);
    };

    this.fetchRootNode = async (): Promise<INode> => {
      return this.getRootNode();
    };

    this.removeNode = async ({ nodeId }: { nodeId: string }): Promise<INode> => {
      const rootNode = this.getRootNode();
      const updatedRootNode = removeNodeRecursively({
        currentNode: rootNode,
        id: nodeId,
      });
      return this.updateRootNode(updatedRootNode);
    };

    this.toggleRevealChildren = async ({ nodeId }: { nodeId: string }): Promise<INode> => {
      const rootNode = this.getRootNode();
      const updatedRootNode = revealNodeRecursively({
        currentNode: rootNode,
        id: nodeId,
      });
      return this.updateRootNode(updatedRootNode);
    };
  }
}

const TreeServicesInstance = new TreeServices();
export default TreeServicesInstance;
