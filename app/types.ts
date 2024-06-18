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

export enum Language {
    EN = 'en',
    ES = 'es'
}


// ______________ NEW MODELS ____________
export interface ITask {
    _id: string;
    task: string;
}

export interface IPosition {
    en: string;
    sp: string;
}

export interface ITasks {
    en: ITask[];
    sp: ITask[] | string[];
}

export interface IExperience {
    _id: string;
    activePeriod: string;
    companyName: string;
    comapnyUrl: string;
    companyLogo: string;
    position: IPosition;
    tasks: ITasks;
}

export interface IUser {
    _id: string;
    userId: string;
    experiences: IExperience[];
}


