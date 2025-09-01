import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Themes } from '../models/enums';

interface ThemeState {
  selectedTheme: Themes;
  toggleTheme: () => void;
}

const themeStore = create<ThemeState>()(
  persist(
    (set) => ({
      selectedTheme: Themes.dark,
      toggleTheme: () =>
        set((state) => {
          const newTheme =
            state.selectedTheme === Themes.light ? Themes.dark : Themes.light;
          return { selectedTheme: newTheme };
        }),
    }),
    {
      name: 'theme-storage',
    }
  )
);

export default themeStore;
