export enum Language {
    EN = 'en',
    ES = 'es',
}
export interface IEducation {
    id: number,
    title: string;
    content: string;
    url?: string;
}

export interface IJobs {
    id: number,
    en: {
        position: string;
        activePeriod: string;
        companyName: string;
        comapnyUrl: string;
        companyLogo: string;
        tasks: string[];
    };
    es: {
        position: string;
        activePeriod: string;
        companyName: string;
        comapnyUrl: string;
        companyLogo: string;
        tasks: string[];
    };
}

export interface ISkillsResponse {
    _id: string,
    userId: string,
    skills: ISkills[];
}
export interface ISkills {
    _id: number,
    name: string;
    formattedName: string;
}

export interface IContactInfo {
    id: number;
    name: string;
    src: string;
    value: string;
}

export interface Translation {
    candidateName: string;
    candidateTitle: string;
    professionalHistory: string;
    about: string;
    workExperience: string;
    education: string;
    skills: string;
    agile: string;
    english: string;
    spanish: string;
    email: string;
    location: string;
    phone: string;
    linkedin: string;
    github: string;
    linkedinURL: string;
    githubURL: string;
    projectRepo: string;
    cv: string;
    en: string;
    es: string;
    englishCertificate: string;
    azureCertificate: string;
    dropdownOptionsDownload: string,
    dropdownOptionsClone: string,
}

// ______________ NEW MODELS ____________

export interface IAbout {
    en: string;
    sp: string;
}

export interface ILanguage {
    language: string;
    level: string;
    flag: string;
}

export interface ISocial {
    linkedin: ISocialMedia;
    github: ISocialMedia;
}

export interface ISocialMedia {
    display: string;
    url: string;
}

export interface IUserInfo {
    candidateTitle: string;
    about: string;
    languages: ILanguage[];
}

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

export interface ITask {
    _id: string;
    task: string;
}

export interface IExperienceInfo {
    position: string;
    tasks: ITask[];
}

export interface IExperience {
    _id: string;
    comapnyUrl: string;
    activePeriod: string;
    companyName: string;
    companyLogo: string;
    info: IExperienceInfo;
}
export interface IWorkExperience {
    _id: string;
    userId: string;
    experiences: IExperience[];
}

export interface IBaseParams {
    lang: Language,
    id: string;
}

export interface IGetUsersParams extends IBaseParams { }
export interface IGetWorkDataParams extends IBaseParams { }
export interface IGetEducationParams extends IBaseParams { }
export interface IGetSkillsParams {
    id: string;
}

export type TAxiosGetParams = IGetEducationParams | IGetUsersParams | IGetWorkDataParams | IGetSkillsParams;

export interface IGetIconParams {
    fileKey: string;
}
export interface IGetIconKeyParams {
    name: string;
}
