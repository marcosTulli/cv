import { create } from 'zustand';
import { Themes } from '../models/enums';

interface ThemeState {
    selectedTheme: Themes;
    toggleTheme: () => void;
}

interface ITheme {
    selectedTheme: Themes;
}
const initialState: ITheme = {
    selectedTheme: Themes.dark,
};

const themeStore = create<ThemeState>((set) => ({
    ...initialState,
    toggleTheme: () => set((state) => ({ selectedTheme: state.selectedTheme === Themes.light ? Themes.dark : Themes.light })),
}));

export default themeStore;