import { create } from 'zustand';
import { IUser } from '../types';

const initialState: IUser = {
    _id: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    location: '',
    availableLanguages: [],
    cvs: [{}],
    network: { linkedin: { display: '', url: '' }, github: { display: '', url: '' } },
    info: {
        candidateTitle: '',
        about: '',
        languages: [
            { language: 'Spanish', level: 'Native' },
            { language: 'English', level: 'C2' }
        ]

    }

};

interface IUserStore {
    user: IUser,
    isLoadingUser: boolean,
    setIsLoadingUser: (isLoadingUser: boolean) => void,
    setUser: (user: IUser) => void;
}

export const userStore = create<IUserStore>()((set) => ({
    user: initialState,
    isLoadingUser: false,
    setIsLoadingUser: (state: boolean) => set({ isLoadingUser: state }),
    setUser: (user: IUser) => set({ user })
}));

export default userStore;