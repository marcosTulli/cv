import { create } from 'zustand';

export enum PasswordConfigKeys { 
 length= "length",
 withUppercase= "withUppercase",
 withLowercase= "withLowercase",
 withNumbers= "withNumbers",
 withSymbols= "withSymbols",
}

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

const PasswordConfigInitialState = { 
  length: 8,
  withUppercase: true,
  withLowercase: false,
  withNumbers: false,
  withSymbols: false,
} as const;

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

export default passwordConfigStore;
