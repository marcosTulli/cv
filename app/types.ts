export interface IEducation {
    id: number,
    en: {
        title: string;
        content: string;
        url?: string;
    },
    es: {
        title: string;
        content: string;
        url?: string;
    };
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

export interface ISkills {
    id: number,
    name: string;
    url: string;
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
}

export interface ISocial {
    linkedin: ISocialMedia;
    github: ISocialMedia;
}

export interface ISocialMedia {
    display: string;
    url: string;
}


export interface ILanguageUserInfo {
    candidateTitle: string;
    about: string;
    languages: ILanguage[];
}

export enum Language {
    EN = 'en',
    ES = 'es'
}

export type TLanguageKey = `${Language}`;

// export type IUserInfo = {
//     [key in TLanguageKey]: ILanguageUserInfo
// };

export type IUserInfo = Partial<Record<TLanguageKey, ILanguageUserInfo>>;

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

