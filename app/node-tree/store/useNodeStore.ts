import { create } from 'zustand';
import { INode, INodeProps } from '@/models/interfaces';

interface INodeStore {
  isCollapsed: boolean;
  selectedNode: INode | null;
  displayOptions: boolean;
  currentNodeOnHover: INode | null;
  toggleReveal: () => void;
  setSelectedNode: ({ node }: INodeProps) => void;
  clearSelectedNode: () => void;
  toggleOptions: () => void;
  clearCurrentNodeOnHover: () => void;
  setCurrentNodeOnHover: ({ node }: INodeProps) => void;
}

const initialState = {
  isCollapsed: false,
  selectedNode: null,
  displayOptions: false,
  currentNodeOnHover: null,
};

const useNodeStore = create<INodeStore>()((set) => ({
  ...initialState,
  toggleReveal: () => set((state) => ({ isCollapsed: !state.isCollapsed })),
  toggleOptions: () =>
    set((state) => ({ displayOptions: !state.displayOptions })),
  setSelectedNode: ({ node }: INodeProps) =>
    set(() => ({ selectedNode: node })),
  clearSelectedNode: () => set(() => ({ selectedNode: null })),
  setCurrentNodeOnHover: ({ node }: INodeProps) =>
    set(() => ({ currentNodeOnHover: node })),
  clearCurrentNodeOnHover: () => set(() => ({ currentNodeOnHover: null })),
}));

export default useNodeStore;
