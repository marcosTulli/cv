import { create } from 'zustand';

interface PasswordGenUIState {
  passwordCopied: boolean;
  displayCopyPassword: boolean;
  showSnackbar: boolean;
  togglePasswordCoppied: () => void;
  toggleShowSnackBar: () => void;
  toggleDisplayCopyPassword: () => void;
}

const PasswordGenUIInitialState: Pick<
  PasswordGenUIState,
  'passwordCopied' | 'showSnackbar' | 'displayCopyPassword'
> = {
  passwordCopied: false,
  showSnackbar: false,
  displayCopyPassword: false,
};

export const passwordGenUIStore = create<PasswordGenUIState>()((set) => ({
  ...PasswordGenUIInitialState,
  togglePasswordCoppied: () => set((state) => ({ passwordCopied: !state.passwordCopied })),
  toggleShowSnackBar: () => set((state) => ({ showSnackbar: !state.showSnackbar })),
  toggleDisplayCopyPassword: () =>
    set((state) => ({ displayCopyPassword: !state.displayCopyPassword })),
}));
