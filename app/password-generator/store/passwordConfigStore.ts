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
  setLength: (length: number) => void;
  setWithUppercase: (value: boolean) => void;
  setWithLowercase: (value: boolean) => void;
  setWithNumbers: (value: boolean) => void;
  setWithSymbols: (value: boolean) => void;
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

  setLength: (length) => set((state) => {
    state.updateConfig(PasswordConfigKeys.length, length);
    return {};
  }),

  setWithUppercase: (value) => set((state) => {
    state.updateConfig(PasswordConfigKeys.withUppercase, value);
    return {};
  }),

  setWithLowercase: (value) => set((state) => {
    state.updateConfig(PasswordConfigKeys.withLowercase, value);
    return {};
  }),

  setWithNumbers: (value) => set((state) => {
    state.updateConfig(PasswordConfigKeys.withNumbers, value);
    return {};
  }),

  setWithSymbols: (value) => set((state) => {
    state.updateConfig(PasswordConfigKeys.withSymbols, value);
    return {};
  }),
}));

export default passwordConfigStore;
