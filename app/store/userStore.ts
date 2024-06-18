import { create } from 'zustand';
import { IUser } from '../types';

const initialState: IUser = {
    _id: "",
    name: "",
    password: "",
    email: "",
    info: {
        candidateTitle: "",
        phone: "",
        location: "",
        about: {
            en: "",
            sp: ""
        },
        languages: {
            en: [
                {
                    language: "",
                    level: ""
                },
                {
                    language: "",
                    level: ""
                }
            ],
            sp: [
                {
                    language: "",
                    level: ""
                },
                {
                    language: "",
                    level: ""
                }
            ]
        },
        social: {
            linkedin: {
                display: "",
                url: ""
            },
            github: {
                display: "",
                url: ""
            }
        },
        cvEn: "",
        cvEs: ""
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