import { create } from 'zustand';

const initialState = {
  isOpenCreateDialog: false,
  isOpenRemoveDialog: false,
  isOpenClearTreeDialog: false,
};

interface IEditState {
  isOpenCreateDialog: boolean;
  isOpenRemoveDialog: boolean;
  isOpenClearTreeDialog: boolean;
  openCreateDialog: () => void;
  closeCreateDialog: () => void;

  openRemoveDialog: () => void;
  closeRemoveDialog: () => void;

  openClearTreeDialog: () => void;
  closeClearTreeDialog: () => void;
}

const useDialogsStore = create<IEditState>()((set) => ({
  ...initialState,
  openCreateDialog: () => set(() => ({ isOpenCreateDialog: true })),
  closeCreateDialog: () => set(() => ({ isOpenCreateDialog: false })),

  openRemoveDialog: () => set(() => ({ isOpenRemoveDialog: true })),
  closeRemoveDialog: () => set(() => ({ isOpenRemoveDialog: false })),

  openClearTreeDialog: () => set(() => ({ isOpenClearTreeDialog: true })),
  closeClearTreeDialog: () => set(() => ({ isOpenClearTreeDialog: false })),
}));

export default useDialogsStore;
