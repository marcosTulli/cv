import { create } from 'zustand';

const initialState = {
  isSideBarOpen: false,
};

interface ISideBarState {
  isSideBarOpen: boolean;
  toggleSideBar: () => void;
}

export const useSideBar = create<ISideBarState>()((set) => ({
  ...initialState,
  toggleSideBar: () =>
    set((state) => ({ isSideBarOpen: !state.isSideBarOpen })),
}));

export default useSideBar;
