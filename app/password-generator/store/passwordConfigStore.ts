import { create } from 'zustand';
import { PasswordConfigKeys } from '../utils';


interface PasswordConfig { 
  [PasswordConfigKeys.length]: number;
  [PasswordConfigKeys.withUppercase]: boolean;
  [PasswordConfigKeys.withLowercase]: boolean;
  [PasswordConfigKeys.withNumbers]: boolean;
  [PasswordConfigKeys.withSymbols]: boolean;
}

interface PasswordConfigState {
  passwordConfig: PasswordConfig;
  updateConfig: (key: PasswordConfigKeys, value: boolean | number) => void;
}

const PasswordConfigInitialState: PasswordConfig = { 
  length: 8,
  withUppercase: true,
  withLowercase: false,
  withNumbers: false,
  withSymbols: false,
};

export const passwordConfigStore = create<PasswordConfigState>()((set) => ({
  passwordConfig: PasswordConfigInitialState,

  updateConfig: (key, value) =>
    set((state) => ({
      passwordConfig: {
        ...state.passwordConfig,
        [key]: value,
  },
    })),
}));

