import { Language } from "@/app/models/enums";
import { ISocial, IUserInfo } from "@/app/models/interfaces";

export interface IUser {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    location: string;
    availableLanguages: Language[];
    cvs: Record<string, string>[];
    network: ISocial;
    info: IUserInfo;
}