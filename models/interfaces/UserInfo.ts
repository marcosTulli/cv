import { ILanguage } from "@/app/models/interfaces";

export interface IUserInfo {
    candidateTitle: string;
    about: string;
    languages: ILanguage[];
}