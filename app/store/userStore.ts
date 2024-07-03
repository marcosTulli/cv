import { create } from 'zustand';
import { IUser } from '../models';

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
    setUser: (user: IUser) => void;
}

export const userStore = create<IUserStore>()((set) => ({
    user: initialState,
    setUser: (user: IUser) => set({ user })
}));

export default userStore;