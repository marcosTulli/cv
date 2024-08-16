import { create } from 'zustand';
import { IUser } from '../models/interfaces';

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
            { language: 'Spanish', level: 'Native', flag: 'spain' },
            { language: 'English', level: 'C2', flag: 'uk' }
        ]

    }

};

interface IUserStore {
    user: IUser,
    isLoadingUser: boolean,
    setUser: (user: IUser) => void;
    setIsLoadingUser: (isLoading: boolean) => void;
}

export const userStore = create<IUserStore>()((set) => ({
    user: initialState,
    isLoadingUser: true,
    setUser: (user: IUser) => set({ user }),
    setIsLoadingUser: (isLoading) => set({ isLoadingUser: isLoading }),
}));

export default userStore;