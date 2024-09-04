import { create } from 'zustand';
import { Themes } from '../models/enums';

const localTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
interface ThemeState {
    selectedTheme: Themes;
    toggleTheme: () => void;
}

interface ITheme {
    selectedTheme: Themes;
}
const initialState: ITheme = {
    selectedTheme: localTheme !== null ? localTheme as Themes : Themes.dark,
};

const themeStore = create<ThemeState>((set) => ({
    ...initialState,
    toggleTheme: () => set((state) => {
        const newTheme = state.selectedTheme === Themes.light ? Themes.dark : Themes.light;
        localStorage.setItem('theme', newTheme);
        return { selectedTheme: newTheme };
    }),
}));

export default themeStore;
