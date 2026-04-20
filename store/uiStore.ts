import { create } from 'zustand';
import { IExperience, ISkills, NetworkName } from '../models/interfaces';

export type EditTargetType = 'network';

export interface IEditTarget {
  type: EditTargetType;
  name: NetworkName;
  display: string;
  url: string;
}

export type ExperienceDialogMode = 'add' | 'edit' | 'delete' | null;

export interface IExperienceDialog {
  mode: ExperienceDialogMode;
  experience: IExperience | null;
}

export type SkillDialogMode = 'add' | 'edit' | 'delete' | null;

export interface ISkillDialog {
  mode: SkillDialogMode;
  skill: ISkills | null;
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
  experienceDialog: IExperienceDialog;
  skillDialog: ISkillDialog;
  snackbar: ISnackbarState;
  toggleEditMode: () => void;
  setEditMode: (value: boolean) => void;
  openEdit: (target: IEditTarget) => void;
  closeEdit: () => void;
  openExperienceDialog: (mode: ExperienceDialogMode, experience?: IExperience) => void;
  closeExperienceDialog: () => void;
  openSkillDialog: (mode: SkillDialogMode, skill?: ISkills) => void;
  closeSkillDialog: () => void;
  showSnackbar: (message: string, severity?: SnackbarSeverity) => void;
  closeSnackbar: () => void;
}

const initialSnackbar: ISnackbarState = {
  isOpen: false,
  message: '',
  severity: 'success',
};

const initialExperienceDialog: IExperienceDialog = {
  mode: null,
  experience: null,
};

const initialSkillDialog: ISkillDialog = {
  mode: null,
  skill: null,
};

export const uiStore = create<IUiStore>()((set) => ({
  isEditMode: false,
  editTarget: null,
  experienceDialog: initialExperienceDialog,
  skillDialog: initialSkillDialog,
  snackbar: initialSnackbar,
  toggleEditMode: () => set((state) => ({ isEditMode: !state.isEditMode })),
  setEditMode: (value: boolean) => set({ isEditMode: value }),
  openEdit: (target: IEditTarget) => set({ editTarget: target }),
  closeEdit: () => set({ editTarget: null }),
  openExperienceDialog: (mode, experience = undefined) =>
    set({ experienceDialog: { mode, experience: experience ?? null } }),
  closeExperienceDialog: () => set({ experienceDialog: initialExperienceDialog }),
  openSkillDialog: (mode, skill = undefined) =>
    set({ skillDialog: { mode, skill: skill ?? null } }),
  closeSkillDialog: () => set({ skillDialog: initialSkillDialog }),
  showSnackbar: (message: string, severity: SnackbarSeverity = 'success') =>
    set({ snackbar: { isOpen: true, message, severity } }),
  closeSnackbar: () => set((state) => ({ snackbar: { ...state.snackbar, isOpen: false } })),
}));

export default uiStore;
