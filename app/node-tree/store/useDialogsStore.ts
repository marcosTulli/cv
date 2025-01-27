import { create } from 'zustand';

const initialState = {
	isOpenCreateDialog: false,
	isOpenRemoveDialog: false,
};

interface IEditState {
	isOpenCreateDialog: boolean;
	isOpenRemoveDialog: boolean;
	openCreateDialog: () => void;
	closeCreateDialog: () => void;
	openRemoveDialog: () => void;
	closeRemoveDialog: () => void;
}

const useDialogsStore = create<IEditState>()((set) => ({
	...initialState,
	openCreateDialog: () => set(() => ({ isOpenCreateDialog: true })),
	closeCreateDialog: () => set(() => ({ isOpenCreateDialog: false })),
	openRemoveDialog: () => set(() => ({ isOpenRemoveDialog: true })),
	closeRemoveDialog: () => set(() => ({ isOpenRemoveDialog: false })),
}));

export default useDialogsStore;
