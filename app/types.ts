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
    cv: string;
    en: string;
    es: string;
}

export enum Language {
    EN = 'en',
    ES = 'es'
}