import { create } from 'zustand';
import { NetworkName } from '../models/interfaces';

export type EditTargetType = 'network';

export interface IEditTarget {
  type: EditTargetType;
  name: NetworkName;
  display: string;
  url: string;
}

export type SnackbarSeverity = 'success' | 'error' | 'info' | 'warning';

interface ISnackbarState {
  isOpen: boolean;
  message: string;
  severity: SnackbarSeverity;
}

interface IUiStore {
  isEditMode: boolean;
  editTarget: IEditTarget | null;
  snackbar: ISnackbarState;
  toggleEditMode: () => void;
  setEditMode: (value: boolean) => void;
  openEdit: (target: IEditTarget) => void;
  closeEdit: () => void;
  showSnackbar: (message: string, severity?: SnackbarSeverity) => void;
  closeSnackbar: () => void;
}

const initialSnackbar: ISnackbarState = {
  isOpen: false,
  message: '',
  severity: 'success',
};

export const uiStore = create<IUiStore>()((set) => ({
  isEditMode: false,
  editTarget: null,
  snackbar: initialSnackbar,
  toggleEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
  setEditMode: (value: boolean) => set({ isEditMode: value }),
  openEdit: (target: IEditTarget) => set({ editTarget: target }),
  closeEdit: () => set({ editTarget: null }),
  showSnackbar: (message: string, severity: SnackbarSeverity = 'success') =>
    set({ snackbar: { isOpen: true, message, severity } }),
  closeSnackbar: () => set((state) => ({ snackbar: { ...state.snackbar, isOpen: false } })),
}));

export default uiStore;
