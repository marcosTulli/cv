import { create } from 'zustand';

const initialState = {
  enableEdit: false,
};

interface IEditState {
  enableEdit: boolean;
  toggleEdit: () => void;
}

export const useEditModeStore = create<IEditState>()((set) => ({
  ...initialState,
  toggleEdit: () => set((state) => ({ enableEdit: !state.enableEdit })),
}));

export default useEditModeStore;
