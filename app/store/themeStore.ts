import { create } from 'zustand';

interface ThemeState {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

interface ITheme {
    theme: 'dark' | 'light';
}
const initialState: ITheme = {
    theme: 'dark',
};

const themeStore = create<ThemeState>((set) => ({
    ...initialState,
    toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));

export default themeStore;